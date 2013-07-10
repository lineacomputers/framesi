// JavaScript Document
var Geo={};
var DataGeo;
$(document).ready(function () {
	
});

////////////////////////////////////////////////////////
//  			GEOLOCALIZZAZIONE					  //
//Ritorna latitudine - longitudine - citta - provincia - regione
////////////////////////////////////////////////////////

function getPosition(data) {
	
	DataGeo = data;
	error_geo="";
	
	
	if (navigator.geolocation) 
	{
	   	navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
	}
	
	
	
	
	
}







//Get the latitude and the longitude;
function locationSuccess(position) {
	
	Geo.lat = position.coords.latitude;
	Geo.lng = position.coords.longitude;
	getLocation(Geo.lat,Geo.lng);
	
	
}


function locationError(){
	error_geo= "Geocoder failed";
}


function getLocation(latitudine,longitudine)
{
	var citta ="";
	var provincia = "";
	var regione = "";
	
	var geocoder = new google.maps.Geocoder();
	var yourLocation = new google.maps.LatLng(Geo.lat,Geo.lng);
	
	geocoder.geocode({ 'latLng': yourLocation }, function (results, status) {
	if (status == google.maps.GeocoderStatus.OK) 
	{
		if (results[0]) 
		{
			citta =results[0].address_components[2].long_name;
			provincia = results[0].address_components[4].long_name;
			regione = results[0].address_components[5].long_name;
			DataGeo.success({Latitudine: latitudine, Longitudine: latitudine,Citta:citta,Provincia:provincia,Regione:regione});
		} 
	} 
				
	});
	
	
}