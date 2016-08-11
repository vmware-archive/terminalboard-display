const Api = require('../api');

const MainDispatcher = {
  pipelinesFetch({data}) {
    const {backendURL} = data;
    Api.getPipelines(backendURL).then((pipelineData) => {
      this.$store.refine('pipelines').set(pipelineData);
    });
  },
  pipelinesUpdatePeriodically({data}) {
    const {interval} = data;
    window.setInterval(() => {
      this.dispatch({type: 'pipelinesFetch', data: data});
    }, interval);
  },
  setRoute({data}) {
    this.router.navigate(data);
  }
};

module.exports = MainDispatcher;
