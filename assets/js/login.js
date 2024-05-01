// const signUpButton = document.getElementById('signUp');
// const signInButton = document.getElementById('signIn');
// const container = document.getElementById('container');

// signUpButton.addEventListener('click', () => {
// 	container.classList.add("right-panel-active");
// });

// signInButton.addEventListener('click', () => {
// 	container.classList.remove("right-panel-active");
// });


// const signupBtn = document.getElementById('signup');
// const loginBtn = document.getElementById('login');


// loginBtn.addEventListener('click', (e) => {
// 	let parent = e.target.parentNode;
// 	Array.from(e.target.parentNode.classList).find((element) => {
// 		if(element !== "slide-up") {
// 			parent.classList.add('slide-up')
// 		}else{
// 			signupBtn.parentNode.parentNode.classList.add('slide-up')
// 			parent.classList.remove('slide-up')
// 		}
// 	});
// });

// signupBtn.addEventListener('click', (e) => {
// 	let parent = e.target.parentNode.parentNode;
// 	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
// 		if(element !== "slide-up") {
// 			parent.classList.add('slide-up')
// 		}else{
// 			loginBtn.parentNode.classList.add('slide-up')
// 			parent.classList.remove('slide-up')
// 		}
// 	});
// });





// = 'kminchelle'
// = 'kminchelle@qq.com'
// = '0lelplR'
const login = document.querySelector('#login');
const loginError = document.getElementById('login-error');
// const loginError2 = document.getElementById('login-error2');

login.addEventListener('click', (e) =>{
	e.preventDefault();
    const user = document.querySelector('#username').value;
	// console.log(user);
    // const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
	fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
        username: user,
        // email: email,
        password: password,
        expiresInMins: 30, // optional, defaults to 60
      })
    })
    .then(response => {
		if (!response.ok) {
			// console.log('error');
			loginError.classList.remove('login-error-hidden')
			loginError.classList.add('login-error')
		}
		return response.json();})
    .then(data =>{
		console.log(data);
		if(data.username == user /*&& data.password == password*/){
			window.location.href = "index.html";
			// console.log(data);
			// console.log(data.username, user);
		}
		// }else{
		// 	loginError.classList.remove('login-error')
		// 	loginError.classList.add('login-error-hidden')
		// 	loginError2.classList.add('login-error')
		// 	loginError.classList.remove('login-error-hidden')
		// }
	});
    
});


 