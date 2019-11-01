import React from 'react';
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
      destination: "",
      fare: ""
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.handleChange = this.handleChange.bind(this)
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

  handleChange(event) {
    const {name,value} =event.target
    this.setState({ [name]: value })
    if (this.state.source !== "" && this.state.destination !== ""){
    const fareFinal = fareDetails.map( fare => {
      if (this.state.source === fare.originId && this.state.destination === fare.destId){
        console.log(this.state.source,fare.originId,this.state.destination,fare.destId)        
        return fare.fare
      }
      return fare

    })
    this.setState({fare:fareFinal})
    console.log(this.state)
  }
    

  }
  render() {
    let stationsList = this.state.stations
    let options = stationsList.map( (list) => <option key={list.stop_name} value={list.stop_id}> {list.stop_name} </option>  ) 
    
    return (
      <div className="container">
            <h1>Kochi metro Fare calculator</h1>
            <form>
            <label>Source station:</label>
            <select value={this.state.source}
                    onChange={this.handleChange}
                    name="source">
            {options}

            </select>
            <label>Destination station:</label>

            <select value={this.state.destination}
                    onChange={this.handleChange}
                    name="destination">
            {options}

            </select>
            </form>
            <p>Fare is:{this.state.fare}</p>

            {console.log(this.state)}
        </div>  )
  }
  }

  export default App

