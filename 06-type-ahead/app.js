const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

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