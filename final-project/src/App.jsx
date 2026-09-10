import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [visibleCount, setVisibleCount] = useState(18);

  const closeButtonRef = useRef(null);
  const lastFocusedElementRef = useRef(null);

  const API_URL = "https://api.restcountries.com/countries/v5";
  const API_KEY = import.meta.env.VITE_REST_COUNTRIES_API_KEY;

  const fetchPage = async (offset) => {
    const response = await fetch(
      `${API_URL}?limit=100&offset=${offset}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      let message = "Could not fetch country data.";

      try {
        const errorData = await response.json();

        if (errorData?.errors?.[0]?.message) {
          message = errorData.errors[0].message;
        }
      } catch {
        // Keep fallback message.
      }

      throw new Error(message);
    }

    const result = await response.json();

    return result?.data?.objects || [];
  };

  const fetchCountries = async () => {
    try {
      setStatus("loading");
      setError("");

      if (!API_KEY) {
        throw new Error("REST Countries API key is missing.");
      }

      const [pageOne, pageTwo, pageThree] = await Promise.all([
        fetchPage(0),
        fetchPage(100),
        fetchPage(200),
      ]);

      const allCountries = [
        ...pageOne,
        ...pageTwo,
        ...pageThree,
      ];

      const uniqueCountries = Array.from(
        new Map(
          allCountries.map((country) => [
            country.codes?.alpha_3 || country.names?.common,
            country,
          ])
        ).values()
      );

      const sortedCountries = uniqueCountries.sort((a, b) =>
        (a.names?.common || "").localeCompare(
          b.names?.common || ""
        )
      );

      setCountries(sortedCountries);
      setStatus("success");
    } catch (err) {
      console.error(err);

      setError(
        err.message ||
          "Countries could not be loaded. Please try again."
      );

      setStatus("error");
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const filteredCountries = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    return countries.filter((country) => {
      const countryName = country.names?.common || "";

      const matchesSearch =
        searchText === "" ||
        countryName.toLowerCase().includes(searchText);

      const matchesRegion =
        region === "All" || country.region === region;

      return matchesSearch && matchesRegion;
    });
  }, [countries, search, region]);

  useEffect(() => {
    setVisibleCount(18);
  }, [search, region]);

  useEffect(() => {
    if (!selectedCountry) {
      document.body.style.overflow = "";

      if (lastFocusedElementRef.current) {
        lastFocusedElementRef.current.focus();
      }

      return;
    }

    document.body.style.overflow = "hidden";

    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedCountry(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCountry]);

  const getFlagUrl = (country) => {
    if (country?.flag?.url_png) {
      return country.flag.url_png;
    }

    if (country?.codes?.alpha_2) {
      return `https://flagcdn.com/w640/${country.codes.alpha_2.toLowerCase()}.png`;
    }

    return "";
  };

  const getCapital = (country) => {
    if (!country?.capitals || country.capitals.length === 0) {
      return "Not available";
    }

    return country.capitals
      .map((capital) => capital.name)
      .filter(Boolean)
      .join(", ");
  };

  const getLanguages = (country) => {
    if (!country?.languages || country.languages.length === 0) {
      return "Not available";
    }

    return country.languages
      .slice(0, 4)
      .map((language) => language.name)
      .filter(Boolean)
      .join(", ");
  };

  const getCurrencies = (country) => {
    if (!country?.currencies || country.currencies.length === 0) {
      return "Not available";
    }

    return country.currencies
      .slice(0, 3)
      .map((currency) =>
        currency.symbol
          ? `${currency.name} (${currency.symbol})`
          : currency.name
      )
      .filter(Boolean)
      .join(", ");
  };

  const getArea = (country) => {
    const area = country?.area?.kilometers;

    if (area === null || area === undefined) {
      return "Not available";
    }

    return `${Number(area).toLocaleString()} km²`;
  };

  const getPopulation = (country) => {
    const population = country?.population;

    if (population === null || population === undefined) {
      return "Not available";
    }

    if (typeof population === "number") {
      return population.toLocaleString();
    }

    if (typeof population === "object") {
      const possibleValue =
        population.value ??
        population.total ??
        population.population;

      if (
        possibleValue !== null &&
        possibleValue !== undefined
      ) {
        return Number(possibleValue).toLocaleString();
      }
    }

    return "Not available";
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(searchInput.trim());
  };

  const selectCountry = (country, event) => {
    lastFocusedElementRef.current = event.currentTarget;
    setSelectedCountry(country);
  };

  const closeModal = () => {
    setSelectedCountry(null);
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const clearFilters = () => {
    setSearchInput("");
    setSearch("");
    setRegion("All");
  };

  return (
    <div className="app">
      <header className="site-header">
        <div className="container header-inner">
          <a href="/" className="brand">
            Atlas Country Explorer
          </a>

          <nav aria-label="Main navigation">
            <a href="#countries">Countries</a>
            <a href="#about">About</a>
          </nav>
        </div>
      </header>

      <main className="container page-content">
        <div className="page-banner">
          Explore real country information using the REST Countries API.
        </div>

        <div className="content-layout">
          <div className="content-main">
            <section className="catalog-section" id="countries">
              <div className="catalog-heading">
                <div>
                  <p className="eyebrow">Browse</p>

                  <h1>All countries</h1>

                  {status === "success" && (
                    <span>
                      {filteredCountries.length} countries found
                    </span>
                  )}
                </div>

                <form
                  className="search-box"
                  onSubmit={handleSearch}
                >
                  <label
                    htmlFor="country-search"
                    className="sr-only"
                  >
                    Search country
                  </label>

                  <input
                    id="country-search"
                    type="search"
                    placeholder="Search country..."
                    value={searchInput}
                    onChange={(event) =>
                      setSearchInput(event.target.value)
                    }
                  />

                  <button type="submit">
                    Search
                  </button>
                </form>
              </div>

              <div className="region-buttons">
                {[
                  "All",
                  "Asia",
                  "Europe",
                  "Africa",
                  "Americas",
                  "Oceania",
                  "Antarctic",
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={
                      region === item
                        ? "region-button active"
                        : "region-button"
                    }
                    onClick={() => setRegion(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {status === "loading" && (
                <div className="state-panel">
                  <h2>Loading countries</h2>

                  <p>
                    Please wait while country data is being loaded.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="state-panel state-panel--error">
                  <h2>Could not load countries</h2>

                  <p>{error}</p>

                  <button
                    type="button"
                    onClick={fetchCountries}
                  >
                    Try again
                  </button>
                </div>
              )}

              {status === "success" &&
                filteredCountries.length === 0 && (
                  <div className="state-panel">
                    <h2>No countries found</h2>

                    <p>
                      Try another country name or choose another region.
                    </p>

                    <button
                      type="button"
                      onClick={clearFilters}
                    >
                      Clear filters
                    </button>
                  </div>
                )}

              {status === "success" &&
                filteredCountries.length > 0 && (
                  <>
                    <div className="country-grid">
                      {filteredCountries
                        .slice(0, visibleCount)
                        .map((country) => (
                          <article
                            className="country-card"
                            key={
                              country.codes?.alpha_3 ||
                              country.names?.common
                            }
                          >
                            <div className="country-card__flag">
                              {getFlagUrl(country) ? (
                                <img
                                  src={getFlagUrl(country)}
                                  alt={`Flag of ${
                                    country.names?.common ||
                                    "country"
                                  }`}
                                  loading="lazy"
                                />
                              ) : (
                                <span>
                                  Flag unavailable
                                </span>
                              )}
                            </div>

                            <div className="country-card__content">
                              <h2>
                                {country.names?.common ||
                                  "Unknown country"}
                              </h2>

                              <p>
                                {getCapital(country)}
                              </p>

                              <span>
                                Region: {country.region}
                              </span>

                              <button
                                type="button"
                                onClick={(event) =>
                                  selectCountry(country, event)
                                }
                              >
                                View country
                              </button>
                            </div>
                          </article>
                        ))}
                    </div>

                    {visibleCount <
                      filteredCountries.length && (
                      <div className="show-more">
                        <button
                          type="button"
                          onClick={() =>
                            setVisibleCount(
                              (current) => current + 18
                            )
                          }
                        >
                          Show more countries
                        </button>
                      </div>
                    )}
                  </>
                )}
            </section>
          </div>

          <aside className="sidebar" id="about">
            <section>
              <h2>Regions</h2>

              <div className="sidebar-buttons">
                {[
                  "Asia",
                  "Europe",
                  "Africa",
                  "Americas",
                  "Oceania",
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setRegion(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h2>About this project</h2>

              <p>
                A simple country explorer built using React
                and the REST Countries API.
              </p>
            </section>

            <section>
              <h2>Features</h2>

              <p>
                Search countries, filter by region and view
                country details in a popup.
              </p>
            </section>

            <section>
              <h2>Data source</h2>

              <p>
                Country information is loaded from REST Countries v5.
              </p>
            </section>

            <section className="built-by-card">
              <h2>Built by</h2>

              <h3>Dinesh Singh Dhami</h3>

              <div className="sidebar-links">
                <a
                  href="https://github.com/dineshsinghdhami"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/dineshsinghdhami2/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>

                <a
                  href="https://dineshsinghdhami.com.np/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfolio
                </a>
              </div>
            </section>
          </aside>
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>
            © 2026 Dinesh Singh Dhami
          </span>

          <span>
            Atlas Country Explorer
          </span>
        </div>
      </footer>

      {selectedCountry && (
        <div
          className="country-modal-backdrop"
          onMouseDown={handleBackdropClick}
        >
          <section
            className="country-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="country-modal-title"
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="country-modal__close"
              onClick={closeModal}
              aria-label="Close country details"
            >
              ×
            </button>

            <div className="country-modal__layout">
              <div className="country-modal__flag">
                {getFlagUrl(selectedCountry) ? (
                  <img
                    src={getFlagUrl(selectedCountry)}
                    alt={`Flag of ${
                      selectedCountry.names?.common
                    }`}
                  />
                ) : (
                  <p>Flag unavailable</p>
                )}
              </div>

              <div className="country-modal__content">
                <p className="eyebrow">
                  Selected country
                </p>

                <h2 id="country-modal-title">
                  {selectedCountry.names?.common}
                </h2>

                <p className="country-modal__intro">
                  Current information about this country.
                </p>

                <div className="country-modal__details">
                  <div>
                    <span>Capital</span>
                    <strong>
                      {getCapital(selectedCountry)}
                    </strong>
                  </div>

                  <div>
                    <span>Region</span>
                    <strong>
                      {selectedCountry.region ||
                        "Not available"}
                    </strong>
                  </div>

                  <div>
                    <span>Subregion</span>
                    <strong>
                      {selectedCountry.subregion ||
                        "Not available"}
                    </strong>
                  </div>

                  <div>
                    <span>Population</span>
                    <strong>
                      {getPopulation(selectedCountry)}
                    </strong>
                  </div>

                  <div>
                    <span>Area</span>
                    <strong>
                      {getArea(selectedCountry)}
                    </strong>
                  </div>

                  <div>
                    <span>Languages</span>
                    <strong>
                      {getLanguages(selectedCountry)}
                    </strong>
                  </div>

                  <div>
                    <span>Currency</span>
                    <strong>
                      {getCurrencies(selectedCountry)}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;