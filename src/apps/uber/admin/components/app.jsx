class App extends React.Component {
  render(){
    return <div>
      <MyComponents.NavBar actions={this.props.actions}/>
      <div className="card">
        <MyComponents.MapView
            providers={this.props.data.providers}
            center={this.props.data.center}
            user={this.props.data.user}
            setUserLocationAction={this.props.actions.setUserLocation}/>
      </div>
      <MyComponents.UserMap users={this.props.data.users}/>
      <MyComponents.UserList users={this.props.data.users}/>
      <MyComponents.ProviderMap users={this.props.data.providers}/>
      <MyComponents.ProviderList providers={this.props.data.providers}/>
    </div>
  }
}

MyComponents.App = App
