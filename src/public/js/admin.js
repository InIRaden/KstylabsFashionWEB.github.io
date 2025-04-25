let counter = 0; // Untuk nomor urut

// Buka modal
function openModal() {
    document.getElementById("modalForm").style.display = "block";
}

// Tutup modal
function closeModal() {
    document.getElementById("modalForm").style.display = "none";
}

// Tambahkan data ke tabel saat submit
document.getElementById("formTambah").addEventListener("submit", function (e) {
    e.preventDefault();

    const model = document.getElementById("model").value;
    const negara = document.getElementById("negara").value;
    const style = document.getElementById("style").value;
    const cuaca = document.getElementById("cuaca").value;

    const tableBody = document.getElementById("tableBody");
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${++counter}</td>
      <td>${model}</td>
      <td>${negara}</td>
      <td>${style}</td>
      <td>${cuaca}</td>
      <td>
        <button class="btn edit" onclick="editRow(this)">Edit</button>
        <button class="btn delete" onclick="deleteRow(this)">Hapus</button>
      </td>
    `;

    tableBody.appendChild(row);

    this.reset();
    closeModal();
});

// Fungsi Hapus
function deleteRow(button) {
    const row = button.closest("tr");
    row.remove();
    updateRowNumbers();
}

// Fungsi Edit
function editRow(button) {
    const row = button.closest("tr");
    const cells = row.getElementsByTagName("td");

    document.getElementById("model").value = cells[1].innerText;
    document.getElementById("negara").value = cells[2].innerText;
    document.getElementById("style").value = cells[3].innerText;
    document.getElementById("cuaca").value = cells[4].innerText;

    row.remove(); // Hapus dulu baris lama, nanti akan digantikan dengan yang baru setelah submit lagi
    updateRowNumbers();
    openModal();
}

// Update nomor urut
function updateRowNumbers() {
    const rows = document.querySelectorAll("#tableBody tr");
    counter = 0;
    rows.forEach((row) => {
        row.cells[0].innerText = ++counter;
    });
}
