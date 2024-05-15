// = 'kminchelle'
// = 'kminchelle@qq.com'
// = '0lelplR'
const login = document.querySelector('#login');
const loginError = document.getElementById('login-error');

login.addEventListener('click', (e) =>{
	e.preventDefault();
    const user = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
	fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
        username: user,
        password: password,
        expiresInMins: 30,
      })
    })
    .then(response => {
		if (!response.ok) {
			loginError.classList.remove('login-error-hidden')
			loginError.classList.add('login-error')
		}
		return response.json();})
    .then(data =>{
		console.log(data);
		if(data.username == user){
			window.location.href = "index.html";
		}
	});
    
});


