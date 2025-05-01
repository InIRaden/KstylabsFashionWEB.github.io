<?php
// Konfigurasi Database - Pengaturan koneksi ke database
define('DB_HOST', 'localhost');      // Alamat server database
define('DB_USER', 'root');           // Username untuk akses database
define('DB_PASS', '');               // Password untuk akses database
define('DB_NAME', 'k_stylabs');      // Nama database yang digunakan

// Direktori Penyimpanan File - Lokasi untuk file yang diunggah
define('UPLOAD_BLOG_DIR', '../uploads/blog/');     // Folder untuk gambar blog
define('UPLOAD_STYLE_DIR', '../uploads/styles/');  // Folder untuk gambar produk fashion

// Status Response API - Kode status untuk respons API
define('SUCCESS_RESPONSE', 200);    // Kode sukses (Berhasil)
define('ERROR_RESPONSE', 400);      // Kode error (Permintaan Tidak Valid)
define('UNAUTHORIZED', 401);        // Kode tidak terotorisasi (Akses Ditolak)

// Pengaturan Upload File - Konfigurasi untuk upload file
define('MAX_FILE_SIZE', 5000000);    // Ukuran maksimal file dalam bytes (5MB)
define('ALLOWED_IMAGE_TYPES', ['jpg', 'jpeg', 'png', 'gif']);  // Format gambar yang diizinkan

// Pengaturan Autentikasi - Konfigurasi JWT
define('JWT_SECRET_KEY', 'your_secret_key_here');  // Kunci rahasia untuk enkripsi token
define('JWT_EXPIRE_TIME', 3600);      // Waktu kadaluarsa token dalam detik (1 jam)

// Pengaturan Pagination - Konfigurasi pembagian halaman
define('ITEMS_PER_PAGE', 10);         // Jumlah item yang ditampilkan per halaman
?>