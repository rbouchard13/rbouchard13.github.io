var map;
var markers = [];
var url;
var tmout;
function updateUrl(){
	markers.forEach((item) => {item.remove();});
	markers = [];
	clearTimeout(tmout);
	addMarkers();
}
function init(){
mapboxgl.accessToken = 'pk.eyJ1IjoidGhlZGFkYXMxMzEzIiwiYSI6ImNrdXNrOXdwbTB3M2Uybm82d2V1bXljbjgifQ.Qk2kDT-hQODQFqGghcr4lQ';
	var element = document.getElementById('map');
	map = new mapboxgl.Map({
  		container: 'map',
  		style: 'mapbox://styles/mapbox/dark-v10',
  		center: [-71.104081, 42.365554],
  		zoom: 14,
	});
  	addMarkers();
}
async function addMarkers(){
	var route = document.getElementById("routes").value;
	if (route === "")
		{url = 'https://api-v3.mbta.com/vehicles?&include=trip';}
	else
		{url = 'https://api-v3.mbta.com/vehicles?&filter[route]=' + route + '&include=trip';}	
	var locations = await getBusLocations();
	locations.forEach(function(bus){
		var marker = getMarker(bus.id);		
		if (marker){
			moveMarker(marker,bus);
		}
		else{
			addMarker(bus);			
		}
	});
	console.log(new Date());
	tmout = setTimeout(addMarkers,15000);
}

async function getBusLocations(){		
	var response = await fetch(url);
	var json     = await response.json();
	return json.data;
}
function addMarker(bus){
	var icon = getIcon(bus);
	var marker = new mapboxgl.Marker({
		color: icon
	})
	marker.setLngLat([bus.attributes.longitude, bus.attributes.latitude]);
	marker._element.id = bus.id;
	var popup = new mapboxgl.Popup({
		offset: 25,
		id: popup})
		.setHTML("<strong>Bus ID#: " + bus.id +
		"<br>Route #: " + bus.relationships.route.data.id +
		"<br>Status: " + bus.attributes.current_status + " To Stop " + bus.attributes.current_stop_sequence +
		"<br>Occupancy: " + bus.attributes.occupancy_status + 
		"</strong>");
	marker.setPopup(popup);
	marker.addTo(map);
	markers.push(marker);
}
function getIcon(bus){
	if (bus.attributes.direction_id === 0) {
		return '#f54842';
	}
	return '#18fc03';	
}
function moveMarker(marker,bus) {
	var icon =  getIcon(bus);
	marker._color = icon;
	marker.setLngLat([bus.attributes.longitude, bus.attributes.latitude]);	
}
function getMarker(id){
	var marker = markers.find(function(item){
		return item._element.id === id;
	});
	return marker;
}

window.onload = init;
