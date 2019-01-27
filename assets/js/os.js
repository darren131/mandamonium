const request = new XMLHttpRequest();
const bg = document.getElementById('bg');
const os = document.getElementById('os');

request.open('GET', 'https://cors.io/?http://brianeno.needsyourhelp.org/draw', true);
request.onload = function () {

	// Begin accessing JSON data here
	var data = JSON.parse(this.response);
	var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];

	function populate(a) {
		for (var i = 0; i < 6; i++) {
			var x = Math.round(Math.random() * 14);
			var y = hexValues[x];
			a += y;
		}
		return a;
	}

	var newColor1 = populate('#');
	var newColor2 = populate('#');
	var angle = Math.round(Math.random() * 360);

	var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";

	bg.style.background = gradient;
	os.innerHTML = data.strategy;
}

request.send();
