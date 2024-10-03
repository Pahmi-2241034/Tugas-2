function luassegitiga() {
    var alas = 8;
    var tinggi = 5;

    document.write("luas segitiga = " + (alas*tinggi/2) + "<br/>");

}

function volumebola() {
    var ruas = 15;

    document.write("volume bola= " + ((4 / 3) * 3.14 * (ruas * ruas * ruas)) + "<br/>");

}

function hitungSisiMiring() {
    var alas = 4;
    var tinggi = 5;

    var kuadratAlas = alas * alas;
    var kuadratTinggi = tinggi * tinggi;

    var jumlahKuadrat = kuadratAlas + kuadratTinggi;

    var sisiMiring = jumlahKuadrat;
    var estimasi = jumlahKuadrat / 2;

    while ((estimasi - sisiMiring) > 0.00001 || (sisiMiring - estimasi) > 0.00001) {
        sisiMiring = estimasi;
        estimasi = (sisiMiring + jumlahKuadrat / sisiMiring) / 2;
    }

    document.write("sisi miring segitiga siku-siku= " + estimasi + "<br/>");
}
