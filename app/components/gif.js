const React = require('react');

class Gif extends React.Component {
  static propTypes = {
  };

  render() {
    return (
      <img src="http://thecatapi.com/api/images/get?format=src&results_per_page=1" />
    );
  }
}

module.exports = Gif;
