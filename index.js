document.addEventListener('DOMContentLoaded', function() {
  // Carousel functionality
  const carousel = document.querySelector('.carousel');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');
  const carouselItems = document.querySelectorAll('.carousel-item');
  
  // Calculate the width to scroll
  const itemWidth = carouselItems[0].offsetWidth + 20; // width + gap
  
  // Scroll carousel left and right
  prevButton.addEventListener('click', function() {
    carousel.scrollBy({
      left: -itemWidth,
      behavior: 'smooth'
    });
  });
  
  nextButton.addEventListener('click', function() {
    carousel.scrollBy({
      left: itemWidth,
      behavior: 'smooth'
    });
  });
  
  // Like button functionality
  const likeButtons = document.querySelectorAll('.like-button');
  
  likeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const icon = this.querySelector('i');
      
      if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        icon.style.color = '#ff4757';
      } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        icon.style.color = '#777';
      }
    });
  });
  
  // Product buttons
  const productButtons = document.querySelectorAll('.product-button');
  productButtons.forEach(button => {
    button.addEventListener('click', function() {
      // You can add product page navigation here
      alert('Product details coming soon!');
    });
  });
  
  // All products button
  const allProductsButton = document.querySelector('.all-products-button');
  if (allProductsButton) {
    allProductsButton.addEventListener('click', function() {
      // Navigate to all products page
      alert('All products page coming soon!');
    });
  }
  
  // CTA button
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', function() {
      // Navigate to style customization page
      alert('Style customization coming soon!');
    });
  }
  
  // Navigation menu highlighting
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
    });
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Responsive menu toggle (for mobile)
  // This would require adding a menu toggle button to the HTML
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      this.classList.toggle('active');
    });
  }
  
  // Image lazy loading
  if ('IntersectionObserver' in window) {
    const imgOptions = {
      threshold: 0,
      rootMargin: "0px 0px 300px 0px"
    };
    
    const imgObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
          }
          
          imgObserver.unobserve(img);
        }
      });
    }, imgOptions);
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imgObserver.observe(img);
    });
  }
  
  // Search functionality
  const searchButton = document.querySelector('.search-button');
  const searchInput = document.querySelector('.search-input');
  
  if (searchButton && searchInput) {
    searchButton.addEventListener('click', function() {
      performSearch();
    });
    
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
    
    function performSearch() {
      const searchTerm = searchInput.value.trim();
      if (searchTerm) {
        // Here you would typically redirect to search results page
        alert(`Searching for: ${searchTerm}`);
        // Example: window.location.href = `search-results.html?q=${encodeURIComponent(searchTerm)}`;
      }
    }
  }
});