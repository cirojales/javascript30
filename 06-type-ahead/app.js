const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const searchBar = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");


const cities = [];

async function fetchData() {
  let response = await fetch(endpoint);
  let data = await response.json();
  cities.push(...data);
};

fetchData();

function findMatches(word, cities) {
  let regex = new RegExp(word, "gi");
  return cities.filter(
    place => regex.test(place.city) || regex.test(place.state)  
    );
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches(e) {
  console.log(this.value);
  const matches = findMatches(this.value, cities);
  if (this.value.length < 1) return;
  suggestions.innerHTML = matches.map(place => {
    const regex =  new RegExp(this.value, "gi")
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="name">${numberWithCommas(place.population)}</span>
      </li>
    `
  }).join("");
}

searchBar.addEventListener("keyup", displayMatches);
searchBar.addEventListener("mousedown", displayMatches);