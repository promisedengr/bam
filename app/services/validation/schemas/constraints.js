const cvv = {
  presence: true,
  format: {
    pattern: /^\d{3}$/,
    message: 'must be 3 digit',
  },
}

const SMSCode = {
  presence: true,
  format: {
    pattern: /^\d{6}$/,
    message: 'must be 6 digit',
  },
}

const date = {
  date: true,
}

export default {
  cvv,
  date,
  SMSCode,
}
