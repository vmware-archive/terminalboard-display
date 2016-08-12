require('../spec_helper');
const ReactTestUtils = require('react-addons-test-utils');

describe('PipelineList', () => {
  let renderer;
  beforeEach(() => {
    const PipelineList = require('../../../app/components/pipeline_list');

    renderer = ReactTestUtils.createRenderer();
    renderer.render(<PipelineList pipelines={
      [{
        pipelineName: 'foo',
        pipelineStatus: 'success',
        currentlyRunning: false,
        url: 'https://example.com/foo'
      },
      {
        pipelineName: 'bar',
        pipelineStatus: 'failure',
        currentlyRunning: true,
        url: 'https://example.com/bar'
      },
      {
          pipelineName: 'baz',
        pipelineStatus: 'notARealStatus',
        currentlyRunning: true,
        url: 'https://example.com/baz'
      }]
    } />, root);
  });

  it('renders anything other than successful builds', () => {
    const result = renderer.getRenderOutput();

    const children = result.props.children;
    expect(children).toHaveLength(2);
    expect(children[0].props.pipelineName).toEqual('bar');
    expect(children[1].props.pipelineName).toEqual('baz');
  });
});
