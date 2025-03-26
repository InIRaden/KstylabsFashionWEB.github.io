document.addEventListener("DOMContentLoaded", function () {
        // Search functionality
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

        // Comment form handling
        const commentForm = document.querySelector(".comment-form");

        commentForm.addEventListener("submit", function (e) {
          e.preventDefault();

          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          const comment = document.getElementById("comment").value;

          if (name && email && comment) {
            alert(
              "Thank you for your comment! It will be reviewed before publishing."
            );
            commentForm.reset();
          }
        });
      });