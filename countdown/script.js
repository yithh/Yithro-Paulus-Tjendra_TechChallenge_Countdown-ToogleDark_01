$(document).ready(function() {
	
	var countDownDate1 = new Date("May 13, 2023 10:00:00").getTime();
	var countDownDate2 = new Date("May 13, 2023 13:00:00").getTime();

	var x = setInterval(function() {
		// Countdown 1
		var now1 = new Date().getTime();
		var distance1 = countDownDate1 - now1;
		var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
		var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
		var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);

		document.getElementById("days1").innerHTML = days1 + "d ";
		document.getElementById("hours1").innerHTML = hours1 + "h ";
		document.getElementById("minutes1").innerHTML = minutes1 + "m ";
		document.getElementById("seconds1").innerHTML = seconds1 + "s ";

		if (distance1 < 0) {
			clearInterval(x);
			document.getElementById("days1").innerHTML = "";
			document.getElementById("hours1").innerHTML = "";
			document.getElementById("minutes1").innerHTML = "";
			document.getElementById("seconds1").innerHTML = "";
			document.getElementById("message1").innerHTML = "BTT II Seminar Sudah Mulai!";
			document.getElementById("message1").style.display = "block";
		}

		// Countdown 2
		var now2 = new Date().getTime();
		var distance2 = countDownDate2 - now2;
		var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
		var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
		var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

		document.getElementById("days2").innerHTML = days2 + "d ";
		document.getElementById("hours2").innerHTML = hours2 + "h ";
		document.getElementById("minutes2").innerHTML = minutes2 + "m ";
		document.getElementById("seconds2").innerHTML = seconds2 + "s ";

		if (distance2 < 0) {
			clearInterval(x);
			document.getElementById("days2").innerHTML = "";
			document.getElementById("hours2").innerHTML = "";
			document.getElementById("minutes2").innerHTML = "";
			document.getElementById("seconds2").innerHTML = "";
			document.getElementById("message2").innerHTML = "BTT II Talkshow Sudah Mulai!";
			document.getElementById("message2").style.display = "block";
		}

	}, 1000);
	$("#mode-toggle").click(function() {
		$("body").toggleClass("dark-mode");
		$("button").toggleClass("dark-mode");
	});
});
