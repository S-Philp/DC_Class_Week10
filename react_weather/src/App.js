import { Component } from 'react';
import Weather from './Weather';
import './App.css';



class App extends Component {


  constructor() {
    super()
    console.log('constructor')

    this.state = {
      weather: null
    }

  }

  fetchWeather = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7e2ff998366b5078f2aeeb7a32172008&units=imperial')
      .then(response => response.json())
      // .then(result => console.log(result))
        .then((result) => {
          this.setState({
            weather: result
          })
        })
  }

  componentDidMount() {
    this.fetchWeather()
  }

  render() {


    return (
      <div className="body">
        <h1 className="heading">Weather</h1>
          {this.state.weather != null ? <Weather weather = {this.state.weather} /> : null }
      </div>
    )
  }
}

export default App;
