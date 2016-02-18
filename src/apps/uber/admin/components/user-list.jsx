MyComponents.User = React.createClass({
 render: function() {
   return (
         <p>{this.props.user}</p>
   );
 }
});


MyComponents.UserList = React.createClass({
  render: function() {

    var usersActive = this.props.users.map(function(u,i){
      if (u.status === "online"){
        return <MyComponents.User user={u.username} key={i}/>
      }
    })
    var usersNotActive = this.props.users.map(function(u,i){
      if (u.status === "offline"){
        return <MyComponents.User user={u.username} key={i}/>
      }
    })

    return (
      <div>
      	<h5>Online Users</h5>
        	{usersActive}

      	<h5>Offline Users</h5>
        	{usersNotActive}
      </div>
    );
  }
});