import { useEffect, useState } from "react";
import Search from "../search";


export default function Weather(){
   const [search, setSearch] = useState('');
   const [loading, setLoading] = useState(false);
   const [weatherData, setWeatherData] = useState(null);
   
    async function  fetchWeatherData(param){
       setLoading(true);
        try {
           const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=3dbb1af7d4fbb95f89c4c70275b49b8e`)
           const data = await response.json();
           if (data.cod === '404') {
              alert('City not found');
               throw new Error('City not found');
           }
           setWeatherData(data);
           console.log(data);
         } catch (e) {
           console.log(e);
         }
        finally {
            setLoading(false);
        }
    }
   console.log(loading);
   function handleSearch( ){
     fetchWeatherData(search);
   }
    
   useEffect(() => {
      fetchWeatherData('delhi');
   },[])
  
   function getCurrentDate(){
      return new Date().toLocaleDateString('en-us',
         {
            day: 'numeric',
            weekday: 'long',
            year: 'numeric',
            month: 'long',
         }
      )
   }



    return(<>

    <Search search={search} setSearch={setSearch} handleSearch={handleSearch}/>
         {
            loading ? <div className="loading">Loading...</div>
            : <div>
               <div className="city_name">
                  <h2>{weatherData?.name}, <span>{weatherData?.sys?.country}</span></h2>
               </div>
               <div className="date">
                  <span>{getCurrentDate()}</span>
               </div>
               <div className="temp">
                  {weatherData?.main?.temp}
               </div>
                  <p className="description">
                     {weatherData && weatherData?.weather[0] ?  weatherData?.weather[0]?.description : 'No description available'}
                  </p>
         
                  <div className="weather_info">
                       <div className="column">
                         <div>
                           <p className="wind">{weatherData?.wind?.speed}</p>
                         <p>wind speed</p>
                         </div>
                       </div>
   import React from 'react'
   
   export const Component = (props) => {
      return(
         <div>
            {props.children}
         </div>
      )
   }
   
   export default Component
                       <div className="column">
                         <div>
                           <p className="humidity">{weatherData?.main?.humidity}%</p>
                           <p>Humidity</p>
                         </div>
                       </div>
                  </div>
            </div>
         }
         {/* <div>Weather</div> */}
    </>)
} 