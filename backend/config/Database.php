<?php
// Memasukkan file konstanta yang berisi konfigurasi
require_once 'Constants.php';

// Kelas untuk mengelola koneksi database
class Database {
    // Properti private untuk menyimpan detail koneksi database
    private $host = DB_HOST;      // Alamat host database
    private $user = DB_USER;      // Username database
    private $pass = DB_PASS;      // Password database 
    private $dbname = DB_NAME;    // Nama database
    private $conn;                // Variabel untuk menyimpan koneksi

    // Method untuk membuat koneksi ke database
    public function connect() {
        // Inisialisasi koneksi menjadi null
        $this->conn = null;

        try {
            // Mencoba membuat koneksi PDO baru
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->dbname,
                $this->user,
                $this->pass
            );
            // Mengatur mode error PDO untuk menampilkan exception
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // Mengembalikan objek koneksi
            return $this->conn;
        } catch(PDOException $e) {
            // Menangkap dan menampilkan pesan error jika koneksi gagal
            echo "Koneksi Error: " . $e->getMessage();
            return null;
        }
    }
}
?>