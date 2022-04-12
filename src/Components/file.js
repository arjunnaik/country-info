import axios from "axios";



export function file(id) {
  return axios.get('https://restcountries.com/v3.1/alpha/' + id)
      .then(response => {
        
        return [response.data[0].name.common,
        Object.keys(response.data[0].currencies),
     Object.values(response.data[0].languages),
       response.data[0].flags.png,
     response.data[0].timezones,
    response.data[0].borders]
     
      })
  }



