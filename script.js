// Mengambil data dari localStorage dan menampilkannya
window.onload = function() {
    const destination = localStorage.getItem("destination");
    const guests = localStorage.getItem("guests");
    const totalPrice = localStorage.getItem("price");

    // Menampilkan informasi di halaman pembayaran
    const destinationName = {
        bali: "Bali",
        yogyakarta: "Yogyakarta",
        bandung: "Bandung"
    };

    document.getElementById("destinationName").innerText = destinationName[destination];
    document.getElementById("guestsCount").innerText = guests;
    document.getElementById("totalPrice").innerText = totalPrice;
}