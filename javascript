document.getElementById("reservationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const guests = document.getElementById("guests").value;

    if (destination && date && guests) {
        // Simpan data destinasi, jumlah pengunjung, dan harga ke localStorage
        localStorage.setItem("destination", destination);
        localStorage.setItem("guests", guests);

        const harga = {
            bali: 1000000, // Harga untuk Bali
            yogyakarta: 750000, // Harga untuk Yogyakarta
            bandung: 600000 // Harga untuk Bandung
        };

        localStorage.setItem("price", harga[destination] * guests);

        window.location.href = "pembayaran.html";
    }
});
