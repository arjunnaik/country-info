import React, { useState,useEffect } from 'react'
import {file} from './file.js'
import './CountryInfo.css'
const axios = require("axios");
export default function NeighboringCountry(props) {

const[data,setdata] = React.useState(
{})

useEffect(()=>{

 file(props.countryCode)
 .then(res => {

 setdata(res)
 }
 )

},[props.countryCode])




if(data.length>0){




   return (<>

     <div>
     <h4>Country Name : {data[0]}</h4>
     
      <h4>Currencies : {data[1]}</h4>
     <h4>Spoken Languages : {data[2].toString()}</h4> 
     <h4>Flag : </h4>
     <img src={data[3]} alt='flag' height={99}></img>

     </div>
     </>
   )
 }else
 {
   return(
     <h2 style={{marginLeft:"30px"}}>Loading...</h2>
   )
 }

}
