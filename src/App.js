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
  let options = stationsList.map( (list) => <option className="input" key={list.stop_name} value={list.stop_id}> {list.stop_name} {list.stop_id} </option>  ) 
    
    return (
      <div className="card">
        <div className="card-header">
        
            <header className="card-header-title is-centered">Kochi metro Fare calculator</header>
            </div>
           <div className="section">
            <form>
            <div class="field">
            <label className="label">Source station:</label>
            <div className="control">
            
            <div className="select">
            <select 
                    value={this.state.source}
                    onChange={this.handleChange}
                    name="source">
                      
            {options}

            </select>
            </div>
            </div>
            </div>
            <div class="field">
            <label className="label">Destination station:</label>
            <div className="control">
            
            <div className="select">

            <select 
                    value={this.state.destination}
                    onChange={this.handleChange}
                    name="destination">
            {options}

            </select>
            </div>
            </div>
            </div>

            
              </form>

            <div className="card-footer">
               
            <p className="card-footer is-centered">Fare is: {this.state.fare} Rupees</p>
            </div>
            </div>

        </div>  )
  }
  }

  export default App

