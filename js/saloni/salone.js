// JavaScript Document

$(document).delegate(".ui-content", "touchmove", false);

$(document).ready(function () {
	
	
	//Cerco la querystring
	var codice = queryObj["codice"];
	
	
	if (codice!="" )
	{
		findSalone(codice);
	}
	else
	{
		jQuery('.spinner').animate({'opacity':0},1000,'easeOutCubic',function (){jQuery(this).css('display','none')});	
	}
	
	
	
	
	

});

function findSalone(Codice)
{
	
	var URL = "http://www.framesiclub.it/ServiceSaloni.asmx/CercaSalone";
	
	
	var $form_salone = $("#form_salone");
	html="";
	$.ajax({
		url: URL,
		dataType: "jsonp",
		crossDomain: true,
		error: function(error) {
			alert("ERRORE " + error.status + ": " + error.statusText);
		},
		data: {
			codice: "'" +Codice + "'"
		}
		})
		.then( function ( response ) {
		val = response.d;	
		
		html +="<h3 class='ragione_sociale'>" + val.ragione_sociale +"</h3>";
		html +="<p>" + val.indirizzo +"</p>";
		html +="<p>" + val.cap + " " + val.citta  +" (" + val.provincia_sigla +")" +" " + val.regione +"</p>";
		html +="<p>";
		html +="<a href='tel:+'" + val.telefono +"' data-role='button' data-mini='true' data-inline='true' data-icon='arrow-r' data-theme='c'  data-corners='false' style='margin-left:0'>" + val.telefono +"</a>";
		if (val.email!="")
		{
		html +="<a href='mailto:'" + val.email +"' data-role='button' data-mini='true' data-inline='true' data-icon='arrow-r' data-theme='c'  data-corners='false' style='margin-left:0'>" + val.email +"</a>";
		}
		html +="</p>";
		
		html +="<ul class='list-social'>";
		//sito
		if (val.sito!="")
		{
			html +="<li><a class='icon-2' target='_blank' href='" + val.sito +"'></a></li>";
		}
		//facebook
		if (val.facebook!="")
		{
			html +="<li><a class='icon-1' target='_blank' href='" + val.facebook +"'></a></li>";
		}
		
		//twitter
		if (val.twitter!="")
		{
			html +="<li><a class='icon-3' target='_blank' href='" + val.twitter +"'></a></li>";
		}
		
		html +="</ul>";
		
		html +="<div class='row-1'>";
		html +="<h5>" + val.titolo + "</h5>";
		html +="<p class='logo'>" + val.logo.replace('src="','src="http://www.framesiclub.it') +"</p>";
		html +="<p>" + val.descrizione + "</p>";
		html +="</div>";
		
		
		
		
		html +="<div class='row-2' id='galleria'>";
	    //devo preparare la galleria
		galleria =  val.galleria.replace(/src="/g,' src="http://www.framesiclub.it');
		galleria =  galleria.replace(/href="/g,' href="http://www.framesiclub.it');
		html += galleria ;
		html +="</div>";
		
		
		
		html +="<div class='row-2'>";
	
		html +="<p>" + val.orari + "</p>";
		html +="</div>";
		
	
		
		
		
		$form_salone.html(html);
		
		
		$form_salone.trigger("create");
		
		
		
		//devo preparare la galleria
		var $div_galleria=  $("#form_salone").find("#galleria");
		var $ul_galleria= $div_galleria.find("ul");
		$ul_galleria.addClass("portfolio clearfix");
		
		//devo cercare tutti gli li
		$ul_galleria.find('li').each( function(index, element) {
			var $li =  $(this);
            $li.addClass("box");
			$a = $ul_galleria.find('a');
			$a.removeClass();
			$a.addClass("magnifier");
			$img = $ul_galleria.find('img');
			$img.removeAttr("style");
			
        });
		
		
		
			var map = new google.maps.Map($("#map-container").get(0), {
		zoom: 8,
		center: new google.maps.LatLng(37.4419, -122.1419),
		mapTypeId: google.maps.MapTypeId.ROADMAP
		});
		google.maps.event.trigger(map, 'resize');
				
		
		
		jQuery('.spinner').animate({'opacity':0},1000,'easeOutCubic',function (){jQuery(this).css('display','none')});	
	});
	
}




