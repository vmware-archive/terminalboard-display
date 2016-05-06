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

  it('has a TodoAdder', () => {
    expect('.todo-adder').toExist();
  });

  it('has a PipelineList', () => {
    expect('.todo-list').toExist();
  });

  it('has a title', () => {
    expect('.title').toHaveText('title');
  });
});
