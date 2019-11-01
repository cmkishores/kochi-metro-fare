import React from 'react';
import logo from './logo.svg';
import './App.css';
import stationDetails from './stationDetails'
import { timingSafeEqual } from 'crypto';





class App extends React.Component {
  constructor() {
    super()
    this.state = {
      stations:[],
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  
  componentDidMount() {
    const stationName = stationDetails.map( stations => {return stations} )
    console.log(stationName)
    this.setState(
      { stations: stationName }
       
    )
    console.log(this.state.stations.stationName)
  
  }
  
  render() {
    let stationsList = this.state.stations
    console.log(stationsList)
    let options = stationsList.map( (list) => <option key={list.stop_name}> {list.stop_name} </option>  ) 
    console.log(options)
    return (
      <div>

            <h1>Kochi metro Fare calculator</h1>
            <form>
            <label>Source station:</label>
            <select>
            {options}

            </select>
            <label>Destination station:</label>

            <select>
            {options}

            </select>
            </form>
        </div>  )
  }
  }

  export default App

