document.addEventListener("DOMContentLoaded", function () {
  // Carousel functionality
  const carousel = document.getElementById("trending-carousel");
  const prevButton = document.querySelector(".carousel-button.prev");
  const nextButton = document.querySelector(".carousel-button.next");

  if (carousel && prevButton && nextButton) {
    // Calculate the width of a single item including gap
    const calculateScrollAmount = () => {
      const carouselItem = carousel.querySelector(".carousel-item");
      if (carouselItem) {
        return carouselItem.offsetWidth + 20; // Item width + gap
      }
      return 300; // Fallback value
    };

    // Scroll carousel left
    prevButton.addEventListener("click", function () {
      const scrollAmount = calculateScrollAmount();
      carousel.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    });

    // Scroll carousel right
    nextButton.addEventListener("click", function () {
      const scrollAmount = calculateScrollAmount();
      carousel.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    });
  }

  // Rest of your existing code...
}); // <-- Penutup document.addEventListener
