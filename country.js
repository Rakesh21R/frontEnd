var parameters = new URLSearchParams(window.location.search);

var name = parameters.get('country');

var url = `https://restcountries.eu/rest/v2/name/${name}?fullText=true`

fetch(url).then(resp => resp.json()).then(data => {
  console.log(data[0]);
  document.getElementById("name").innerHTML = data[0].name;
  document.getElementById("nativeName").innerHTML = 'Native Name:'.concat(data[0].nativeName);
  document.getElementById("region").innerHTML = 'Region       :'.concat(data[0].subregion);
  document.getElementById("capital").innerHTML = 'Capital      :'.concat(data[0].capital);
  document.getElementById("code").innerHTML = 'Code      :'.concat(data[0].alpha3Code);
  document.getElementById("currency").innerHTML = 'Currency     :'.concat(data[0].currencies[0].name);
  document.getElementById("code").innerHTML = 'Country Code      :'.concat(data[0].alpha3Code);
  document.getElementById("flag").setAttribute("src", data[0].flag);
});