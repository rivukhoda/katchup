// Navigation Bar Generation

document.body.onload = addElement;

function addElement () {

	var upload = createLink('Upload | ', './upload.html');
	var discover = createLink('Discover | ', './discover.html');
	var aboutus = createLink('About Us | ', './aboutus.html');
	var login = createLink('Log In | ', './login.html');
	var signup = createLink('Sign Up', './signup.html');

	// Create a new nav element and give <a> content
	var newNav = document.createElement("nav");
	newNav.appendChild(upload);
	newNav.appendChild(discover);
	newNav.appendChild(aboutus);
	newNav.appendChild(login);
	newNav.appendChild(signup);

	// Add the newly created element and its content into the DOM
	document.body.insertBefore(newNav, document.body.firstChild);

	// Create links to pages
	function createLink(text, url) {
		
		// Create href attribute
		var newAttribute = document.createAttribute("href");
		// Specify value to href attribute
		newAttribute.value = url;
		// Create a tag		
		var newLink = document.createElement("a");
		// Set href attribute along with its value for a tag
		newLink.setAttributeNode(newAttribute);
		// Create text to be displayed for the link
		var newContent = document.createTextNode(text);
		// Add text inbetween the <a> tags
		newLink.appendChild(newContent);
		return newLink;
	}
}

