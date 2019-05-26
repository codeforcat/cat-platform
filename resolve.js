const path = require('path');

const resolve = {
  modules:[
    path.resolve(__dirname, "src"),
    "node_modules"
  ],
  alias:{
    "actions":path.resolve(__dirname, "src/actions"),
    "sagas":path.resolve(__dirname, "src/sagas"),
    "selectors":path.resolve(__dirname, "src/selectors"),
    "apis":path.resolve(__dirname, "src/apis"),
    "json":path.resolve(__dirname, "src/json"),
    "reducers":path.resolve(__dirname, "src/reducers"),
    "scss":path.resolve(__dirname, "src/scss"),
    "store":path.resolve(__dirname, "src/store"),
    "util":path.resolve(__dirname, "src/util"),
    "components":path.resolve(__dirname, "src/components"),
  }
};

module.exports = resolve;
