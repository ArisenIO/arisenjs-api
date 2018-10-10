const api = require('./api/v1')
const apiGen = require('./apigen')
const processArgs = require('./process-args')

const RsnApi = function(config) {
  return apiGen('v1', api, config)
}

Object.assign(
  RsnApi,
  {
    processArgs,
    api,

    /** @deprecated */
    Testnet: function (config) {
      console.error('deprecated, change RsnApi.Testnet(..) to just RsnApi(..)')
      return RsnApi(config)
    },

    /** @deprecated */
    Localnet: function (config) {
      console.error('deprecated, change RsnApi.Localnet(..) to just RsnApi(..)')
      return RsnApi(config)
    }
  }
)

module.exports = RsnApi
