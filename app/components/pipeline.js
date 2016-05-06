const React = require('react');
const classnames = require('classnames');
const types = React.PropTypes;

class Pipeline extends React.Component {
  static propTypes = {
    pipelineName: types.string.isRequired,
    pipelineStatus: types.string.isRequired,
    currentlyRunning: types.bool.isRequired
  };

  render() {
    const {pipelineName, pipelineStatus, currentlyRunning} = this.props;
    const classes = classnames("pipeline", pipelineStatus);
    return (
      <li className={classes}>
        <FlapRow text={pipelineName}></FlapRow>
      </li>
    );
  }
}

class FlapRow extends React.Component {
  static propTypes = {
    text: types.string.isRequired
  };

  render() {
    return(<div>{this.props.text}</div>);
  };
}

module.exports = Pipeline;
