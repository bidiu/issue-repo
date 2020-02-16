// https://github.com/facebook/react-native/blob/master/packages/eslint-config-react-native-community/index.js
module.exports = {
  root: true,
  extends: [
    '@timeylo'
  ],
  env: {
    'jest': true,
  },
  plugins: [
    'react-native',
  ],
  globals: {
    __DEV__: true,
    __dirname: false,
    __fbBatchedBridgeConfig: false,
    alert: false,
    cancelAnimationFrame: false,
    cancelIdleCallback: false,
    clearImmediate: true,
    clearInterval: false,
    clearTimeout: false,
    console: false,
    document: false,
    ErrorUtils: false,
    escape: false,
    Event: false,
    EventTarget: false,
    exports: false,
    fetch: false,
    FormData: false,
    global: false,
    Intl: false,
    Map: true,
    module: false,
    navigator: false,
    process: false,
    Promise: true,
    requestAnimationFrame: true,
    requestIdleCallback: true,
    require: false,
    Set: true,
    setImmediate: true,
    setInterval: false,
    setTimeout: false,
    URL: false,
    WebSocket: true,
    window: false,
    XMLHttpRequest: false,
    HermesInternal: 'readonly',
  },
  rules: {
    // React-Native Plugin
    // The following rules are made available via `eslint-plugin-react-native`

    'react-native/no-inline-styles': 0,
  },
};
