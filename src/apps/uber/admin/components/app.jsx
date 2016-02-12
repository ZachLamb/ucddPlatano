class App extends React.Component {
  render(){
    var title = "Chip's Grazin"
    return <div>
      <MyComponents.NavBar actions={this.props.actions}/>
      <div className="card">
        <MyComponents.MapView
            providers={this.props.data.providers}
            center={this.props.data.center}
            user={this.props.data.user}
            setUserLocationAction={this.props.actions.setUserLocation}/>
      </div>
        <div className="center">
        <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
          <div id="modal1" className="modal">
            <div className="modal-content">
              <h4>{title}</h4>
              <p>{title}</p>
            </div>
            <div className="modal-footer">
              <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
          </div>
        </div>
      <MyComponents.UserMap users={this.props.data.users}/>
      <MyComponents.UserList users={this.props.data.users}/>
      <MyComponents.ProviderMap users={this.props.data.providers}/>
      <MyComponents.ProviderList providers={this.props.data.providers}/>
    </div>
  }
}

MyComponents.App = App
