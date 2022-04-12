import React, { useState, useEffect } from "react";
import "./NeighboringCountries.css";
import NeighboringCountry from "./NeighboringCountry";
export default function NeighboringCountries(props) {
  if(props.neighboringCountries.length==0)
  {
    return  <h1 className="headingMain">No Neighboring Countries</h1>
  }else{
  return (
    <>
      <h1 className="headingMain">Neighboring Country Info : </h1>
      <div className="grid-container">
     
        {props.neighboringCountries.map((countryCode) => {
         return <>

            <div className="grid-item">
            <NeighboringCountry countryCode={countryCode}/>
              </div>
          </>;
        })}
  
      </div>
    </>
  );}
}
