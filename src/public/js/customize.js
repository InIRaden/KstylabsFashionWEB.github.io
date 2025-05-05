document.addEventListener("DOMContentLoaded", function () {
  // Category switching
  const categoryButtons = document.querySelectorAll(".category-btn");
  const items = document.querySelectorAll(".image-list img");

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Update active button
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter items
      const category = button.dataset.category;
      console.log(category);
      items.forEach((item) => {
        if (category === "all" || item.dataset.type === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Drag and Drop functionality
  const draggableItems = document.querySelectorAll('[draggable="true"]');
  const dropZones = document.querySelectorAll(".drop-zone");
  const removeButtons = document.querySelectorAll(".remove-btn");

  draggableItems.forEach((item) => {
    item.addEventListener("dragstart", handleDragStart);
    item.addEventListener("dragend", handleDragEnd);
  });

  dropZones.forEach((zone) => {
    zone.addEventListener("dragover", handleDragOver);
    zone.addEventListener("dragleave", handleDragLeave);
    zone.addEventListener("drop", handleDrop);
  });

  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const dropZone = button.closest(".drop-zone");
      dropZone.innerHTML = `
                <p>Drop ${button.dataset.target} Here</p>
                <button class="remove-btn" data-target="${button.dataset.target}">Remove</button>
            `;

      // Reattach event listener to new remove button
      const newRemoveBtn = dropZone.querySelector(".remove-btn");
      if (newRemoveBtn) {
        newRemoveBtn.addEventListener("click", handleRemoveClick);
      }
    });
  });

  // Carousel functionality
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    const cardsContainer = carousel.querySelector(".cards-container");
    const prevBtn = carousel.querySelector("#prev");
    const nextBtn = carousel.querySelector("#next");

    if (!cardsContainer || !prevBtn || !nextBtn) return;

    const cards = cardsContainer.querySelectorAll(".card");
    if (cards.length === 0) return;

    const containerWidth = cardsContainer.clientWidth;
    const cardWidth = cards[0].offsetWidth + 16;
    const visibleCards = Math.floor(containerWidth / cardWidth);
    const totalPages = Math.ceil(cards.length / visibleCards);

    let currentPage = 0;

    function scrollToPage(pageIndex) {
      const scrollAmount = pageIndex * visibleCards * cardWidth;
      cardsContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
      currentPage = pageIndex;
      updateButtonStates();
    }

    // Next button click handler
    nextBtn.addEventListener("click", () => {
      if (currentPage < totalPages - 1) {
        currentPage++;
        scrollToPage(currentPage);
      }
    });

    // Previous button click handler
    prevBtn.addEventListener("click", () => {
      if (currentPage > 0) {
        currentPage--;
        scrollToPage(currentPage);
      }
    });

    function updateButtonStates() {
      prevBtn.disabled = currentPage === 0;
      prevBtn.style.opacity = currentPage === 0 ? "0.5" : "1";

      nextBtn.disabled = currentPage === totalPages - 1;
      nextBtn.style.opacity = currentPage === totalPages - 1 ? "0.5" : "1";
    }

    // Initial states
    updateButtonStates();
  });

  // Helper function for remove button clicks
  function handleRemoveClick() {
    const dropZone = this.closest(".drop-zone");
    const target = this.dataset.target;

    dropZone.innerHTML = `
      <p>Drop ${target} Here</p>
      <button class="remove-btn" data-target="${target}">Remove</button>
    `;

    // Reattach event listener to new remove button
    const newRemoveBtn = dropZone.querySelector(".remove-btn");
    if (newRemoveBtn) {
      newRemoveBtn.addEventListener("click", handleRemoveClick);
    }
  }

  function handleDragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.src);
    e.dataTransfer.setData("type", e.target.dataset.type);
    e.target.classList.add("dragging");
  }

  function handleDragEnd(e) {
    e.target.classList.remove("dragging");
    dropZones.forEach((zone) => zone.classList.remove("drag-over"));
  }

  function handleDragOver(e) {
    e.preventDefault();
    this.classList.add("drag-over");
  }

  function handleDragLeave(e) {
    this.classList.remove("drag-over");
  }

  function handleDrop(e) {
    e.preventDefault();
    this.classList.remove("drag-over");

    const itemType = e.dataTransfer.getData("type");
    const zoneType = this.dataset.type;

    if (itemType === zoneType || zoneType === "all") {
      const imgSrc = e.dataTransfer.getData("text/plain");
      this.innerHTML = `
                <img src="${imgSrc}" alt="Dropped item">
                <button class="remove-btn" data-target="${zoneType}">Remove</button>
            `;

      // Reattach event listener to new remove button
      const newRemoveBtn = this.querySelector(".remove-btn");
      if (newRemoveBtn) {
        newRemoveBtn.addEventListener("click", handleRemoveClick);
      }
    }
  }
});
