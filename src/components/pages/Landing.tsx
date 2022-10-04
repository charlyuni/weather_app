import React, { useEffect, useState } from "react"
import { formatBackground, getWeatherData, getWeatherDataLocation } from "../../store/ApiOpenWeather"
import Location from "../atoms/Location/Location"
import Forecast from "../molecules/Forecast/Forecast"
import GeneralData from "../molecules/GeneralData/GeneralData"
import SummaryTemp from "../molecules/SummaryTemp/SummaryTemp"
import { cities } from '../molecules/TopButton/mockData'
import { RootObject } from "../types/module"
import NavBar from "../molecules/NavBar/NavBar"

const Landing = () => {
  const [query, setQuery] = useState('buenos aires');
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState<RootObject>();
  const [formatBg, setFormatBg] = useState("bg-gradient-to-r from-blue-400 to-blue-600")

  useEffect(() => {
    getWeatherData(query, units).then((data) => {
      setWeather(data)
      setFormatBg(formatBackground(data))
    })
  }, [query, units]);

  const handleClickTopButton = (event: React.MouseEvent<HTMLElement>) => {
    setQuery(event.currentTarget.title);
  };

  const handleChangeMetric = (event: React.MouseEvent<HTMLElement>) => {
    setUnits(event.currentTarget.title);
  };

  const handleLocation = (lat: number, lon: number) => {
    getWeatherDataLocation(lat, lon).then((data) => {
      setQuery(data.city.name);
    })
  };

  return (
    <div className={`max-full pb-4`}>
      <NavBar onclick={handleChangeMetric} onClickInput={setQuery} onClickLocatio={handleLocation} cities={cities} onClickTopBotton={handleClickTopButton} />

      {weather ? (
        <div className={`mx-auto max-w-screen-md py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBg}`}>
          <Location country={weather.city.name} city={weather.city.country} />
          <SummaryTemp data={weather} />
          <GeneralData data={weather} />
          <Forecast title={"Pronostico proximas Dias"} data={weather} />
        </div>
      ) : null}
      
    </div>
  )
}
export default Landing