import React, { Component } from 'react' 
import './Weather.css';



class Weather extends Component {

      render() {


     return (
         <div className="weather">
            <h3>City: {this.props.weather.name}</h3>
            <h3>Current Temp: {this.props.weather.main.temp}</h3>
            <h3>Max Temp: {this.props.weather.main.temp_max}</h3>
            <h3>Min Temp: {this.props.weather.main.temp_min}</h3>
            <h3>Humidity: {this.props.weather.main.humidity}</h3>
            <h3>Pressure: {this.props.weather.main.pressure}</h3>
         </div>
     )
 }


}

export default Weather 