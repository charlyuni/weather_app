const API_KEY = "50431aa1f2811252fccbec7b51d8d651";
const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast?";


export const getWeatherData = async (query: string, unit: string) => {

  const url = `${BASE_URL}q=${query}&units=${unit}&appid=${API_KEY}`;
  try {
    return fetch(url).then((res) => res.json());
  } catch (error) {
    throw (error);
  }

};

export const getWeatherDataLocation = async (lat: number, long: number) => {

  const url = `${BASE_URL}lat=${lat}&lon=${long}&units=metric=&appid=${API_KEY}`;
  try {
    return fetch(url).then((res) => res.json());
  } catch (error) {
    throw (error);
  }
};


export const formatBackground = (weather: any) => {

  switch (weather?.list[0].weather[0].main) {
    case "Clouds":
      return "bg-gradient-to-r from-gray-400 to-gray-600";
    case "Clear":
      return "bg-gradient-to-r from-yellow-400 to-yellow-600";
    case "Rain":
      return "bg-gradient-to-r from-blue-400 to-blue-600";
    case "Snow" || "Mist" || "Haze" || "Fog" || "Dust" || "Sand" || "Ash" || "Squall" || "Tornado" || "Thunderstorm" || "Drizzle" || "Smoke":
      return "bg-gradient-to-r from-blue-400 to-blue-600";
    default:
      return "bg-gradient-to-r from-blue-400 to-blue-600";
  }
};
