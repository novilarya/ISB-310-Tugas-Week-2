$(document).ready(function() {
    $("#tombolShout").click(function() {
        alert("Hai, Selamat datang di Sistem Sederhana!");
    });

    $("#linkMenu").click(function(e) {
        e.preventDefault();
        alert("Input jumlah pesanan agar dihitung otomatis oleh sistem!");
        window.location.href = "menu.html";
    });

    $(".input-qty").on("input", function() {
        let qty1 = parseInt($("#qty1").val()) || 0;
        let qty2 = parseInt($("#qty2").val()) || 0;
        let qty3 = parseInt($("#qty3").val()) || 0;

        let total = (qty1 * 12000) + (qty2 * 10000) + (qty3 * 15000);
        let diskon = 0;

        if (total > 50000) {
            diskon = total * 0.10;
        }

        let bayar = total - diskon;

        $("#totalHarga").val(total);
        $("#diskon").val(diskon);
        $("#jumlahBayar").val(bayar);
    });

    $("#btnResetMenu").click(function() {
        $(".input-qty").val("0");
        $("#totalHarga").val("0");
        $("#diskon").val("0");
        $("#jumlahBayar").val("0");
    });

    $("#btnHitung").click(function() {
        let val1 = parseFloat($("#angka1").val());
        let val2 = parseFloat($("#angka2").val());
        let operator = $("#operator").val();
        let hasil = 0;

        if (isNaN(val1) || isNaN(val2)) {
            alert("Harap masukkan kedua angka!");
            return;
        }

        if (val1 <= 0 || val2 <= 0) {
            alert("Inputan pertama dan kedua harus lebih dari 0!");
            return;
        }

        switch (operator) {
            case '*': hasil = val1 * val2; break;
            case '/': hasil = val1 / val2; break;
            case '+': hasil = val1 + val2; break;
            case '-': hasil = val1 - val2; break;
            case '%': hasil = val1 % val2; break;
            case '^': hasil = Math.pow(val1, val2); break;
        }

        $("#hasilCalc").val(hasil);
    });

    $("#btnResetCalc").click(function() {
        $("#angka1").val("");
        $("#angka2").val("");
        $("#operator").val("*");
        $("#hasilCalc").val("");
    });

});