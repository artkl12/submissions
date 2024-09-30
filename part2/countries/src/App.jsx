import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import SelectedCountry from "./components/SelectedCountry";

const App = () => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => setCountries(response.data));
  }, []);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setSelectedCountry(null);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );

  const handleShow = (country) => {
    setSelectedCountry(country);
    console.log("clicked", country);
  };

  return (
    <>
      find country:{" "}
      <input
        type="text"
        value={query}
        onChange={handleSearch}
      />
      <Filter
        query={query}
        filteredCountries={filteredCountries}
        handleShow={handleShow}
      />
      <SelectedCountry selectedCountry={selectedCountry} />
    </>
  );
};

export default App;
