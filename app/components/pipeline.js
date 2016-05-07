const React = require('react');
const ReactDOM = require('react-dom');
const classnames = require('classnames');
const types = React.PropTypes;

class Pipeline extends React.Component {
  static propTypes = {
    pipelineName: types.string.isRequired,
    pipelineStatus: types.string.isRequired,
    currentlyRunning: types.bool.isRequired,
    url: types.string.isRequired
  };

  render() {
    const {pipelineName, pipelineStatus, currentlyRunning, url} = this.props;
    const classes = classnames('pipeline', pipelineStatus);
    return (
      <li className={classes}>
        <a href={url} target="_blank">
          <BlinkingLight pipelineStatus={pipelineStatus} currentlyRunning={currentlyRunning} /><FlapRow text={pipelineName} />
        </a>
      </li>
    );
  }
}

class FlapRow extends React.Component {
  static propTypes = {
    text: types.string.isRequired
  };

  render() {
    const {text} = this.props;
    const paddedText = `  ${text}`;
    return(<div>
      <FlapDigits text={paddedText}/>
    </div>);
  };
}

class BlinkingLight extends React.Component {
  static propTypes = {
    currentlyRunning: types.bool.isRequired,
    pipelineStatus: types.string.isRequired
  };

  render() {
    const {currentlyRunning, pipelineStatus} = this.props;

    const containerClasses = classnames("blinking-light", "ring-container", pipelineStatus);

    var ringClass = "";
    if (currentlyRunning === true) {
      ringClass = "ringring"
    }

    return(
      <div className={containerClasses}>
        <div className={ringClass}></div>
        <div className="circle"></div>
      </div>
    );
  };
}


class FlapDigits extends React.Component {
  static propTypes = {
    text: types.string.isRequired
  };

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    const flapperOptions = {
      width: 30,
      align: 'left',
      timing: 100
    };
    this.flapper = $(node).flapper(flapperOptions);
  };

  componentWillReceiveProps(newProps) {
    const {text} = newProps;
    this.flapper.val(text).change();
  };


  render() {
    return(<div/>);
  }
}

module.exports = Pipeline;
