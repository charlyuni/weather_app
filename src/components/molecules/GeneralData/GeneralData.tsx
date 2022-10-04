import { WeatherData } from "../../types/module"
import GeneralDataCard from "../../atoms/GeneralDataCard/GeneralDataCard"
import { DateTime } from "luxon"

const GeneralData = ({data}: WeatherData) => {

  const amanece = DateTime.fromSeconds(data.city.sunrise).toFormat('hh:mm');
  const anochece = DateTime.fromSeconds(data.city.sunset).toFormat('hh:mm');
  const temp_min = String(data.list[0].main.temp_min)
  const temp_max = String(data.list[0].main.temp_max)

  return (
    <div className="flex flex-row justify-center items-center space-x-2 text-white py-3 text-sm">
      <GeneralDataCard size={13} icons={"WiDaySunny"} title={'Amanece'} value={amanece} unit={'AM'} />
      <GeneralDataCard size={13} icons={"WiMoonAltNew"} title={'Anochece'} value={anochece} unit={'PM'} />
      <GeneralDataCard size={10} icons={"WiThermometerExterior"} title={'Min'} value={temp_min} unit={'°'} />
      <GeneralDataCard size={10} icons={"WiThermometer"} title={'Max'} value={'43'} unit={temp_max} />
    </div>
  )
}
export default GeneralData