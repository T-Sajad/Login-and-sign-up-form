const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn')
const signupBtn = document.getElementById('signup-btn')
const loginContent = document.getElementById('login-content')
const signupContent = document.getElementById('signup-content')
const signupForm = document.getElementById('signup-form')

signupBtn.addEventListener('click',()=>{
    loginContent.style.display ='none';
    signupContent.style.display ='block';
    loginBtn.classList.remove('active');
    signupBtn.classList.add('active');
    signupForm.classList.add('signupAnimation')
})


loginBtn.addEventListener('click',()=>{
    loginContent.style.display ='block';
    signupContent.style.display ='none';
    loginBtn.classList.add('active');
    signupBtn.classList.remove('active');
    loginForm.classList.add('loginAnimation')
})