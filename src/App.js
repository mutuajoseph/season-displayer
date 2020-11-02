import React from 'react';
import Season from './components/season/Season';
import Loader from './components/loader/Loader';


class App extends React.Component{

  state = {lat: null, error: null}

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude}),
      err => this.setState({error: err.message})
    )
  }
   
  render() {
    if (this.state.lat !== null) {
    return <Season lat={this.state.lat}/>
    }

    if (this.state.error !== null) {
      return ( 
        <div style={{background: 'red', height: '100vh', color: 'white', textAlign: 'center'}}>
          <h1>Error: {this.state.error}</h1>
        </div>)
    }
    else {
      return <Loader message="Trying to access your location..."/>
    }
    
  }
}

export default App;
