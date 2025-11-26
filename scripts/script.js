
const welcomeMessages = [
	"Welkom bij de codeclub!",
	"Dit is de codeclub.",
	"Word een deel van de codeclub!"
];

const random = Math.floor(Math.random() * welcomeMessages.length);
document.getElementById("welkom").textContent = welcomeMessages[random];

function nextFridayAtTwo() {
	const now = new Date();
	const result = new Date(now);

	// vrijdag = 5 (maandag=1, zondag=0)
	const day = result.getDay();
	const daysUntilFriday = (5 - day + 7) % 7;

	// zet datum op komende vrijdag
	result.setDate(result.getDate() + daysUntilFriday);
	result.setHours(14, 0, 0, 0);

	// als het NU al voorbij vrijdag 14:00 is → pak volgende week
	if (result <= now) {
		result.setDate(result.getDate() + 7);
	}

	return result;
}



var countDownDate = nextFridayAtTwo();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
var result = "nog " + days + " dagen, " + hours + " uur, " + minutes + " minuten en " + seconds + " seconden tot de volgende Codeclub!";

// Output the result in an element with id="countdown"
document.getElementById("countdown").innerText = result;

}, 1000);

//function to minimize the screen

function minimize() {
	document.getElementById("container").classList.remove("fullscreen")
	document.getElementById("container").classList.add("window")

}

function maximize() {
	document.getElementById("container").classList.remove("window")
	document.getElementById("container").classList.add("fullscreen")
}

function navigationPopup(item) {
	allPopups = ["file", "edit", "view", "help"]
	
	const element = document.getElementById(item);
	if (element.hidden == true) {
		element.hidden = false;
	}

	else {
		element.hidden = true;
	}

	for (let i = 0; i < allPopups.length; i++) {
		if (!(allPopups[i] == item)) {
			const a = document.getElementById((allPopups[i]));
			a.hidden = true;
		}
	}
}

function changePage(newPage) {
	if (document.getElementById("container").classList.contains("fullscreen")){
		document.location.href = newPage
	}

	if (document.getElementById("container").classList.contains("window")) {
		document.location.href = newPage
		minimize()
	}
}