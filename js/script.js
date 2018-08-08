let clock = document.getElementById('clock');
let bgColor = document.getElementById('bg_color');

function hexClock() {
	let time = new Date();
	
	let hours = time.getHours().toString();
	let minutes = time.getMinutes().toString();
	let seconds = time.getSeconds().toString();

	if (hours.length < 2) {
		hours = '0' + hours;
	}
	if (minutes.length < 2) {
		minutes = '0' + minutes;
	}
	if (seconds.length < 2) {
		seconds = '0' + seconds;
	}

	let clockString = hours + ':' + minutes + ':' + seconds;
	let bgColorString = '#' + hours + minutes + seconds;

	clock.textContent = clockString;
	bgColor.textContent = bgColorString;

	document.body.style.background = bgColorString;
}

hexClock();
setInterval(hexClock, 1000);