import React, { useState } from "react";
import Data from './CountryCode.json'
import "./Search.css";
export default function Searching(props) {
  const setCountryState = props.setCountryState;


 
  return (
    <>
      <h1 className="heading">Country Info</h1>
      <div className="center">
        <h1 className="searchHeading">Search for the Country: </h1>
        <select
          onChange={(event) => {
            setCountryState(
              event.target.value
 
            );
          }}
          className="countryInput"
          id="country"
          name="country"
        >  <option>Select Country</option>
          {
            Data.map(data=>{
             return <option value={data.code}>{data.name}</option>
            })
          }
        
       
        </select>
       
      </div>
    </>
  );
}
