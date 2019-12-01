

// En funktion som bliver kaldt i viewet ved at trykke på en knap, den henter funktionen fra routes/database.js og den route hvor createdatabase er defineret
createDB = () => {
  console.log('trykket på knap')
  var req = new XMLHttpRequest();
    req.open('GET', '/database/createdatabase');
    req.send();
}


// En funktion som bliver kaldt i viewet ved at trykke på en knap, den henter funktionen fra routes/database.js og den route hvor showdata er defineret
showdata = () => {
  console.log("Trykket på showdataknap")
  var req = new XMLHttpRequest();
  req.open('GET', '/database/showdata');
  req.onload = () =>{
    var showdata = document.getElementById('showdata');
    showdata.innerHTML = "";
    console.log('responsetext: ' + req.responseText);
    showdata.insertAdjacentHTML('beforeend', req.responseText);
   
}
req.send();
};