
$(document).ready(function(){
	/////////////////////////////////////////////////////////////////////////////
	
	var isiPhone = 		navigator.userAgent.toLowerCase().indexOf("iphone");
	var isiPad = 		navigator.userAgent.toLowerCase().indexOf("ipad");
	var isiPod = 		navigator.userAgent.toLowerCase().indexOf("ipod");
	var isiAndroid = 	navigator.userAgent.toLowerCase().indexOf("android");
	
	var isPhonegap = 	document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
	
	if(isiPhone > -1) 	 {		 $('.ipod-detected').hide();		 $('.ipad-detected').hide();		 $('.iphone-detected').show();		 $('.android-detected').hide();	 }
	if(isiPad > -1)	 {		 	 $('.ipod-detected').hide();		 $('.ipad-detected').show();		 $('.iphone-detected').hide();		 $('.android-detected').hide();	 }
	if(isiPod > -1)	 {		 	 $('.ipod-detected').show();		 $('.ipad-detected').hide();		 $('.iphone-detected').hide();		 $('.android-detected').hide();	 }   
	if(isiAndroid > -1) 
	{		 
		$('.ipod-detected').hide();		 
		$('.ipad-detected').hide();		 
		$('.iphone-detected').hide();		
	 	$('.android-detected').show();	 
	  	if ( queryObj[ "android" ] != "noinstall" ) {
			 if (!isPhonegap)
			 {
			 	window.location = "android_install.html";
			 }
			
	  	}
		
	 }  

});
// ***this goes on the global scope
	// get querystring as an array split on "&"
	var querystring = location.search.replace( '?', '' ).split( '&' );
	// declare object
	
	
	// ***now you can use queryObj["<name>"] to get the value of a url
	// ***variable

		var queryObj = {};
	// loop through each name-value pair and populate object
	for ( var i=0; i<querystring.length; i++ ) {
		  // get name and value
		  var name = querystring[i].split('=')[0];
		  var value = querystring[i].split('=')[1];
		  // populate object
		  queryObj[name] = value;
	}
		
		
