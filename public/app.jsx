const React = require('react');
const ReactDOM = require('react-dom');

const Greeter = require('./components/Greeter');

var firstName = 'Elijah';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
