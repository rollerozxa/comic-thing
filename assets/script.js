
// Cookie set and get
// (from: https://www.w3schools.com/js/js_cookies.asp)

function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for (let i = 0; i <ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}


// Light/dark mode toggle

var darkmode = false;

function toggleDark() {
	var element = document.documentElement;
	element.classList.toggle("dark-mode");
}

if (getCookie('darkmode') === "true") {
	darkmode = true;
	toggleDark();
}

var menuVis = false; // hamburger menu visible (on mobile)

// Wrap event listeners inside window.onload as this script gets run in <head>
// to prevent FOUC with the dark mode that happens when it is put at the end
window.onload = function () {

	// Dark mode toggle button
	document.getElementById('toggledarkmode').addEventListener('click', function (e) {
		darkmode = !darkmode;
		setCookie('darkmode', darkmode, 365);

		toggleDark();
	});

	// Hamburger menu button
	document.getElementById('hamburger-btn').addEventListener('click', function (e) {
		// Get array of nav links
		var navLinks = document.querySelectorAll("nav a");
		// Iterate over 'em
		for (var i = 0; i < navLinks.length; i++) {
			var link = navLinks[i];
			if (link.id == 'hamburger-btn') continue; // Don't touch the hamborger (no touch!)

			link.classList.toggle('show-mobile');

		}

		menuVis = !menuVis;
	});
};
