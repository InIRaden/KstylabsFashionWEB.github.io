document.addEventListener("DOMContentLoaded", function () {
        const searchInput = document.querySelector(".search-bar input");
        const searchButton = document.querySelector(".search-bar button");

        searchButton.addEventListener("click", function () {
          performSearch(searchInput.value);
        });

        searchInput.addEventListener("keypress", function (e) {
          if (e.key === "Enter") {
            performSearch(searchInput.value);
          }
        });

        function performSearch(query) {
          if (query.trim() !== "") {
            alert("Searching for: " + query);
            // In a real implementation, this would redirect to search results
          }
        }
      });