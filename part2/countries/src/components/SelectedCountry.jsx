import axios from "axios";
import { useEffect, useState } from "react";

const SelectedCountry = ({ selectedCountry }) => {
  if (!selectedCountry) return null;

  const [weather, setWeather] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          selectedCountry.capital
        }&appid=${import.meta.env.VITE_APP_KEY}&units=metric`
      )
      .then((response) => {
        console.log(response.data);
        setWeather({
          name: response.data.name,
          temperature: response.data.main.temp,
          icon: response.data.weather[0].icon,
          description: response.data.weather[0].description,
          wind: response.data.wind.speed,
        });
      });
  }, [selectedCountry.capital]);

  return (
    <>
      <h2>{selectedCountry.name.common}</h2>
      <p>Capital: {selectedCountry.capital}</p>
      <p>Area: {selectedCountry.area} km²</p>
      <p>Languages:</p>
      <ul>
        {Object.values(selectedCountry.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img
        src={selectedCountry.flags.png}
        alt={`Flag of ${selectedCountry.name.common}`}
      />
      <h2>Weather in {weather.name}</h2>

      <p>temperature {weather.temperature}°C</p>
      <img
        id="icon"
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt="weather_icon"
      />
      <p>{weather.description}</p>
      <p>wind {weather.wind} m/s</p>
    </>
  );
};

export default SelectedCountry;
