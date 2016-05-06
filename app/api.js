const {fetchJson} = require('./fetch_helper');

var Api = {
  getPipelines: function(backendURL){
    const url = `${backendURL}/api/pipeline_statuses`;
    return fetchJson(url);
  }
};

module.exports = Api;
