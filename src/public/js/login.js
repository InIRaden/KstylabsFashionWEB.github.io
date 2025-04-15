document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Reset error states
    emailInput.classList.remove("error");
    passwordInput.classList.remove("error");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(emailInput.value);

    // Password validation (at least 6 characters)
    const isPasswordValid = passwordInput.value.length >= 6;

    if (!isEmailValid) {
      emailInput.classList.add("error");
      showError("Please enter a valid email address");
      return;
    }

    if (!isPasswordValid) {
      passwordInput.classList.add("error");
      showError("Password must be at least 6 characters long");
      return;
    }

    // If validation passes, redirect to landing page
    window.location.href = "../mainPage/landingPage.html";
  });

  function showError(message) {
    // Remove existing error message if any
    const existingError = document.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }

    // Create and show new error message
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = message;
    loginForm.insertBefore(errorDiv, loginForm.querySelector(".sign-in-btn"));
  }
});
