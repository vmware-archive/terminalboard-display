require('../spec_helper');

describe('PipelineList', () => {
  beforeEach(() => {
    const PipelineList = require('../../../app/components/pipeline_list');
    ReactDOM.render(<PipelineList todoItems={['do this', 'do that']} />, root);
  });

  it('renders the todolist', () => {
    expect('.todo-item').toHaveLength(2);
    expect('.todo-item:eq(0)').toHaveText('do this');
    expect('.todo-item:eq(1)').toHaveText('do that');
  });
});
