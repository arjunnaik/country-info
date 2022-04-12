import logo from './logo.svg';
import './App.css';
import Searching from './Components/Searching';
import React,{ useState } from "react";
import CountryInfo from './Components/CountryInfo';
import NeighboringCountries from './Components/NeighboringCountries';
//document.body.style.backgroundColor = "red";

function App() {
  const [countryState,setCountryState] = useState("");
const [neighboringCountries,setNeighboringCountries] = useState([])
  return (
<>

<Searching setCountryState={setCountryState}/>
{countryState==="" ? <></> : <>

<CountryInfo countryCode={countryState} setNeighboringCountries={setNeighboringCountries}/>
<NeighboringCountries neighboringCountries={neighboringCountries}/>


</>}

</>
  );
}

export default App;
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