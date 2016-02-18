
var Firebase = require('firebase');

// Boulder
var city_location = {
  lat: 40.0067,
  lon: -105.2672
}

var radius = 0.03

// simualate a random person entering, staying for a duration, and leaving
function simulate(){

  // generate a random person with a random name,
  // random location, and random duration
  var name = ['Chip1', 'Chip2', 'Chip3', 'Chip4', 'Chip5', 'Chip6', 'Chip7', 'Chip8', 'Chip9', 'Chip10']
  var rand = name[Math.floor(Math.random() * name.length)]
  var duration = 1 + 5 * Math.random()
  var lat = city_location.lat + radius * (Math.random() - 0.5) * 2
  var lon = city_location.lon + radius * (Math.random() - 0.5) * 2
  var person = {
    name: rand,
    duration: duration,
    lat: lat,
    lon: lon
  }

  // simulate this person entering
  enter(person)

  // simulate this person leaving after 'duration' seconds
  setTimeout(function(){
    leave(person)
  }, duration * 1000)

}



function enter(person){
  console.log('enter', person)
  var ref = new Firebase('https://platano.firebaseio.com/')
  var userRef = ref.child(person.name);

  userRef.set({
    lat: person.lat,
    lon: person.lon,
    name: person.name
  });

}


function leave(person){
  console.log('leave', person)
  // remove this person from the Firebase
  var ref = new Firebase('https://platano.firebaseio.com/')
  ref.child(person.name).remove()

}


function clear(){
  // remove all people from the Firebase
  var ref = new Firebase('https://platano.firebaseio.com/')
  
}


// clear the firebase, so that the simulation always starts from no one
clear()

// run each second
setInterval(simulate, 2000)
