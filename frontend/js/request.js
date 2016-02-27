// HTTP Request Functions

var httpRequest;
makeRequest('http://127.0.0.1:5000/');

function makeRequest(url) {

	httpRequest = new XMLHttpRequest();

	// Check if Request object can be created
	if (!httpRequest) {
		alert('Giving up :( Cannot create an XMLHTTP instance');
		return false;
	}
	// Define action after server response
	httpRequest.onreadystatechange = someFunction;

	// Send Request to Server
	httpRequest.open('GET', url, true);
	httpRequest.send(null);
}		

function someFunction() {
	// Checks for the state of Request and see if there is full server Response
	if (httpRequest.readyState === XMLHttpRequest.DONE) {
		// Checks for a succesful AJAX call
		  if (httpRequest.status === 200) {
			var response = httpRequest.responseText;
			alert(response);
		} 
		else {
			alert('There was a problem with the request.');
		}
	}
}

