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

  componentWillReceiveProps(newProps) {
    this.update = newProps.currentlyRunning !== this.props.currentlyRunning;
  }

  render() {
    const {pipelineName, pipelineStatus, currentlyRunning, url} = this.props;
    const update = this.update || false;
    const classes = classnames('pipeline', pipelineStatus);
    return (
      <li className={classes}>
        <a href={url} target="_blank">
          <BlinkingLight pipelineStatus={pipelineStatus} currentlyRunning={currentlyRunning} /><FlapRow text={pipelineName} update={update} />
        </a>
      </li>
    );
  }
}

class FlapRow extends React.Component {
  static propTypes = {
    text: types.string.isRequired,
    update: types.bool.isRequired
  };

  render() {
    const {text, update} = this.props;
    const paddedText = `  ${text}`;
    return(<div>
      <FlapDigits text={paddedText} update={update}/>
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

    const containerClasses = classnames('blinking-light', 'ring-container', pipelineStatus);

    let ringClass = '';
    if (currentlyRunning === true) {
      ringClass = 'ringring';
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
    text: types.string.isRequired,
    update: types.bool.isRequired
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
    if(newProps.update){
      this.flapper.val('').change();
    }
    this.flapper.val(newProps.text).change();
  };


  render() {
    return(<div/>);
  }
}

module.exports = Pipeline;
