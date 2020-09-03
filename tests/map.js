const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1Ijoia2V5bWFzdGVyNjE2IiwiYSI6ImNrZWZ6b3NmdjBvbHIycm16dmVoOHc5c2sifQ.1mzjAjlBuwog0SXrzQxxHw';

var theMap = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
});

document.getElementById('map').innerHTML = theMap;
console.log(theMap)



// const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

// const mapKey = 'pk.eyJ1Ijoia2V5bWFzdGVyNjE2IiwiYSI6ImNrZWZ6b3NmdjBvbHIycm16dmVoOHc5c2sifQ.1mzjAjlBuwog0SXrzQxxHw';

// const outMap = document.getElementById("#map")


// mapboxgl.accessToken = mapKey;

// var map = new mapboxgl.Map({
//     container: 'outMap',
//     style: 'mapbox://styles/keymaster616/ckejc52en5n5u19nx3h8a2d8e'
// });

// outMap.append(map);

// function launchMap() {
    
// };
// launchMap()