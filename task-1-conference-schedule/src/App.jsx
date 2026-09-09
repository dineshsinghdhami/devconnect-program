import Header from "./components/Header";
import Schedule from "./components/Schedule";
import "./App.css";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Header />
      <Schedule />
    </>
  );
}

export default App;