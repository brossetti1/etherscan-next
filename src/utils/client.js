const ENDPOINT = process.env.ENDPOINT;

axios = require('axios')

class Client {
  getJsonRPC(method, params = {}) {
    axios.get(ENDPOINT, {
      jsonrpc: "2.0",
      id: 1,
      method: method,
      params: params
    })
  }

  postJsonRPC() {
    axios.post(ENDPOINT, {
      jsonrpc: "2.0",
      id: 1,
      method: method,
      params: params
    })
  }
}
