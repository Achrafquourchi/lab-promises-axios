import './App.css'
import axios from 'axios'

function App() {
  axios
    .get("https://swapi.dev/api/people/4")
    .then((result) => {
      // console.log(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
  axios
    .get("https://restcountries.com/v3.1/name/france")
    .then((result) => {
      return result.data[0];
    })
    .then((franceData) => {
      // console.log(franceData.name.common);
    })
    .catch((err) => {
      console.log(err);
    });

  // iteration 3
  axios
    .get("https://restcountries.com/v3.1/all")
    .then((allCountries) => {
      const TheFirst10Countries = allCountries.data.slice(0, 10);
      // console.log(TheFirst10Countries);
    })
    .catch((err) => {
      console.log(err);
    });

  // iteration 4
  // 1
  async function VaderData() {
    try {
      const vaderData = await axios.get("https://swapi.dev/api/people/4");
      console.log(vaderData.data);
    } catch (err) {
      console.log(err);
    }
  }
  VaderData();

  // 2
  async function FranceData() {
    try {
      const countryData = await axios.get(
        "https://restcountries.com/v3.1/name/france"
      );
      console.log(countryData.data[0].name.common);
    } catch (err) {
      console.log(err);
    }
  }
  FranceDataData();

  // 3
  async function first10() {
    try {
      const allCountires = await axios.get(
        "https://restcountries.com/v3.1/all"
      );
      const TheFirst10 = allCountires.data.slice(0, 10);
      console.log(TheFirst10);
    } catch (err) {
      console.log(err);
    }
  }
  first10();

  return <div className="App"></div>;
}

export default App;