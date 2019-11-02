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
      source: "ALVA",
      destination: "ALVA",
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
    const fareFinal = fareDetails.map( fare_is => { 
      
      if (this.state.source === fare_is.originId && this.state.destination === fare_is.destId){
        
        let fareCalculated = fare_is.fare
        this.setState({fare:fareCalculated})
        
      }
    

    })
 
  
    

  }
  render() {
    let stationsList = this.state.stations
  let options = stationsList.map( (list) => <option key={list.stop_name} value={list.stop_id}> {list.stop_name} {list.stop_id} </option>  ) 
    
    return (
      <div className="container">
        
            <header>Kochi metro Fare calculator</header>
           
            <form>
            <div className={"custom-select"} style={{width:200}}>
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
            </div>
            </form> 
            <p>Fare is: {this.state.fare} Rupees</p>

            
        </div>  )
  }
  }

  export default App

