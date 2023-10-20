document.addEventListener("DOMContentLoaded", function () {
	//nav
	try {
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
	} catch {
      console.log("Error");
	}
	
	

//slider

try {
	function sliderModule() {
		const slider = document.querySelector(".offer__slider");
		const slides = document.querySelectorAll(".offer__slide");
		const prev = document.querySelector(".offer__slider-prev");
		const next = document.querySelector(".offer__slider-next");
		const current = document.querySelector("#current");
		const total = document.querySelector("#total");
		const slidesWrapper = document.querySelector(".offer__slider-wrapper");
		const slidesInner = document.querySelector(".offer__slider-inner");
		const width = window.getComputedStyle(slidesWrapper).width;
	  
		let slideIndex = 1;
		let offset = 0;
	  
		checkForZero();
	  
		slidesInner.style.cssText = `
		  display: flex;
		  width: ${100 * slides.length}%;
		  transition: all .5s;
		`;
	  
		slidesWrapper.style.overflow = "hidden";
		slides.forEach(slide => (slide.style.width = width));
		slider.style.position = "relative";
	  
		const dots = [];
		const dotsWrapper = document.createElement("ul");
		dotsWrapper.style.cssText = `
		  position: absolute;
		  right: 0;
		  left: 0;
		  bottom: 0;
		  z-index: 15;
		  display: flex;
		  justify-content: center;
		  margin-left: 15%;
		  margin-right: 15%;
		  list-style: none;
		`;
		slider.append(dotsWrapper);
	  
		for (let i = 0; i < slides.length; i++) {
		  const dot = document.createElement("li");
		  dot.setAttribute("data-slide-to", i + 1);
		  dot.style.cssText = `
			box-sizing: content-box;
			flex: 0 1 auto;
			width: 30px;
			height: 6px;
			margin-left: 3px;
			margin-right: 3px;
			cursor: pointer;
			background-color: #fff;
			background-clip: padding-box;
			border-top: 10px solid transparent;
			border-bottom: 10px solid transparent;
			opacity: .5;
			transition: opacity .5s;
		  `;
	  
		  if (i === 0) {
			dot.style.opacity = 1;
		  }
		  dotsWrapper.append(dot);
		  dots.push(dot);
		}
	  
		next.addEventListener("click", () => sliderLogic(+width.replace(/\D/g, "") * (slides.length - 1), true, false));
		prev.addEventListener("click", () => sliderLogic(0, false, true));
	  
		dots.forEach(dot => {
		  dot.addEventListener("click", (e) => {
			const slideTo = e.target.getAttribute("data-slide-to");
			slideIndex = slideTo;
			offset = +width.replace(/\D/g, "") * (slideTo - 1);
			slidesInner.style.transform = `translateX(-${offset}px)`;
	  
			checkForZero();
			dotsLogic();
		  });
		});
	  
		function checkForZero() {
		  if (slides.length < 10) {
			total.textContent = `0${slides.length}`;
			current.textContent = `0${slideIndex}`;
		  } else {
			total.textContent = slides.length;
			current.textContent = slideIndex;
		  }
		}
	  
		function dotsLogic() {
		  dots.forEach(dot => (dot.style.opacity = 0.5));
		  dots[slideIndex - 1].style.opacity = 1;
		}
	  
		function sliderLogic(statement, next = false, prev = false) {
		  if (next === true && prev == false) {
			slideIndex === slides.length || slideIndex >= slides.length ? (slideIndex = 1) : (slideIndex++);
			offset === statement ? (offset = 0) : (offset += +width.replace(/\D/g, ""));
		  }
	  
		  if (next === false && prev === true) {
			slideIndex === 1 || slideIndex <= 1 ? (slideIndex = slides.length) : (slideIndex--);
			offset === statement ? (offset = +width.replace(/\D/g, "") * (slides.length - 1)) : (offset -= +width.replace(/\D/g, ""));
		  }
	  
		  slidesInner.style.transform = `translateX(-${offset}px)`;
		  checkForZero();
		  dotsLogic();
		}
	  }
	
		sliderModule();
} catch {
	console.log("Error");
}
	

	//timer
	try {
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
	} catch {
		console.log("Error");
	}
	
	//scroll
	try {
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
	} catch {
      console.log("Error");
	}

	//coment-blog 
	try {
	// comment section
    const comment_submit = document.querySelector("#comment_submit");
    const comment_name = document.querySelector("#comment_name");
    const comment_text = document.querySelector("#comment_text");
    const forappend = document.querySelector(".forappend");
    
    comment_submit.addEventListener("click", (e) => {
      e.preventDefault();
    
      const commentElement = document.createElement("div");
      commentElement.classList.add("testimonial-col");
      
      
      const commentImage = document.createElement("img");
      commentImage.src = "imgs/user3.jpg";
      commentImage.alt = "img";
      commentElement.appendChild(commentImage);
    
      const commentContent = document.createElement("div");
      const commentParagraph = document.createElement("p");
      commentParagraph.textContent = comment_text.value;
      commentContent.appendChild(commentParagraph);
    
      const commentName = document.createElement("h3");
      commentName.textContent = comment_name.value;
      commentContent.appendChild(commentName);

      commentElement.style.cssText = `
             width: 47.2%;
            
             margin-left: 20px;
      `;

      commentElement.appendChild(commentContent);

      forappend.appendChild(commentElement);
    
      comment_name.value = "";
      comment_text.value = "";
    });
    

	} catch {
		console.log("Error");
	}

	try {
		const username = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const text_subj = document.querySelector("#text_subj");
const conf_btn = document.querySelector("#conf_btn");
const popup = document.querySelector(".popup");
const ok_btn = document.querySelector(".ok_btn");

function openPopup() {
  if (username.value !== "" && email.value !== "" && subject.value !== "" && text_subj.value !== "") {
    popup.classList.add("open-popup");
    username.value = "";
    email.value = "";
    subject.value = "";
    text_subj.value = "";
  } else {
    alert("Please fill in all fields.");
  }
}

function closePopup() {
  ok_btn.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.remove("open-popup");
  });
}

conf_btn.addEventListener("click", (e) => {
  e.preventDefault();

  openPopup();
});

closePopup();

	} catch {
		console.log("Error");
	}
});




