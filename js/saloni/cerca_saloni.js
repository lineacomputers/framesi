// JavaScript Document
$(document).ready(function () {
	
		//Ricerca per textbox find
		$('#button_find').on('click', function(e) {
			var url = "saloni_result_location.html?stringa=" + $("#find_citta_provincia_regione").val();
			document.location.href=url;
		});
		
		//Ricerca per geolocation find
		$('#button_geo').on('click', function(e) {
			var url = "saloni_result_location.html?stringa=geolocation";
			document.location.href=url;
		});
	
		/*
		$( "#find_citta_provincia_regione" ).on( "listviewbeforefilter", function ( e, data ) {
			var $ul = $( this ),
			$input = $( data.input ),
			value = $input.val(),
			html = "";
			$ul.html( "" );
			if ( value && value.length > 0 ) {
			$ul.html( "<li><div class='ui-loader'><span class='ui-icon ui-icon-loading'></span></div></li>" );
			$ul.listview( "refresh" );
				$.ajax({
				url: "http://www.framesiclub.it/ServiceSaloni.asmx/ReturnRegioni",
				dataType: "jsonp",
				crossDomain: true,
				error: function(error) {
                	alert("ERRORE " + error.status + ": " + error.statusText);
            	},
				data: {
					q: $input.val()
				}
				})
				.then( function ( response ) {
				$.each( response.d, function ( i, val ) {
					if (val.descrizione.toLowerCase().indexOf("seleziona")<0)
					{
						html += "<li><a href='#'>" + val.descrizione + "</a></li>";
					}
				});
				
			$ul.html( html );
			$ul.listview( "refresh" );
			$ul.trigger( "updatelayout");
			var iframe = $(window.top.document).find("#cerca_salone");
    	   		 //iframe.height( iframe[0].contentDocument.body.scrollHeight+'px' );
				 var window_h = $(window).scroll().height();
				 //iframe.height( $(window).height() - $('#wrapper').height() + 'px' )
			});
			}
			});
			
			*/
});

