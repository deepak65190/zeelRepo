//   map section
const key = "27cf9553ebecc0a57c9dd0b108c4ab53 ";
const url1 = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
function getData(){
    
   
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
   fetch(url).then(function(res){
      return res.json()
   }).then(function(res){
   append(res)
   }).catch(function(errr){
       console.log(errr)
   })
}
function append(data){
    let box = document.getElementById("con")
    box.innerHTML= null
let h3 = document.createElement("h1") ;
h3.innerHTML= data.name ;


box.append(h3)
let iframe = document.getElementById("gmap_canvas") ;
iframe.src= `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

}
    function getjio(){
        navigator.geolocation.getCurrentPosition(success);
        function success(pos) {
    const crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    getWeatherOnLocation(crd.latitude, crd.longitude);
   
  }
}

 
  
  function getWeatherOnLocation(lat,lon){
    const url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=27cf9553ebecc0a57c9dd0b108c4ab53`
    fetch(url1).then(function(res){
        return res.json()
    } ).then(function(res){
        append(res)
    })
   
    
    
  }