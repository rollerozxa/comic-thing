
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

window.onload = function () {
	document.getElementById('toggledarkmode').addEventListener('click', function (e) {
		darkmode = !darkmode;
		setCookie('darkmode', darkmode, 365);

		toggleDark();
	});
};

