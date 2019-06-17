const path = require('path');

const resolve = {
  modules:[
    path.resolve(__dirname, "frontend/src"),
    "node_modules"
  ],
  alias:{
    "actions":path.resolve(__dirname, "frontend/src/actions"),
    "sagas":path.resolve(__dirname, "frontend/src/sagas"),
    "selectors":path.resolve(__dirname, "frontend/src/selectors"),
    "apis":path.resolve(__dirname, "frontend/src/apis"),
    "json":path.resolve(__dirname, "src/json"),
    "reducers":path.resolve(__dirname, "frontend/src/reducers"),
    "scss":path.resolve(__dirname, "frontend/src/scss"),
    "store":path.resolve(__dirname, "frontend/src/store"),
    "util":path.resolve(__dirname, "frontend/src/util"),
    "components":path.resolve(__dirname, "frontend/src/components"),
    "containers":path.resolve(__dirname, "frontend/src/containers"),
  }
};

module.exports = resolve;
