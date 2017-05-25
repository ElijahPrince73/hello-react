const React = require('react');
const ReactDOM = require('react-dom');

var GreeterMessage = React.createClass({
 render: function() {
  var name = this.props.name
  var message = this.props.message
  return (
   <div>
      <h1>Hello {name}!</h1>
      <p>{message}</p>
   </div>
  )
 }
});

var GreeterForm = React.createClass({
 onFormSubmit: function(e) {
  e.preventDefault();

  var updates = {}
  var name = this.refs.name.value;
  var message = this.refs.message.value;

  if (name.length > 0) {
   this.refs.name.value = '';
   this.props.onNewName(name);
  }

  if (message.length > 0) {
   this.refs.message.value = '';
   updates.message = message;
  }

  this.props.onNewData(updates)
 },
 render: function() {
  return (
   <form onSubmit={this.onFormSubmit}>
    <div><input type="text" ref="name" placeholder="Enter Name"></input></div>
    <div> <textarea placeholder="Enter Message" ref="message"></textarea></div>
   <button>Submit</button>
   </form>
  )
 }
})

var Greeter = React.createClass({
 getDefaultProps: function() {
  return {
   name: 'React',
   message: 'This is a default Message'
  };
 },

 getInitialState: function() {
  return {
   name: this.props.name,
   message: this.props.message
  }
 },

 handleNewData: function(updates) {
  this.setState(updates)
 },
 render: function() {
  var name = this.state.name
  var message = this.props.message

  return (
   <div>
    <GreeterMessage name={name} message={message}/>

    <GreeterForm onNewData={this.handleNewData}/>
   </div>


  );
 }
})

var firstName = 'Elijah'

ReactDOM.render(
 <Greeter name={firstName}/>,
 document.getElementById('app'));
