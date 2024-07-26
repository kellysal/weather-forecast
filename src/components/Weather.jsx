import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import moment from "moment";

export default function Weather() {
    const [data, setData] = useState({})
    const [weatherData, setWeatherData] = useState([])

    const API_KEY = '37a0ff4eed513516d6c5587a56af0e72'
    let params = useParams()
    // console.log(params);
    let zip = params.weatherId

    useEffect(() => {
        const fetchParamWeather = async () => {
            const url = `https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&appid=${API_KEY}&units=imperial`
            const res = await fetch(url)
            const paramData = await res.json()
            setData(paramData)
            setWeatherData(paramData.list)
            // console.log(paramData)
            // console.log(paramData.list)
        }
        fetchParamWeather()
    }, []);

    if (!data) return null;


    return (
        <>
            <div className="text-center">
                <h1 className="text-xl font-bold leading-6 uppercase">{data.city ? (data.city.name) : null}</h1>
                <h2 className="text-sm uppercase">5 day / 3 hour forecast</h2>
            </div>
            <div className="flex items-center">
                <div className="flex-1 max-w-4x1 mx-auto p-10">
                    <ul role="list" className="grid sm:grid-cols-3 md:grid-cols-6 grid-rows-4 gap-8 grid-flow-row">
                        {weatherData.map((weatherData, index) =>
                            <li key={index} className="rounded-lg shadow-lg p-3">
                                <div className="justify-center min-w-0 flex-auto text-center items-center">
                                    <p className="text-xs font-bold leading-6">{moment(weatherData.dt_txt).format('MM/D/YY hA')}</p>
                                    <img alt="weather-icon" src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} className="h-12 w-12 mx-auto" />
                                    <h1 className="text-xl font-bold leading-6">{weatherData.main.temp.toFixed()} °F</h1>
                                    <p className="text-xs leading-6 text-gray-500">{weatherData.main.temp_min.toFixed()} °F | {weatherData.main.temp_max.toFixed()} °F</p>
                                    <p className="text-xs font-bold leading-6 uppercase">{weatherData.weather[0].description}</p>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>

            </div>
        </>
    )
}