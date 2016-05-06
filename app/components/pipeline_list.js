const React = require('react');
const Pipeline = require('./pipeline');
const types = React.PropTypes;

class PipelineList extends React.Component {
  static propTypes = {
    pipelines: types.array.isRequired
  };

  render() {
    const {pipelines} = this.props;

    const pipelinesList = pipelines.map((item, index) => (
      <Pipeline pipelineName={item.pipelineName} pipelineStatus={item.pipelineStatus} currentlyRunning={item.currentlyRunning} key={index}/>
    ));

    return (
      <ul className="pipeline-list">
        {pipelinesList}
      </ul>
    );
  }
}

module.exports = PipelineList;
