// Handle favorites functionality
function initializeFavorites() {
    // Get all favorite buttons
    const favoriteButtons = document.querySelectorAll('.favorite');
    
    // Load favorites from localStorage
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Update favorite buttons state
    function updateFavoriteButtons() {
        favoriteButtons.forEach(button => {
            const card = button.closest('.card');
            const productData = {
                image: card.querySelector('img').src,
                title: card.querySelector('h2').textContent,
                price: card.querySelector('p').textContent
            };
            
            const isInFavorites = favorites.some(fav => 
                fav.title === productData.title && 
                fav.image === productData.image
            );
            
            if (isInFavorites) {
                button.classList.add('fas');
                button.classList.remove('far');
            } else {
                button.classList.add('far');
                button.classList.remove('fas');
            }
        });
    }

    // Add click handlers to favorite buttons
    favoriteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.card');
            const productData = {
                image: card.querySelector('img').src,
                title: card.querySelector('h2').textContent,
                price: card.querySelector('p').textContent
            };

            const index = favorites.findIndex(fav => 
                fav.title === productData.title && 
                fav.image === productData.image
            );

            if (index === -1) {
                // Add to favorites
                favorites.push(productData);
                button.classList.add('fas');
                button.classList.remove('far');
            } else {
                // Remove from favorites
                favorites.splice(index, 1);
                button.classList.add('far');
                button.classList.remove('fas');
            }

            // Save to localStorage
            localStorage.setItem('favorites', JSON.stringify(favorites));
        });
    });

    // Initialize buttons state
    updateFavoriteButtons();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeFavorites);