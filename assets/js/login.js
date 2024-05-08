
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
        // email: email,
        password: password,
        expiresInMins: 30, // optional, defaults to 60
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
		if(data.username == user /*&& data.password == password*/){
			window.location.href = "index.html";
		}
	});
    
});




/** 
 * javascript comment 
 * @Author: x
 * @Date: 2024-05-08 10:22:36 
 * @input:fjgdfkghdfg
 * @output:jfxhgldfhdg
 * @Desc:  
 */
// function test (arg1 , arg){
// 	console.log("sfhdsflhsdf")
// }