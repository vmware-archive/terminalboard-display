const {fetchJson} = require('./fetch_helper');

const Api = {
  getPipelines: function(backendURL){
    const url = `${backendURL}/api/pipeline_statuses`;
    return fetchJson(url);
  }
};

module.exports = Api;
