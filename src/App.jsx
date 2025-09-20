import "./App.css";
import Countries from "./Countries.jsx/Countries";

const fetchApi = fetch("https://openapi.programming-hero.com/api/all").then(
  (res) => res.json()
);
function App() {
  return <Countries fetchApi={fetchApi}></Countries>;
}

export default App;
