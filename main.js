function fan(b) {
  if (b.length == 0) {
    document.getElementById("searchResults").innerHTML = "";
    document.getElementById("searchResults").style.border = "0px";
    return;
  } else {
    // fetch(c).then(resp => resp.json()).then(data => {
    //   console.log(data);

    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
    } else {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("searchResults").innerHTML = "";
        for (var i = 0; i < JSON.parse(this.responseText).length; i++) {
          var node = document.createElement("H1");
          node.setAttribute("class", "small-title");
          var textnode = document.createTextNode(JSON.parse(this.responseText)[i].name);
          node.appendChild(textnode);
          document.getElementById("searchResults").appendChild(node);

          var x = document.createElement("IMG");
          x.setAttribute("class", "small-flag");
          x.setAttribute("src", JSON.parse(this.responseText)[i].flag);
          document.getElementById("searchResults").appendChild(x);

          var link = document.createElement("A");
          link.setAttribute("href", `country.html?country=${JSON.parse(this.responseText)[i].name}`);
          link.setAttribute("class", "small-link");
          var textname = document.createTextNode('More Info -->');
          link.appendChild(textname);
          document.getElementById("searchResults").appendChild(link);
        }
      }
    }
    xmlhttp.open("GET", 'https://restcountries.eu/rest/v2/name/' + b, true);
    xmlhttp.send();
  }
}