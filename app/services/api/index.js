import axios from 'axios'
import get from 'lodash/get'
import merge from 'lodash/merge'
import normalize from 'json-api-normalizer'
import qs from 'qs'

import { parseErrorResponse } from 'utils/api'

import { getJWTHeader } from 'store/selectors/session'

import servicesConfig from 'config/services'

import createHandlers from './handlers'

const DEFAULT_OPTIONS = {
  base: {
    url: servicesConfig.api.webUrl,
    endpoint: '',
    needsNormalization: true,
  },

  json: {
    method: 'GET',
    headers: { 'Content-Type': 'application/vnd.api+json' },
    query: {},
  },

  file: {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    query: {},
    body: {},
  },
}

const paramsSerializer = params =>
  qs.stringify(params, { arrayFormat: 'brackets' })

const getRequester = options => {
  const { query, method, file, headers, url: baseURL, endpoint: url } = options

  const payload = {
    baseURL,
    url,
    headers,
    params: query,
    paramsSerializer,
    method: method.toLowerCase(),
  }

  if (!file) {
    return axios(payload)
  }

  const { fieldName, ...fileBlob } = file
  const formData = new FormData()
  formData.append(fieldName, fileBlob)

  return axios({ ...payload, data: formData })
}

const buildSuccessResponse = (body, options) => {
  const endpoint = options.endpoint || 'info'

  const data = options.needsNormalization
    ? normalize(body, { endpoint, camelizeKeys: true })
    : body

  const meta = options.needsNormalization ? get(data, `meta.${endpoint}`) : {}

  return {
    data,
    meta,
    options,
    ok: true,
  }
}

const buildFailureResponse = (error, options) => ({
  options,
  ok: false,
  meta: {
    httpCode: error.response.status,
    networkFailure: !error.response.status,
    errors: parseErrorResponse(error.response),
  },
})

const create = store => {
  const request = (dirtyOptions, resolve) => {
    const options = merge(
      {},
      dirtyOptions.file ? DEFAULT_OPTIONS.file : DEFAULT_OPTIONS.json,
      dirtyOptions,
    )

    getRequester(options)
      .then(response => resolve(buildSuccessResponse(response.data, options)))
      .catch(error => resolve(buildFailureResponse(error, options)))
  }

  const apiCall = dirtyOptions =>
    new Promise(resolve => {
      let options = merge({}, DEFAULT_OPTIONS.base, dirtyOptions)
      const JWTHeader = getJWTHeader(store.getState())

      options = merge(
        {},
        options,
        options.url === DEFAULT_OPTIONS.base.url &&
          JWTHeader && {
            headers: {
              Authorization: JWTHeader,
            },
          },
      )

      request(options, resolve)
    })

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api. The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //

  const handlers = createHandlers(apiCall)

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface. Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1? That's
  // because it is scoped privately. This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return handlers
}

export default {
  create,
  buildSuccessResponse,
  buildFailureResponse,
}
