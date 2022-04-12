import React, { useState,useEffect } from 'react'
import {file} from './file.js'
import './CountryInfo.css'
const axios = require("axios");

export default function CountryInfo(props) {
 // const [countryName,currencies,spokenLanguages,flagUrl,currentTime]=FetchApi(props.countryCode)
const [time,setTime]=useState()
 const[data,setdata] = React.useState(
{})

let offSet=0
useEffect(()=>{

  file(props.countryCode)
  .then(res => {

//    if((JSON.stringify(res[4])).length==13){
 
//     offSet+=parseInt((JSON.stringify(res[4])).substring(6,8))
//     if(parseInt((JSON.stringify(res[4])).substring(9,11))!=0)
//     {
//   offSet+=((parseInt((JSON.stringify(res[4])).substring(9,11)))/60)
//     }
 
//   }
// setInterval(function () {
//   var d = new Date();
//   var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
//   var nd = new Date(utc + (3600000*offSet));
// setTime(nd.toLocaleString())
// }, 1000);
  setdata(res)
  }
  )

},[props.countryCode])




if(data.length>0){
if (data[5]!=undefined){
    props.setNeighboringCountries(data[5])
}
   

    return (<>
  
    <h1 className='headingMain'>Searched Country Info : </h1>
  
      <div className='country_info'>
      <h2>Country Name : {data[0]}</h2>
      
       <h2>Currencies : {data[1]}</h2>
      <h2>Spoken Languages : {data[2].toString()}</h2> 
      <h2>Flag : </h2><img src={data[3]} alt='flag' height={130}></img>
    <h2>Time Zone: {data[4]}</h2>

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



//console.log(data.currentTime)


