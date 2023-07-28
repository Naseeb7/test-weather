import { useState } from "react"
import Results from "../widgets/Results"
import  Lottie  from "lottie-react"
import loadinganimation from "../assets/loadinganimation.json"


const baseUrl = process.env.REACT_APP_BASE_URL
const apiKey = process.env.REACT_APP_API_KEY

const Weather = () => {
    const [cities, setCities] = useState([])
    const [weather, setWeather] = useState()
    const [city, setCity] = useState("")
    const [loading, setLoading]=useState(false)
    const [error, setError]=useState(false)

    const changeCity = (place) => {
        if (place !== "") {
            getCities(place)
            setCity(place)
        }else{
            setCity("")
            setCities([])
        }
    }

    const getCities = async (city) => {
        try {
            setLoading(true)
        const url = `${baseUrl}/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setCities(data)
        setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
        }
    }

    const cityClicked=(lat,long)=>{
        getWeather(lat,long);
        setCity("")
        setCities([])
    }

    const getWeather = async (latitude, longitude) => {
        const url = `${baseUrl}/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setWeather(data)
    }

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col p-2 w-2/4 m-2 justify-center items-center">
                <input type="text" onChange={(e) => changeCity(e.target.value) } placeholder="Search for a place..." value={city} className="flex w-full p-2 rounded-xl focus:outline-none" />
                <div className="flex relative w-full z-10 justify-center">
                {error ? (
                    <div className="flex text-slate-600 font-semibold p-2">Something went wrong! please try again.</div>
                ) : (
                    loading ? (
                        <div className="flex flex-col items-center p-2 w-full bg-slate-200 rounded-lg absolute">
                            <Lottie 
                        animationData={loadinganimation}
                        className="w-1/12"
                        />
                        </div>
                        
                    ) : (
                        <div className="flex flex-col p-2 w-full bg-slate-200 rounded-lg absolute">
                        {cities && (
                            cities.map((city) => {
                                return <div onClick={() => cityClicked(city.lat, city.lon)} className="flex justify-center p-2 hover:bg-slate-300 rounded-xl hover:cursor-pointer animate-slidedown">
                                    <div className="flex text-lg ">{city.name},{city.state},{city.country}</div>
                                </div>
                            })
                        )}
                    </div>
                    )
                )}
                </div>
            </div>
            {weather && (
                <div className="flex w-2/4 animate-growOut">
                    <Results weather={weather} />
                </div>
            )}
        </div>
    )
}

export default Weather
