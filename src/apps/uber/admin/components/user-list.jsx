class UserList extends React.Component {
  render(){
    return (<div>
      <div> <p>ToDo List of Users</p>
        <pre> {JSON.stringify(this.props.users)} </pre>
      </div>      
    </div>
    );
  }
}

MyComponents.UserList = UserList
