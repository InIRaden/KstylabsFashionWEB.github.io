document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      // send the login data to server (biasanya, tapi karena gk pake server ya gitu deh)
      console.log('Login attempt:', { email, password });
      
      // karena ini demo doang, simulasikan login yang sukses
      alert('Login successful!');
      // Redirect after login
      redirectToPreviousPage();
    });
  }

  // Function to get URL parameter
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  // Function to redirect to previous page or default to landing page
  function redirectToPreviousPage() {
    var returnUrl = getUrlParameter("returnUrl");
    if (returnUrl) {
      window.location.href = returnUrl;
    } else {
      // Check if referrer is from the same domain
      var referrer = document.referrer;
      if (
        referrer &&
        referrer.indexOf(window.location.hostname) !== -1 &&
        !referrer.includes("/login.html")
      ) {
        window.location.href = referrer;
      } else {
        // Default fallback
        window.location.href = "../mainPage/landingPage.html";
      }
    }
  }

  // Set up click handlers for buttons
  const signInBtn = document.querySelector(".sign-in-btn");
  const googleBtn = document.querySelector(".google-btn");
  const facebookBtn = document.querySelector(".facebook-btn");
  
  if (signInBtn) {
    signInBtn.addEventListener('click', function(e) {
      e.preventDefault();
      redirectToPreviousPage();
    });
  }
  
  if (googleBtn) {
    googleBtn.addEventListener('click', redirectToPreviousPage);
  }
  
  if (facebookBtn) {
    facebookBtn.addEventListener('click', redirectToPreviousPage);
  }
});