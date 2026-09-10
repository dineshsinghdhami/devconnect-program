import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setStatus("loading");

        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca3"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }

        const data = await response.json();

        const sortedCountries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setCountries(sortedCountries);
        setStatus("success");
      } catch {
        setError(
          "Countries could not be loaded. Please check your connection and try again."
        );
        setStatus("error");
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesRegion =
      region === "All" || country.region === region;

    return matchesSearch && matchesRegion;
  });

  return (
    <main>
      <h1>Global Country Explorer</h1>

      <p>
        Explore countries using real data from the REST Countries API.
      </p>

      <section>
        <input
          type="search"
          placeholder="Search country..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={region}
          onChange={(event) => setRegion(event.target.value)}
        >
          <option value="All">All regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </section>

      {status === "loading" && (
        <p>Loading countries...</p>
      )}

      {status === "error" && (
        <div>
          <h2>Could not load countries</h2>
          <p>{error}</p>
        </div>
      )}

      {status === "success" && filteredCountries.length === 0 && (
        <div>
          <h2>No countries found</h2>
          <p>Try another country name or region.</p>
        </div>
      )}

      {status === "success" && filteredCountries.length > 0 && (
        <section>
          {filteredCountries.map((country) => (
            <article key={country.cca3}>
              <img
                src={country.flags.svg}
                alt={`Flag of ${country.name.common}`}
                width="120"
              />

              <h2>{country.name.common}</h2>

              <p>
                Capital:{" "}
                {country.capital?.[0] || "Not available"}
              </p>

              <p>Region: {country.region}</p>

              <p>
                Population:{" "}
                {country.population.toLocaleString()}
              </p>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

export default App;