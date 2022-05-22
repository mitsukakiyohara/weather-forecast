/* 
Weather Forecast using React 
Author: Mitsuka Kiyohara
*/ 
import './App.css';
import React from "react";
import CitySelector from './city';
import UseFetch from './hooks/fetch';
import {API_KEY, API_BASE_URL} from './apis/config';
import Forecast from './components/forecast';

function App() {
  // destructure the returned values
  const {data, setUrl} = UseFetch();
  console.log(data);

  return (
    <div className="App">
      <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&units=imperial&appid=${API_KEY}`)}/>
      {/* conditionally render  */}
      {data && <Forecast weathers={data.list.filter(forecast => forecast.dt_txt.match(/18:00:00/))} />}
    </div>
  );
}

export default App;
