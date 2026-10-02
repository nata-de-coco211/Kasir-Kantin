function formatRupiah(angka) {
    return "Rp" + angka.toLocaleString("id-ID");
}
function hitungTotal() {
    let hargaNasi = 15000;
    let hargaMie = 12000;
    let hargaAyam = 18000;
    let hargaPadang = 15000;
    let hargaEsTeh = 5000;
    let hargaAir = 4000;

    let nasi = Number(document.getElementById("nasi").value);
    let mie = Number(document.getElementById("mie").value);
    let ayam = Number(document.getElementById("ayam").value);
    let padang = Number(document.getElementById("padang").value);
    let esteh = Number(document.getElementById("esteh").value);
    let air = Number(document.getElementById("air").value);

    let subtotal =
        (hargaNasi * nasi) +
        (hargaMie * mie) +
        (hargaAyam * ayam) +
        (hargaPadang * padang) +
        (hargaEsTeh * esteh) +
        (hargaAir * air);
    let diskon = 0;
    let persenDiskon = 0;
    if (subtotal >= 100000) {
        persenDiskon = 20;
        diskon = subtotal * 0.20;
    } else if (subtotal >= 50000) {
        persenDiskon = 10;
        diskon = subtotal * 0.10;
    } else {
        persenDiskon = 0;
        diskon = 0;
    }
    let total = subtotal - diskon;
    let bayar = Number(document.getElementById("bayar").value);
    document.getElementById("subtotal").innerText =
        formatRupiah(subtotal);
    document.getElementById("diskon").innerText =
        formatRupiah(diskon) + " (" + persenDiskon + "%)";
    document.getElementById("total").innerText =
        formatRupiah(total);
    document.getElementById("strukBayar").innerText =
        formatRupiah(bayar);
    
    let status = document.getElementById("status");
    if (bayar >= total) {
        let kembalian = bayar - total;
        status.innerText = "Kembalian: " + formatRupiah(kembalian);
        document.getElementById("strukKembalian").innerText =
            formatRupiah(kembalian);
    } else {
        status.innerText = "Uang tidak cukup!";
        document.getElementById("strukKembalian").innerText =
            "Uang tidak cukup!";
    }
    let nama = document.getElementById("nama").value;
    if (nama == "") {
        nama = "Pelanggan";
    }
    document.getElementById("strukNama").innerText = nama;

    let detail = "";
    if (nasi > 0) {
        detail += "Nasi Goreng x" + nasi + " = " + formatRupiah(hargaNasi * nasi) + "\n";
    }
    if (mie > 0) {
        detail += "Mie Goreng x" + mie + " = " + formatRupiah(hargaMie * mie) + "\n";
    }
    if (ayam > 0) {
        detail += "Ayam Geprek x" + ayam + " = " + formatRupiah(hargaAyam * ayam) + "\n";
    }
    if (padang > 0) {
        detail += "Nasi Padang x" + padang + " = " + formatRupiah(hargaPadang * padang) + "\n";
    }
    if (esteh > 0) {
        detail += "Es Teh x" + esteh + " = " + formatRupiah(hargaEsTeh * esteh) + "\n";
    }
    if (air > 0) {
        detail += "Air Mineral x" + air + " = " + formatRupiah(hargaAir * air) + "\n";
    }
    document.getElementById("strukDetail").innerText = detail;
    document.getElementById("strukSubtotal").innerText =
        formatRupiah(subtotal);
    document.getElementById("strukDiskon").innerText =
        formatRupiah(diskon);
    document.getElementById("strukTotal").innerText =
        formatRupiah(total);
    document.getElementById("strukBayar").innerText =
        formatRupiah(bayar);
    document.getElementById("strukKembalian").innerText =
        formatRupiah(kembalian);
}
