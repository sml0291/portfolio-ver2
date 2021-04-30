// typing and deleting effects for front-page description
// reference: https://codepen.io/haaswill/pen/VKzXvZ

const words = ["WEB DEVELOPER.", "VETERANS."];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 200);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 200);
	};
	loopDeleting();
};

typingEffect();

// 처음 이미지가 창에 꽉 차게 나오게 하는 법 (responsive)
// reference: https://www.reddit.com/r/learnjavascript/comments/37g073/dynamic_div_height_based_on_viewport_height_of/

// resizeDiv();

// window.onresize = function(event) {
//     resizeDiv();
// }

// function resizeDiv() {
//     vpw = $(window).width();
//     vph = $(window).height();
//     nvh = $('navbar').height();
//     $('.front-img').css({'height': vph - nvh + 'px'});
// }

// Email

function sendEmail() {
	let userEmail = document.querySelector("#userEmail").value;
	let userMessage = document.querySelector("#userMessage").value;

	Email.send({
	  Host: "smtp.gmail.com",
	  Username: "ckdckdrn112@gmail.com",
	  Password: "Ckdckdrn123!",
	  To: 'ckdckdrn112@gmail.com',
	  From: userEmail,
	  Subject: "[Important] User Request from Lim's Portpolio",
	  Body: userMessage,
	})
	  .then(function (message) {
		alert("mail sent successfully")
	  });
  }