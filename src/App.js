import React from 'react';
import logo from './logo.svg';
import './App.css';
import stationDetails from './stationDetails'
import Stations from './Stations'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      stations:[],
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  
  componentDidMount() {
    const stationName = stationDetails.map( stations => {return stationDetails.stop_name} )
    this.setState(
      { stations: stationName }
    )
  }
  
  render() {
    
    return (
     <Stations stationList={this.state}/>   )
  }
  }

  export default App

