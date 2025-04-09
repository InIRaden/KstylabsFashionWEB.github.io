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
    });
  });

  // Carousel functionality
  const carousels = document.querySelectorAll('.carousel');
  
  carousels.forEach(carousel => {
    const cardsContainer = carousel.querySelector('.cards-container');
    const prevBtn = carousel.querySelector('#prev');
    const nextBtn = carousel.querySelector('#next');
    const card = carousel.querySelector('.card');
    
    // Calculate card width including margin/gap
    const cardWidth = card.offsetWidth + 16; // 16px is the gap between cards
    
    // Next button click handler
    nextBtn.addEventListener('click', () => {
      cardsContainer.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      });
    });
    
    // Previous button click handler
    prevBtn.addEventListener('click', () => {
      cardsContainer.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      });
    });
    
    // Show/hide buttons based on scroll position
    cardsContainer.addEventListener('scroll', () => {
      prevBtn.style.opacity = cardsContainer.scrollLeft <= 0 ? '0.5' : '1';
      nextBtn.style.opacity = 
        cardsContainer.scrollLeft >= cardsContainer.scrollWidth - cardsContainer.clientWidth - 10 
          ? '0.5' 
          : '1';
    });
  });

  // Mouse wheel scroll
  cardsContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    cardsContainer.scrollBy({
      left: e.deltaY > 0 ? cardWidth : -cardWidth,
      behavior: 'smooth'
    });
  });

  // Show/hide navigation buttons based on scroll position
  cardsContainer.addEventListener('scroll', () => {
    prev.style.display = cardsContainer.scrollLeft <= 0 ? 'none' : 'block';
    next.style.display = 
      cardsContainer.scrollLeft >= cardsContainer.scrollWidth - cardsContainer.clientWidth 
        ? 'none' 
        : 'block';
  });

  // Initial button visibility check
  prev.style.display = 'none';

    // Button navigation
    const prevBtn = carousel.querySelector("button:first-child");
    const nextBtn = carousel.querySelector("button:last-child");
    const scrollAmount = 300;

    prevBtn.addEventListener("click", () => {
      carousel.scrollLeft -= scrollAmount;
    });

    nextBtn.addEventListener("click", () => {
      carousel.scrollLeft += scrollAmount;
    });
  });

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
      newRemoveBtn.addEventListener("click", () => {
        this.innerHTML = `
                    <p>Drop ${zoneType} Here</p>
                    <button class="remove-btn" data-target="${zoneType}">Remove</button>
                `;
      });
    }
  }
});
