 values = [
     {
    id :"Bæstet", adress :"Beastroad 71"},
    {id :"Peter", adress :"Lowstreet 4"},
    {id :"Amy", adress :"Apple st 652"},
    {id :"Hannah", adress :"Mountain 21"},
    {id :"Michael", adress :"Valley 345"},
    {id :"Sandy", adress :"Ocean blvd 2"},
    {id :"Betty", adress :"Green Grass 10"},
    {id :"Richard", adress :"Sky st 331"},
    {id :"Susan", adress :"One way 98"},
    {id :"Vicky", adress :"Yellow Garden 2"},
    {id :"Ben", adress :"Park Lane 38"},
    {id :"William", adress :"Central st 954"},
    {id :"Chuck", adress :"Main Road 989"},
    {id :"Viola", adress :"Sideway 1633"}
  ];
    
    table = () => {
    let resultat = "<table id='t'>";
    for (let element of values) {
      resultat += "<tr>";
      resultat += "<td>" + "Navn: " + element.id + "</td><td>" + "Adresse: " + element.adress +"</td>";
      resultat += "</tr>";
    
    }
    resultat += "</table>"
    
    document.getElementById("users").innerHTML = resultat;
}