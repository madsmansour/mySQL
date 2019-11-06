createDB = () => {
  console.log('trykket på knap')
  var req = new XMLHttpRequest();
    req.open('GET', '/database/createdatabase');
    req.send();
}

showdata = () => {
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