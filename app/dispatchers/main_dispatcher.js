const Api = require('../api');

const MainDispatcher = {
  pipelinesFetch({data}) {
    const {backendURL} = data;
    Api.getPipelines(backendURL).then((pipelineData) => {
      this.$store.refine('pipelines').set(pipelineData);
    });
  },
  pipelinesUpdatePeriodcally({data}) {
    const {backendURL, interval} = data;
    window.setInterval(() => {
      // TODO: CALL pipelinesFetch() instead
      Api.getPipelines(backendURL).then((pipelineData) => {
        this.$store.refine('pipelines').set(pipelineData);
      });
    }, interval);
  },
  setRoute({data}) {
    this.router.navigate(data);
  }
};

module.exports = MainDispatcher;
