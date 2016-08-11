require('../spec_helper');

describe('Application', () => {
  let PipelineList;

  beforeEach(() => {
    const Application = require('../../../app/components/application');
    PipelineList = require('../../../app/components/pipeline_list');
    spyOn(PipelineList.prototype, 'render').and.callThrough();
    const config = {title: 'title'};
    ReactDOM.render(<Application {...{config, Dispatcher}}/>, root);
  });

  it('has a PipelineList', () => {
    expect('.pipeline-list').toExist();
  });
});
