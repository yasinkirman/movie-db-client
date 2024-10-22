import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5124/weatherforecast') // ASP.NET Core API'nin URL'si
      .then(response => response.json())
      .then(data => setWeather(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <h1>Weather Forecast</h1>
      <ul>
        {weather.map((w, index) => (
          // <li key={index}>{w}</li>
          <li></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
