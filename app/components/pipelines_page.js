const React = require('react');
const types = require('react').PropTypes;
const TodoAdder = require('./todo_adder');
const PipelineList = require('./pipeline_list');

class PipelinesPage extends React.Component {
  static propTypes = {
    config: types.object,
    pipelines: types.array
  };

  render() {
    const {config: {title}, pipelines} = this.props;
    return (
      <div className="todo-page">
        <h3 className="title">{title}</h3>
        <PipelineList pipelines={pipelines}/>
      </div>
    );
  }
}

module.exports = PipelinesPage;
