import React from 'react';
import logo from './logo.svg';
import './App.css';
import stationDetails from './stationDetails'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}

  }
  

  
  render() {
    
    return (
      <div>
        <h1> Kochi Metro Fare Calculator</h1>
        <form>
        <select 
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option value="blue">Blue</option>
               
                </select>

        </form>

      </div>
    )
  }
  }

  export default App

