document.addEventListener("DOMContentLoaded", function () {
    // ================== CAROUSEL UNTUK "RECOMMENDED" ==================
    let currentIndex = 0; // Menyimpan index gambar yang sedang ditampilkan
    const carousel = document.querySelector(".carousel"); // Mengambil elemen carousel
    const items = document.querySelectorAll(".carousel .item"); // Mengambil semua item di dalam carousel
    const totalItems = items.length; // Menghitung total item di dalam carousel
    const itemWidth = items[0].offsetWidth + 15; // Lebar satu item + margin

    // Fungsi untuk memperbarui tampilan carousel
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    // Fungsi untuk berpindah ke slide berikutnya
    window.nextSlide = function () {
        if (currentIndex < totalItems - 1) {
            currentIndex++; // Pindah ke item berikutnya
        } else {
            currentIndex = 0; // Kembali ke awal jika sudah di akhir
        }
        updateCarousel();
    };

    // Fungsi untuk berpindah ke slide sebelumnya
    window.prevSlide = function () {
        if (currentIndex > 0) {
            currentIndex--; // Pindah ke item sebelumnya
        } else {
            currentIndex = totalItems - 1; // Kembali ke item terakhir jika di awal
        }
        updateCarousel();
    };

    // ================== CAROUSEL UNTUK "NEW ARRIVAL" ==================
    let currentArrivalIndex = 0;
    const arrivalCarousel = document.querySelector(".arrival-carousel");
    const arrivalItems = document.querySelectorAll(".arrival-carousel .item-arrival");
    const totalArrivalItems = arrivalItems.length;
    const arrivalItemWidth = arrivalItems[0].offsetWidth + 15;

    function updateArrivalCarousel() {
        arrivalCarousel.style.transform = `translateX(-${currentArrivalIndex * arrivalItemWidth}px)`;
    }

    // Fungsi untuk berpindah ke slide berikutnya di carousel "New Arrival"
    window.nextArrivalSlide = function () {
        if (currentArrivalIndex < totalArrivalItems - 1) {
            currentArrivalIndex++;
        } else {
            currentArrivalIndex = 0;
        }
        updateArrivalCarousel();
    };

    // Fungsi untuk berpindah ke slide sebelumnya di carousel "New Arrival"
    window.prevArrivalSlide = function () {
        if (currentArrivalIndex > 0) {
            currentArrivalIndex--;
        } else {
            currentArrivalIndex = totalArrivalItems - 1;
        }
        updateArrivalCarousel();
    };

    // ================== PREVIEW GAMBAR DARI SIDEBAR ==================
    const previewArea = document.querySelector(".preview"); // Area untuk menampilkan gambar besar
    const sidebarImages = document.querySelectorAll(".image-list img"); // Mengambil semua gambar di sidebar

    sidebarImages.forEach((img) => {
        img.addEventListener("click", function () {
            // Saat gambar diklik, tampilkan di previewArea
            previewArea.innerHTML = `<img src="${img.src}" alt="Preview" style="width:100%; border-radius:10px;">`;
        });
    });

    // ================== SISTEM FAVORITE (LIKE) ==================
    const favoriteIcons = document.querySelectorAll(".favorite"); // Mengambil semua ikon favorite

    favoriteIcons.forEach((icon) => {
        icon.addEventListener("click", function () {
            // Jika warna ikon sudah merah, ubah menjadi hitam, dan sebaliknya
            if (this.style.color === "red") {
                this.style.color = "black";
            } else {
                this.style.color = "red";
            }
        });
    });

    // ================== EFEK ANIMASI PADA SEARCH BAR ==================
    const searchInput = document.querySelector(".search-bar input"); // Mengambil input search bar
    const searchBar = document.querySelector(".search-bar"); // Mengambil container search bar

    searchInput.addEventListener("focus", function () {
        searchBar.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)"; // Tambahkan bayangan saat input fokus
    });

    searchInput.addEventListener("blur", function () {
        searchBar.style.boxShadow = "none"; // Hilangkan bayangan saat input tidak aktif
    });
});
