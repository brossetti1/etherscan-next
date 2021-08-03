const ENDPOINT = "http://localhost:8545";
const ETHERSCAN_TOKEN = "JIKG3GHQAYNSZ4ZZ9EGEGUJEX3JYPF86VY";

const axios = require('axios');

class ClientJSONRPC {
  constructor() {}

  getJsonRPC(method, params = {}) {
    return axios.get(ENDPOINT, {
      jsonrpc: "2.0",
      id: 1,
      method: method,
      params: params
    })
  }

  postJsonRPC() {
    return axios.post(ENDPOINT, {
      jsonrpc: "2.0",
      id: 1,
      method: method,
      params: params
    })
  }
}


export default ClientJSONRPC;
