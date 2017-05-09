var Greeter = React.createClass({
 getDefaultProps: function() {
  return {
   name: 'React',
   message: 'This is a default Message'
  };
 },
 render: function() {
  var name = this.props.name
  var message = this.props.message
  return (
   <div>
     <h1>Hello {name}</h1>
    <p>{message + '!!'}</p>
   </div>
  );
 }
})

var firstName = 'Elijah'

ReactDOM.render(
 <Greeter name={firstName} message="This is from the prop"/>,
 document.getElementById('app'));
