const React = require('react');
const types = require('react').PropTypes;
const TodoAdder = require('./todo_adder');
const PipelineList = require('./pipeline_list');

class PipelinesPage extends React.Component {
  static propTypes = {
    pipelines: types.array
  };

  render() {
    const {pipelines} = this.props;
    return (
      <div>
        <PipelineList pipelines={pipelines}/>
      </div>
    );
  }
}

module.exports = PipelinesPage;
