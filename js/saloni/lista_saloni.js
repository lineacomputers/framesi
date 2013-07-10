// JavaScript Document
$(document).ready(function () {
	
	
		
	//Cerco la querystring
	var codice = queryObj["codice"];
	var tipo = queryObj["tipo"];

	
	if (codice!="" && tipo!="")
	{
		findSaloni(codice,tipo);
	}
	else
	{
		jQuery('.spinner').animate({'opacity':0},1000,'easeOutCubic',function (){jQuery(this).css('display','none')});	
	}
	
	
	
	
	

});

function findSaloni(Codice,Tipo)
{
	
	var URL = "http://www.framesiclub.it/ServiceSaloni.asmx/CercaSaloniType";
	
	
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
			codice: "'" +Codice + "'",
			tipo: "'" + Tipo + "'"
		}
		})
		.then( function ( response ) {
		$('#count_risultati').html(response.d.length);
		$.each( response.d, function ( i, val ) {
			
			html +="<li>";
			html +="<a href='salone.html?codice=" + val.codice +"'   rel='external'>";
			html +="<h2>" + val.descrizione +"</h2>";
			html +="<p><strong>" + val.indirizzo +"</strong></p>";
			html +="<p>" + val.cap + " " + val.citta  +" (" + val.provincia_sigla +")" +" " + val.regione +"</p>";
			html +="<p>Telefono " + val.telefono +"</p>";
			
			
			html +="</a>";
			html +="</li>";
			
							
			
		});
		
		
		$ul.html( html );
		$ul.listview( "refresh" );
		$ul.trigger( "updatelayout");
		jQuery('.spinner').animate({'opacity':0},1000,'easeOutCubic',function (){jQuery(this).css('display','none')});	
	});
	
}


