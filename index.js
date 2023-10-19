document.addEventListener("DOMContentLoaded", function () {
	const navbar = document.querySelector("#navLinks");
	const closee = document.getElementById("close");
	const menu = document.getElementById("menu");
	
	function showMenu (nav,menuItem) {
		menuItem.addEventListener("click", () => {
			nav.style.right = "0";
			nav.style.transition = "1s";
		 }); 
	};
	
	function hideMenu (nav,closeItem) {
		closeItem.addEventListener("click", () => {
			nav.style.right = "-200px";      
		 }); 
	};
	
	showMenu(navbar,menu);
	hideMenu(navbar,closee);
	
	  
	  
	
	
	//timer
	
	function timer (tmData) {
		function getRemainingTime (endTime) {
			const total = Date.parse(endTime) - Date.parse(new Date());
			let days,hours,minutes,seconds;
	
			if (total <= 0 ) {
				days = 0;
				hours = 0;
				minutes = 0;
				seconds = 0;
			} else {
				days = Math.floor(total / (1000 * 60 * 60 * 24));
				hours = Math.floor((total / (1000* 60 * 60) % 24));
				minutes = Math.floor((total / 1000 / 60) % 60);
				seconds = Math.floor((total / 1000) % 60);
			}
	
			return {
				total,
				days,
				hours,
				minutes,
				seconds
			};
		};
	
		function checkZero (n) {
			return n >= 0 && n < 10 ? `0${n}` : n;
		};
	
		function setTimer (selector, endTime) {
			const timer = document.querySelector(selector);
			const daysPart = timer.querySelector("#days");
			const hoursPart = timer.querySelector("#hours");
			const minutesPart = timer.querySelector("#minutes");
			const secondsPart = timer.querySelector("#seconds");
			const timerID = setInterval(updateClock, 1000);
	
			function updateClock () {
				const {total,days,hours,minutes,seconds} = getRemainingTime(endTime);
	
				daysPart.textContent = checkZero(days);
				hoursPart.textContent = checkZero(hours);
				minutesPart.textContent = checkZero(minutes);
				secondsPart.textContent = checkZero(seconds);
	
				if (total <= 0) {
					clearInterval(timerID);
				};
			};
		updateClock();
		};
	  setTimer(".timer", tmData);
	};
	
	timer("2023-12-20 00:00:00");
	
	//scroll 
	
	function scrollDown () {
		const scrolldw = document.querySelector(".scroll");
	
		scrolldw.addEventListener("click", function () {
		  document.documentElement.scroll({
			top: 1234,
			behavior: "smooth"
		  })
		});
	};
	
	scrollDown();



});




