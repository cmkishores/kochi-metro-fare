import React from 'react';
import logo from './logo.svg';
import './App.css';
import stationDetails from './stationDetails'
import fareDetails from './fareData'
import { timingSafeEqual } from 'crypto';





class App extends React.Component {
  constructor() {
    super()
    this.state = {
      stations:[],
      fares:[],
      source: "",
      destination: ""
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  
  componentDidMount() {
    const stationList = stationDetails.map( stations => {return stations} )
    this.setState(
      { stations: stationList }  
    )
    const fareList =  fareDetails.map( fares => {return fares})
  
    this.setState(
      {
        fares:fareList
      }
    )
  }
  
  render() {
    let stationsList = this.state.stations
    console.log(stationsList)
    let options = stationsList.map( (list) => <option key={list.stop_name}> {list.stop_name} </option>  ) 
    console.log(options)
    let faresList = this.state.fares
    console.log(faresList)
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

