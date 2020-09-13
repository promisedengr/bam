#  BAM mobile

[android-s-build]: https://app.bitrise.io/app/3ba1345b9a89648c/status.svg?token=-W3HrUymX6iz2u0xL9b0Sg&branch=master "Android Staging build"
[android-p-build]: https://app.bitrise.io/app/3ba1345b9a89648c/status.svg?token=-W3HrUymX6iz2u0xL9b0Sg&branch=production "Android Production build"

| Environment | Platform | Status                                                                    |
| ----------- |:--------:| -------------------------------------------------------------------------:|
| Staging     | iOS      | -                                                                         |
|             | Android  | [![android-s-build]](https://www.bitrise.io/app/b03034d8bdb9c84a#/builds) |
| Production  | iOS      | -                                                                         |
|             | Android  | [![android-p-build]](https://www.bitrise.io/app/b03034d8bdb9c84a#/builds) |

## How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install the Application with `yarn install` or `npm i`

## How to Run App

1. Start RN packager
  * First time
    * run `cd <PROJECT_PATH>`
    * run `yarn global add react-native-cli`
    * run `yarn linker`
    * run `yarn start:reset`
  * Each subsequent time
    * run `cd <PROJECT_PATH>`
    * run `yarn start`

2. Open separate terminal tab if you want to work with Android app
  * run `yarn android:emulator`

3. Open separate terminal tab. Run Build for either OS
  * for iOS (will automatically open iOS emulator via Xcode and run the app)
    * run `yarn run:ios`

  * for Android (will build and install app into active device/emulator. Will need to open app manually)
    * run `yarn run:android`

## Troubleshooting

  * In case something fails
    * run `yarn newclear` - will remove /tmp, /build and re-install node modules
    * run `yarn start:reset` - will force packager to reset cached modules

## Secrets

This project uses [react-native-config](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file:

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```

and access them from React Native like so:

```
import Secrets from 'react-native-config'

Secrets.API_URL  // 'https://myapi.com'
Secrets.GOOGLE_MAPS_API_KEY  // 'abcdefgh'
```

The `.env` and `.env.dev` files are ignored by git keeping those secrets out of the repo.
