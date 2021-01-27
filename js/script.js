// array hewan
const hewan = ["Kambing", "Kerbau", "Kucing", "Sapi"];

// cari elemen array hewan
function cariHewan(arrayHewan, namaHewan) {
  if (arrayHewan.indexOf(namaHewan) !== -1) {
    console.log("Hewan ada");
  } else {
    console.log("Hewan tidak ada");
  }
}

// cetak function cariHewan
cariHewan(hewan, "Kucing");
cariHewan(hewan, "Kucin");