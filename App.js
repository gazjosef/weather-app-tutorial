// Import React from package.json
import React from "react";

// Import pages from compnent folder
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

// Weather API Key
const API_KEY = "4a64ed09d073cdac231c53e1a3b62181";

// Creating an instance of App 
// That instance is extending React.Component
// React.Component lives in nodes_modules
class App extends React.Component {
  // State...
  // Object that lives within a component
  // Keeps track of changing data from user interaction
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    // Prevent page refresh by preventing default
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;    
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
    // Set State

    // this.setState({
      //temperature: data.main.temp,
      //city: data.name,
      //country: data.sys.country,
      //humidity: data.main.humidity
      //description: data.weather[0].description,
      //error: ""
    //});
  } 

// Props 'getWeather'
// Props 'temperature', 'city', 'country' etc

  render() {
    return (
      <div>
        <Titles />
        
        <Form getWeather={this.getWeather}/>
        
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}        
        />
      </div>
    );
  }
};

// Make component available for export
export default App;