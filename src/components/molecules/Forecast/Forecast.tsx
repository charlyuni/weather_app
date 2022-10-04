import { DateTime } from "luxon";
import { FC } from "react";
import ForecastCard from "../../atoms/ForecastCard/ForecastCard"
import { List } from "../../types/module"

export interface IForecastProps {
  title: string;
  data: List[];
}

const Forecast: FC<IForecastProps> = ({ title, data }: IForecastProps) => {

  const date = DateTime.fromSeconds(data[0].dt + 86400).toFormat("yyyy-MM-dd") + " 06:00:00"
  const indexList = data.findIndex((item) => item.dt_txt === date);
  const arrayForecastDay: Array<number> = [indexList, indexList + 8, indexList + 16, indexList + 24, indexList + 32];

  return (
    <div className="pl-8 pr-8 mb-1 mt-2">
      <div className="flex items-center justify-around">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        {arrayForecastDay.map((item, index) => (
          <ForecastCard key={index} hours={DateTime.fromSeconds(data[item].dt).toFormat("dd-MM")} icon={data[item].weather[0].icon} temp={Math.round(data[item].main.temp)} />
        ))}
      </div>
    </div>
  )
}
export default Forecast