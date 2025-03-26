document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Here you would typically send the login data to your server
    console.log('Login attempt:', { email, password });
    
    // For demo purposes, simulate a successful login
    alert('Login successful!');
    // Redirect to dashboard or home page
    // window.location.href = 'dashboard.html';
  });
});