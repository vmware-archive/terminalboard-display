const React = require('react');
const types = React.PropTypes;

class Pipeline extends React.Component{
  static propTypes = {
    pipelineName: types.string.isRequired,
    pipelineStatus: types.string.isRequired,
    currentlyRunning: types.bool.isRequired
  };

  render() {
    const {pipelineName, pipelineStatus, currentlyRunning} = this.props;
    return (
      <li className="todo-item">
        Name: {pipelineName}, Status: {pipelineStatus}, running: {currentlyRunning.toString()}
      </li>
    );
  }
}

module.exports = Pipeline;
