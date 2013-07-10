// JavaScript Document
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
		