module.exports = {
  "resolve": {
    "alias": {
      'vscode': require.resolve('monaco-languageclient/lib/vscode-compatibility')
    }
  },
  "node": {
    "fs": "empty",
    "global": true,
    "crypto": "empty",
    "tls": "empty",
    "net": "empty",
    "process": true,
    "module": false,
    "clearImmediate": false,
    "setImmediate": true
  },
}