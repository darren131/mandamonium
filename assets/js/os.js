var request = new XMLHttpRequest();

request.open('GET', 'http://brianeno.needsyourhelp.org/draw', true);
request.onload = function () {

	// Begin accessing JSON data here
	var data = JSON.parse(this.response);

	if (request.status >= 200 && request.status < 400) {
		data.forEach(os => {
			console.log(os.strategy);
		});
	} else {
		console.log('error');
	}
}

request.send();
