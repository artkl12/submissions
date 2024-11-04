import SelectedCountry from "./SelectedCountry";

const Filter = ({ query, filteredCountries, handleShow }) => {
  return (
    <>
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
        <SelectedCountry selectedCountry={filteredCountries[0]} />
      )}
    </>
  );
};

export default Filter;
