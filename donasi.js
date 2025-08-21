document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const campaignId = params.get("campaign");

    const campaignData = {
        renovasi: {
            judul: "Bantu Renovasi Sekolah",
            deskripsi: "Yuk bantu anak-anak di desa terpencil mendapatkan sekolah yang layak.",
            bank: "BCA",
            norek: "1234567890",
            nama: "Komunitas OurCharity",
            qris: "assets/contoh_qris.png"
        },
        lansia: {
            judul: "Obat Gratis untuk Lansia",
            deskripsi: "Bantu sediakan obat-obatan untuk lansia yang tidak mampu.",
            bank: "Mandiri",
            norek: "9876543210",
            nama: "Komunitas Peduli Lansia",
            qris: "assets/contoh_qris.png"
        },
        makanan: {
            judul: "Paket Makanan Keluarga",
            deskripsi: "Berikan sembako untuk keluarga terdampak PHK.",
            bank: "BNI",
            norek: "1122334455",
            nama: "OurCharity Indonesia",
            qris: "assets/qris-makanan.png"
        }
    };

    const campaign = campaignData[campaignId];

    if (campaign) {
        document.getElementById("judul-campaign").textContent = campaign.judul;
        document.getElementById("deskripsi-campaign").textContent = campaign.deskripsi;
        document.getElementById("nama-rekening").textContent = campaign.nama;
        document.getElementById("bank-rekening").textContent = campaign.bank;
        document.getElementById("nomor-rekening").textContent = campaign.norek;
        document.getElementById("gambar-qris").textContent = campaign.qris;
    }
});