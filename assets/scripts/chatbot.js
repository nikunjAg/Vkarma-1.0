var UserResponse = {};
document.querySelector('.chat-head button').addEventListener('click', () => {
	document.querySelector('.chat-window').classList.remove('show');
	document.querySelector('.on-hover').classList.remove('hide');
});
document
	.querySelector('.on-hover')
	.addEventListener(
		'click',
		() => (document.querySelector('.on-hover').style.display = 'none')
	);
document.querySelector('.icon').addEventListener('click', () => {
	document.querySelector('.chat-window').classList.remove('hide');
	document.querySelector('.chat-window').classList.toggle('show');
	document.querySelector('.on-hover').classList.toggle('hide');
	startchat();
});
var elem = document.querySelector('.chat-area');
var chatArea = document.querySelector('.chat-area');
var startchat = () => {
	chatArea.innerHTML = `<div class="message bot">
                            <img src="./assets/images/chatbot.png" alt="" class="profile">
                            <div class="content">Hi, I'm Vachi!</div>
                        </div>`;

	chatArea.innerHTML += `<div class="option lvl1">
                        <p>
                            Please Select which describes you best
                        </p>
                        <button class="options">Faculty Member</button>
                        <button class="options">Parent</button>
                        <button class="options">Student</button>
                        <button class="options">Teacher</button>
                    </div>`;
	animateop(chatArea.lastChild);
	document.querySelectorAll('.lvl1 .options').forEach((event) => {
		event.addEventListener('click', (user) => {
			UserResponse.user = user.target.innerHTML;
			chatArea.innerHTML += `<div class="message user">
        <img src="./assets/images/user.png" alt="" class="profile">
        <div class="content">${UserResponse.user}</div></div>`;
			elem.scrollTop = elem.scrollHeight;

			setTimeout(() => {
				chatArea.innerHTML += `<div class="message bot">
                                <img src="./assets/images/chatbot.png" alt="" class="profile">
                                <div class="content">Hi, ${user.target.innerHTML}!
                                Please select the category which describes your query</div>
                            </div>`;
				elem.scrollTop = elem.scrollHeight;
				chatArea.innerHTML += `<div class="option lvl2">
                            <a href="./assets/downloads/Vkarma-manual.docx">
															<button class="options">Facing Trouble in login</button>
                            </a>
                            <button class="options small">Want to know more about the features</button>
                            <button class="options">Get in Touch</button>
                            </div>`;
				animateop(chatArea.lastChild);
				elem.scrollTop = elem.scrollHeight;

				document.querySelectorAll('.lvl2 .options').forEach((ev) => {
					ev.addEventListener('click', (issue) => {
						UserResponse.issue = issue.target.innerText;
						chatArea.innerHTML += `<div class="message user">
                        <img src="./assets/images/user.png" alt="" class="profile">
                        <div class="content">${UserResponse.issue}</div></div>`;
						elem.scrollTop = elem.scrollHeight;
						setTimeout(() => {
							chatArea.innerHTML += `<div class="message bot">
                                    <img src="./assets/images/chatbot.png" alt="" class="profile">
                                    <div class="content">Please enter the following details to proceed further</div>
                                 </div>`;

							elem.scrollTop = elem.scrollHeight;
							checkUser();
						}, 700);
					});
				});
			}, 700);
		});
	});
};

var checkUser = () => {
	if (UserResponse.user == 'Parent') parent();
	else if (UserResponse.user == 'Student' || UserResponse.user == 'Teacher')
		teacherStudent();
	else partner();
};

var parent = () => {
	deleteProperties();
	chatArea.innerHTML += `<p>E-mail Address</p><input required id="email" placeholder = "Your E-mail" ></input>`;
	animateop(chatArea.lastChild);

	elem.scrollTop = elem.scrollHeight;
	document.querySelector('#email').addEventListener('keypress', (e) => {
		if (
			document.querySelector('#email').value &&
			emailCheck(document.querySelector('#email').value)
		)
			if (e.code == 'Enter' || e.key == 'Enter') {
				UserResponse.email = document.querySelector('#email').value;
				chatArea.innerHTML += `<div class="message user">
        <img src="./assets/images/user.png" alt="" class="profile">
        <div class="content">${document.querySelector('#email').value}</div>
    </div>`;
				document.querySelector('#email').remove();
				elem.scrollTop = elem.scrollHeight;
				chatArea.innerHTML += `<p>Your Name</p><input id="name" placeholder = "Your Name..."></input>`;
				animateop(chatArea.lastChild);

				elem.scrollTop = elem.scrollHeight;
				document.querySelector('#name').addEventListener('keypress', (e) => {
					if (document.querySelector('#name').value)
						if (e.code == 'Enter' || e.key == 'Enter') {
							UserResponse.name = document.querySelector('#name').value;
							chatArea.innerHTML += `<div class="message user">
        <img src="./assets/images/user.png" alt="" class="profile">
        <div class="content">${document.querySelector('#name').value}</div>
    </div>`;
							animateop(chatArea.lastChild);
							document.querySelector('#name').remove();
							elem.scrollTop = elem.scrollHeight;
							respond();
							return;
						}
				});
			}
	});
};

var teacherStudent = () => {
	deleteProperties();
	chatArea.innerHTML += `<p>E-mail Address</p><input id="email" placeholder = "Your E-mail" ></input>`;

	elem.scrollTop = elem.scrollHeight;
	document.querySelector('#email').addEventListener('keypress', (e) => {
		if (
			document.querySelector('#email').value &&
			emailCheck(document.querySelector('#email').value)
		)
			if (e.code == 'Enter' || e.key == 'Enter') {
				UserResponse.email = document.querySelector('#email').value;
				chatArea.innerHTML += `<div class="message user">
        <img src="./assets/images/user.png" alt="" class="profile">
        <div class="content">${document.querySelector('#email').value}</div>
    </div>`;
				document.querySelector('#email').remove();
				elem.scrollTop = elem.scrollHeight;
				chatArea.innerHTML += `<p>Your Name</p><input id="name" placeholder = "Your Name..."></input>`;
				animateop(chatArea.lastChild);

				elem.scrollTop = elem.scrollHeight;
				document.querySelector('#name').addEventListener('keypress', (e) => {
					if (document.querySelector('#name').value)
						if (e.code == 'Enter' || e.key == 'Enter') {
							UserResponse.name = document.querySelector('#name').value;
							chatArea.innerHTML += `<div class="message user">
        <img src="./assets/images/user.png" alt="" class="profile">
        <div class="content">${document.querySelector('#name').value}</div>
    </div>`;
							document.querySelector('#name').remove();
							elem.scrollTop = elem.scrollHeight;
							chatArea.innerHTML += `<p>Institute Name</p><input id="iname" placeholder = "Institute Name.." ></input>`;
							animateop(chatArea.lastChild);
							elem.scrollTop = elem.scrollHeight;
							document
								.querySelector('#iname')
								.addEventListener('keypress', (e) => {
									if (document.querySelector('#iname').value)
										if (e.code == 'Enter' || e.key == 'Enter') {
											UserResponse.iname = document.querySelector(
												'#iname'
											).value;
											chatArea.innerHTML += `<div class="message user">
        <img src="./assets/images/user.png" alt="" class="profile">
        <div class="content">${document.querySelector('#iname').value}</div>
    </div>`;
											document.querySelector('#iname').remove();
											elem.scrollTop = elem.scrollHeight;
											respond();
											return;
										}
								});
						}
				});
			}
	});
};

var partner = () => {
	deleteProperties();
	chatArea.innerHTML += `<p>E-mail Address</p><input id="email" placeholder = "Your E-mail" ></input>`;
	animateop(chatArea.lastChild);

	elem.scrollTop = elem.scrollHeight;
	document.querySelector('#email').addEventListener('keypress', (e) => {
		if (
			document.querySelector('#email').value &&
			emailCheck(document.querySelector('#email').value)
		)
			if (e.code == 'Enter' || e.key == 'Enter') {
				UserResponse.email = document.querySelector('#email').value;
				chatArea.innerHTML += `<div class="message user">
        <img src="./assets/images/user.png" alt="" class="profile">
        <div class="content">${document.querySelector('#email').value}</div>
    </div>`;
				document.querySelector('#email').remove();
				elem.scrollTop = elem.scrollHeight;
				chatArea.innerHTML += `<p>Your Name</p><input id="name" placeholder = "Your Name..."></input>`;
				animateop(chatArea.lastChild);

				elem.scrollTop = elem.scrollHeight;
				document.querySelector('#name').addEventListener('keypress', (e) => {
					if (document.querySelector('#name').value)
						if (e.code == 'Enter' || e.key == 'Enter') {
							UserResponse.name = document.querySelector('#name').value;
							chatArea.innerHTML += `<div class="message user">
        <img src="./assets/images/user.png" alt="" class="profile">
        <div class="content">${document.querySelector('#name').value}</div>
    </div>`;
							document.querySelector('#name').remove();
							elem.scrollTop = elem.scrollHeight;
							chatArea.innerHTML += `<p>Company Name</p><input id="cname" placeholder="Company Name.." ></input>`;
							animateop(chatArea.lastChild);

							elem.scrollTop = elem.scrollHeight;
							document
								.querySelector('#cname')
								.addEventListener('keypress', (e) => {
									if (document.querySelector('#cname').value)
										if (e.code == 'Enter' || e.key == 'Enter') {
											UserResponse.cname = document.querySelector(
												'#cname'
											).value;
											chatArea.innerHTML += `<div class="message user">
        <img src="./assets/images/user.png" alt="" class="profile">
        <div class="content">${document.querySelector('#cname').value}</div>
    </div>`;
											document.querySelector('#cname').remove();
											elem.scrollTop = elem.scrollHeight;
											respond();
											return;
										}
								});
						}
				});
			}
	});
};

var deleteProperties = () => {
	delete UserResponse.iname;
	delete UserResponse.cname;
};
var respond = () => {
	if (UserResponse.issue == 'Get in Touch') {
		chatArea.innerHTML += `</div><div class="message bot">
    <img src="./assets/images/chatbot.png" alt="" class="profile">
    <div class="content">Thank You, Our executive will contact you soon</div>
    </div>`;
		animateop(chatArea.lastChild);
		elem.scrollTop = elem.scrollHeight;
	} else if (UserResponse.issue == 'Want to know more about the features') {
		chatArea.innerHTML += `</div><div class="message bot">
        <img src="./assets/images/chatbot.png" alt="" class="profile">
        <div class="content"><a href="./assets/brochure.pdf" download>Check out our Brochure here</a></div>
        </div>`;
		animateop(chatArea.lastChild);
		elem.scrollTop = elem.scrollHeight;
	} else if (UserResponse.issue == 'Facing Trouble in login') {
		chatArea.innerHTML += `</div><div class="message bot">
    <img src="./assets/images/chatbot.png" alt="" class="profile">
    <div class="content">We are sorry to hear that, Our executive will contact you soon</div>
    </div>`;
		animateop(chatArea.lastChild);
		elem.scrollTop = elem.scrollHeight;
	}
	console.log(UserResponse);

	fetch('https://formspree.io/xyynjlok', {
		method: 'POST',
		body: JSON.stringify(UserResponse),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((res) => {
			return res.json();
		})
		.then((res) => {
			console.log(res);
		})
		.catch((e) => {
			console.log(e);
		});
};
var animateop = (target) => {
	target.animate(
		[
			{
				transform: 'scale(0)',
			},
			{
				transform: 'scale(0)',
			},
			{
				transform: 'scale(0)',
			},
			{
				transform: 'scale(1.1)',
			},
			{
				transform: 'scale(1)',
			},
		],
		{
			duration: 400,
			iterations: 1,
		}
	);
};
function emailCheck(email) {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}
