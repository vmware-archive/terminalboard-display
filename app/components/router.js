const React = require('react');
const types = require('react').PropTypes;
const PipelinesPage = require('./pipelines_page');
const {Actions} = require('p-flux');

function isObject(obj) {
  return typeof obj === 'object';
}

function toFlattenedRoutes(routesHash) {
  return Object.keys(routesHash).reduce((paths, parent) => {
    if (isObject(routesHash[parent])) {
      const children = toFlattenedRoutes(routesHash[parent]);
      Object.keys(children).forEach(child => paths[parent + child] = children[child]);
    } else {
      paths[parent] = routesHash[parent];
    }
    return paths;
  }, {});
}

const routes = {
  '/': 'pipelines',
  '/pipelines': 'pipelines'
};

class Router extends React.Component {
  static propTypes = {
    router: types.oneOfType([types.object, types.func]),
    config: types.object
  };

  constructor(props, context) {
    super(props, context);
    const {state} = this;
    this.state = {...state, Page: PipelinesPage };
  }

  componentDidMount() {
    const {router} = this.props;
    Object.entries(toFlattenedRoutes(routes)).map(([path, callbackName]) => {
      router.get(path, this[callbackName]);
    });
  }
  pipelines = () => {
    console.log('re-rendering page');
    const {config} = this.props;
    Actions.pipelinesFetch({backendURL: config.backendURL});
    Actions.pipelinesUpdatePeriodcally({backendURL: config.backendURL, interval: 15000});
    this.setState({Page: PipelinesPage});
  };

  render() {
    const {Page} = this.state;
    return (
      <Page {...this.props}/>
    );
  }
}

module.exports = Router;
