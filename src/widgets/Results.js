import { CloudFog, Cloudy, Snowflake, Sun, Thermometer, Umbrella } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Results = ({weather}) => {
    const [mode,setMode]=useState()

    useEffect(()=>{
        if(weather.weather[0].main === "Rain" || weather.weather[0].main === "Sunny" || weather.weather[0].main === "Fog" || weather.weather[0].main === "Snow" || weather.weather[0].main === "Clouds"){
            setMode(weather.weather[0].main)
        }else{
            setMode("Something")
        }
    },[weather])

  return ( 
    <div className='flex flex-col p-4 bg-slate-300 rounded-xl text-cyan-800 w-full gap-4'>
        <div className="flex flex-col gap-1 items-center relative">
            <div className="flex text-cyan-700 absolute left-0 top-1">
                {mode === "Rain" && (
                    <Umbrella size={48}/>
                )}
                {mode === "Sunny" && (
                    <Sun size={48}/>
                )}
                {mode === "Fog" && (
                    <CloudFog size={48}/>
                )}
                {mode === "Snow" && (
                    <Snowflake size={48}/>
                )}
                {mode === "Clouds" && (
                    <Cloudy size={48}/>
                )}
                {mode === "Something" && (
                    <Thermometer size={48}/>
                )}
            </div>
            <div className="flex  text-2xl font-bold">{weather.name}</div>
            <div className="flex text-xl">{weather.sys.country}</div>
        </div>
        <div className="flex flex-col items-center gap-2">
            <div className="flex text-3xl font-semibold gap-2 text-slate-600">{weather.main.temp}<span className='text-xl'>&deg;F</span></div>
            <div className="flex text-lg font-semibold">{weather.weather[0].main}</div>
            <div className="flex">Feels like : {weather.main.feels_like}<span className='text-sm'>&deg;F</span></div>
        </div>
        <div className="flex justify-around">
            <div className="flex text-lg font-semibold">Max : {weather.main.temp_max}<span className='text-sm'>&deg;F</span></div>
            <div className="flex text-lg font-semibold">Min : {weather.main.temp_min}<span className='text-sm'>&deg;F</span></div>
        </div>
        <div className="flex flex-col items-center">
            <div className="flex font-medium">Wind speed : {weather.wind.speed} knots</div>
            <div className="flex">{weather.weather[0].description}</div>
        </div>
    </div>
  )
}

export default Results
