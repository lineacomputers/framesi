// JavaScript Document
$(document).ready(function () {
	
	//Cerco la querystring
	var querystring = queryObj["stringa"];

	
	if (querystring=="geolocation")
	{
		findForGeolocation();
	}
	else
	{
		findForStringa(querystring);
	}
	
	
	
	

});


function findForGeolocation()
{
	var a = new getPosition({
		text : 'DATA',
		success : function(data) {
		var url = "http://www.framesiclub.it/ServiceSaloni.asmx/ReturnSalonixGeolocation";
		requestAjaxFind(url,data.Citta);	
			
		}
	})
}

function findForStringa(Stringa)
{
	
	var url = "http://www.framesiclub.it/ServiceSaloni.asmx/ReturnSalonixLocation";
	requestAjaxFind(url,Stringa);
	
}


function requestAjaxFind(URL,Stringa)
{
	var $ul = $("#listview_result");
	html="";
	$.ajax({
		url: URL,
		dataType: "jsonp",
		crossDomain: true,
		error: function(error) {
			alert("ERRORE " + error.status + ": " + error.statusText);
		},
		data: {
			stringa: "'" +Stringa + "'"
		}
		})
		.then( function ( response ) {
		
		$.each( response.d, function ( i, val ) {
			
				if (val.divider=="1")
				{
					html += "<li data-role='list-divider'>" + val.descrizione +"</li>";
				}
				else
				{
					html += "<li><a rel='external' href='saloni_lista.html?codice="+ val.codice+ "&tipo=" + val.tipo +"'>" + val.descrizione +"<span class='ui-li-count'>" + val.count +"</span></a></li>";
				}				
			
		});
		
		
		$ul.html( html );
		$ul.listview( "refresh" );
		$ul.trigger( "updatelayout");
		jQuery('.spinner').animate({'opacity':0},1000,'easeOutCubic',function (){jQuery(this).css('display','none')});	
	});
	
}



function populateHeader(lat, lng,citta,provincia,regione){
	$('#Lat').html("Latitudine " + lat);
	$('#Long').html("Longitudine " + lng);
	$('#Citta').html("Città " + citta);
	$('#Provincia').html("Provincia " + provincia);
	$('#Regione').html("Regione " + regione);
}


