const SelectedCountry = ({ selectedCountry }) => {
  if (!selectedCountry) return null;

  return (
    <div>
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
    </div>
  );
};

export default SelectedCountry;
