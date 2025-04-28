document.addEventListener("DOMContentLoaded", function () {
  const emptyState = document.getElementById("emptyState");
  const favoritesGrid = document.getElementById("favoritesGrid");

  // Get favorites from localStorage
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  function updateFavoritesDisplay() {
    if (favorites.length === 0) {
      emptyState.style.display = "flex";
      favoritesGrid.style.display = "none";
    } else {
      emptyState.style.display = "none";
      favoritesGrid.style.display = "grid";

      // Clear existing items
      favoritesGrid.innerHTML = "";

      // Add each favorite item
      favorites.forEach((item) => {
        const favoriteItem = createFavoriteItem(item);
        favoritesGrid.appendChild(favoriteItem);
      });
    }
  }

  function createFavoriteItem(item) {
    const div = document.createElement("div");
    div.className = "favorite-item";
    div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="favorite-content">
                <h3>${item.name}</h3>
                <div class="favorite-actions">
                    <span class="price">${item.price}</span>
                    <button onclick="removeFavorite('${item.id}')" class="remove-btn">
                        <i class="fas fa-heart"></i>
                        Remove
                    </button>
                </div>
            </div>
        `;
    return div;
  }

  // Make removeFavorite function global
  window.removeFavorite = function (itemId) {
    favorites = favorites.filter((item) => item.id !== itemId);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    updateFavoritesDisplay();
  };

  // Initial display update
  updateFavoritesDisplay();
});

// Function to add to favorites (call this from other pages)
function addToFavorites(item) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Check if item already exists
  if (!favorites.find((f) => f.id === item.id)) {
    favorites.push(item);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
}
