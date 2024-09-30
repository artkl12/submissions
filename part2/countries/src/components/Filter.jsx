const Filter = ({ query, filteredCountries, handleShow }) => {
  return (
    <div>
      {query && filteredCountries.length > 10 && (
        <p>Too many matches, please refine your search.</p>
      )}
      {query && filteredCountries.length === 0 && <p>No matches</p>}
      {query &&
        filteredCountries.length <= 10 &&
        filteredCountries.length > 1 && (
          <ul>
            {filteredCountries.map((country) => (
              <li key={country.name.common}>
                {country.name.common}
                <button className="btn" onClick={() => handleShow(country)}>
                  Show more
                </button>
              </li>
            ))}
          </ul>
        )}
      {query && filteredCountries.length === 1 && (
        <div>
          <h2>{filteredCountries[0].name.common}</h2>
          <p>Capital: {filteredCountries[0].capital}</p>
          <p>Area: {filteredCountries[0].area} km²</p>
          <p>Languages:</p>
          <ul>
            {Object.values(filteredCountries[0].languages).map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
          <img
            src={filteredCountries[0].flags.png}
            alt={`Flag of ${filteredCountries[0].name.common}`}
          />
        </div>
      )}
    </div>
  );
};

export default Filter;
