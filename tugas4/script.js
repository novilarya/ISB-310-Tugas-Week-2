$(document).ready(function() {
    for (let angkaHari = 1; angkaHari <= 31; angkaHari++) {
        $('#tanggal').append(`<option value="${angkaHari}">${angkaHari}</option>`);
    }

    for (let angkaTahun = 1950; angkaTahun <= 2026; angkaTahun++) {
        let tahunTerpilih = (angkaTahun === 2008) ? 'selected' : '';
        $('#tahun').append(`<option value="${angkaTahun}" ${tahunTerpilih}>${angkaTahun}</option>`);
    }

    $("#tombolKirim").click(function() {
        let nilaiTanggal = $("#tanggal").val();
        let nilaiBulan = $("#bulan").val();
        let nilaiTahun = $("#tahun").val();

        $("#outputTanggal").val(nilaiTanggal);
        $("#outputBulan").val(nilaiBulan);
        $("#outputTahun").val(nilaiTahun);

        let gabunganSemuaAngka = nilaiTanggal.toString() + nilaiBulan.toString() + nilaiTahun.toString();
        
        let hasilTahapSatu = 0;
        for (let hurufAngka of gabunganSemuaAngka) {
            hasilTahapSatu += parseInt(hurufAngka);
        }
        $("#outputHasil1").val(hasilTahapSatu);

        function hitungProsesSederhana(angkaMasukan) {
            let totalJumlah = 0;
            let angkaSebagaiTeks = angkaMasukan.toString();
            
            for (let satuanAngka of angkaSebagaiTeks) {
                totalJumlah += parseInt(satuanAngka);
            }
            
            if (totalJumlah > 9) {
                let prosesLanjutan = hitungProsesSederhana(totalJumlah);
                return { hasilTahapDua: totalJumlah, hasilPalingAkhir: prosesLanjutan.hasilPalingAkhir };
            } else {
                return { hasilTahapDua: "", hasilPalingAkhir: totalJumlah };
            }
        }

        let hasilKalkulasi = hitungProsesSederhana(hasilTahapSatu);
        
        $("#outputHasil2").val(hasilKalkulasi.hasilTahapDua);
        $("#outputHasilAkhir").val(hasilKalkulasi.hasilPalingAkhir);

        tampilkanDeskripsi(hasilKalkulasi.hasilPalingAkhir);
    });

    $("#tombolReset").click(function() {
        $(".baris-output input").val("");
        $("#teksArti").empty();
        $("#tanggal").val("1");
        $("#bulan").val("1");
        $("#tahun").val("2008");
    });

    function tampilkanDeskripsi(angkaGarisHidup) {
        let kontenHtml = "";
        let dataGarisHidupLengkap = {
            1: {
                judul: "Tanggal Lahir Anda Berada Pada Garis Hidup 1",
                isi: `
                    <p>Misi hidupnya adalah untuk bisa selalu independen.</p>
                    <p>Ada dua bagian dalam proses mencapai hal ini: pertama, Anda harus belajar untuk berdiri di atas kedua kaki dan tidak tergantung pada orang lain.</p>
                    <p>Kemudian setelah Anda benar-benar bebas dan independen, belajarlah untuk menjadi pemimpin.</p>
                    <p>Banyak jenderal, pemimpin perusahaan, dan politikus mempunyai angka “Garis Hidup” 1.</p>
                    <p>Orang-orang yang mempunyai angka garis hidup satu ini selalu mempunyai potensi yang hebat untuk menjadi pemimpin, tapi mereka bisa gagal bila menjadi pengikut. Banyak dari mereka yang menghabiskan sebagian besar berusaha melepaskan ketergantungan mereka pada orang lain, tapi ini justru menyisakan sedikit waktu bagi mereka untuk memperoleh kesenangan yang didapat dari keindependenan.</p>
                    <p>Orang dengan garis hidup 1 harus keluar dari lingkungan yang membuat mereka mudah untuk tergantung, dan sulit untuk independen. Mereka yang mempunyai angka garis hidup 1 penuh dengan inspirasi kreatif, dan memiliki antusiasme dan dorongan untuk mencapai banyak hal. Semangat dan potensi tersebut datang dari kedalaman kekuatan yang dimiliki.</p>
                    <p>Baik fisik maupun karakter. Dengan kekuatan ini, muncul kegigihan dan kemampuan untuk memimpin. Sebagai pemimpin alami, Anda mempunyai pengaruh untuk mengambil alih tiap situasi. Terlalu percaya diri dan tidak sabaran. Sangat orisinil, Anda berbakat sebagai seorang penemu atau inovator. Dalam tiap pekerjaan yang Anda pilih, sikap independen Anda akan terlihat. Anda memiliki keinginan-keinginan pribadi yang sangat kuat, dan Anda selalu merasa harus mengikuti keyakinan Anda sendiri.</p>
                    <p>Jika seseorang dengan angka garis hidup 1 ini belum berevolusi dengan baik, dan menunjukkan sisi negatifnya, justru yang tampak adalah sisi karakternya yang tergantung pada orang. Jika berada pada titik terburuknya, energi angka 1 ini bisa membuatnya menjadi egois.</p>`
            },
            2: {
                judul: "Tanggal Lahir Anda Berada Pada Garis Hidup 2",
                isi: `
                    <p>Karakter positif dari mereka yang tanggal lahirnya berjumlah 2 adalah kepekaan yang umumnya memiliki kemampuan halus untuk bersikap adil dan seimbang. Anda bisa melihat banyak sudut pandang dalam tiap argumen atau situasi, dan karenanya orang-orang akan mencari Anda sebagai penengah.</p>
                    <p>Dalam peran ini, Anda mampu menyelesaikan berbagai perselisihan dengan cara yang berkelas.</p>
                    <p>Ada perhatian yang tulus terhadap orang lain, Anda berpikir yang terbaik tentang mereka, dan ingin yang terbaik bagi orang lain. Anda jujur dan terbuka dalam pikiran, ucapan maupun tindakan. Anda cenderung berhasil dalam segala kegiatan kelompok, tempat Anda mempraktekkan kemampuan untuk menggabungkan orang-orang dari bermacam-macam latar belakang. Etiket dan diplomasi merupakan cara Anda berhubungan dengan orang setiap saat. Anda adalah manusia rutinitas yang merasa nyaman untuk selalu mengikuti kebiasaan lama. Hal-hal baru untuk dicoba bukanlah kesukaan Anda.</p>
                    <p>Tapi Anda adalah seorang master dalam berkompromi dan mempertahankan harmoni dalam lingkungan, tidak suka merendahkan diri untuk berargumen. Seorang kolektor alami, dalam arti jarang membuang benda-benda yang (walaupun bagi orang lain sudah pasti dibuang) masih ada gunanya bagi Anda.</p>
                    <p>Sisi negatif angka garis hidup 2 ini tidak terlalu membawa masalah. Halangan dan kesulitan terbesar yang bisa Anda temui adalah kepasifan dan suatu kondisi apatis dan kelambatan. Juga sikap pesimis dan bisa hanya sedikit hal-hal yang dicapainya. Tidak perlu dijelaskan lagi bahwa mereka dengan angka ini, jika sisi negatifnya yang lebih dominan, tidak cocok dalam dunia bisnis dan walau karakter positifnya menonjol sekalipun, mereka lebih suka dalam lingkungan yang akrab dan kurang kompetitif.</p>`
            },
            3: {
                judul: "Tanggal Lahir Anda Berada Pada Garis Hidup 3",
                isi: `
                    <p>Bagi mereka yang jumlah angka hari lahirnya 3, ekspresi, sosialisasi, dan kreativitas sebagai pelajaran yang harus ditempuh dalam hidupnya. Entertainer kelas dunia, orang-orang yang berkilau dan optimistik termasuk di dalamnya. Orang orang dengan garis hidup 3 yang telah mengasah bakatnya mempunyai bakat kreatif yang istimewa, biasanya dalam verbal, tulisan, akting, atau semacamnya. Misi yang harus dicapainya dalam hidup adalah kesuksesan dalam berekspresi. Sisi cerah bagi orang-orang ini bertema harmoni, keindahan dan kesenangan, serta membagi kemampuan kreatif Anda dengan dunia. Mengasah kemampuan Anda dalam ekspresi kreatif adalah misi tertinggi bagi angka garis hidup ini.</p>
                    <p>Karakter mereka hangat dan bersahabat, pembicara yang baik, social dan terbuka. Pembicara yang trampil dalam arti bukan hanya seseorang yang menyenangkan untuk didengar, tapi lebih penting lagi, seseorang yang mampu untuk mendengarkan. Mereka adalah individu-individu yang selalu diterima dengan baik dalam setiap situasi sosial, dan juga mengerti bagaimana membuat orang lain merasa diterima. Potensi imajinasi kreatif selalu ada, walaupun bisa berupa hal yang laten, karena mereka tidak selalu tergerak untuk mengembangkan potensi ini.</p>
                    <p>Sikapnya melihat kehidupan hampir selalu positif, dan pembawaannya riang dan terbuka. Anda bisa menghadapi banyak halangan dalam hidup dengan efektif dan langsung kembali bersemangat. Anda mempunyai tata krama yang baik dan tampaknya cukup peka akan perasaan dan emosi orang lain. Hidup dijalani sepenuhnya, seringkali tanpa kekhawatiran akan hari esok. Anda tidak terlalu pandai menangani perihal keuangan karena tidak menganggap penting hal itu. Uang akan dibelanjakan saat Anda punya, dan tidak dikeluarkan saat Anda tidak ada uang.</p>
                    <p>Sisi negatifnya, sikap mereka dalam hidup bisa sangat ringan sampai membuatnya jadi superfisial. Kemampuan Anda seringkali tersebar dan jadi kehilangan fokus. Mereka dengan angka garis hidup 3 ini adalah teka-teki, dan Anda seringkali berganti mood dan cenderung menghindar. Sulit bagi Anda untuk menetap di satu tempat. Jaga agar tidak selalu mengkritik orang, tidak sabaran, ataupun terlalu optimistik.</p>
                    <p>Garis hidup 3 ini memberikan kemampuan di atas rata-rata dalam seni. Baik melukis, disain interior, lansekap, menulis, musik, teater, ataupun mampu seluruhnya. Anda selalu gembira, penuh inspirasi, dan selalu mencari stimulasi dari orang-orang yang sealiran. Sifat Anda yang ramai itu mendukung Anda untuk bisa melesat, apalagi jika Anda mampu memfokuskan energi dan talenta Anda pada minat yang tepat.</p>`
            },
            4: {
                judul: "Tanggal Lahir Anda Berada Pada Garis Hidup 4",
                isi: `
                    <p>Bila jumlah angka dalam ulang tahun Anda 4, berarti Anda bisa dipercaya, praktis, dan membumi. Anda adalah anggota masyarakat yang bisa diandalkan. Misi dalam hidup adalah belajar untuk mendapat perintah-perintah atau tugas dan melaksanakannya dengan dedikasi dan keuletan.</p>
                    <p>Anda selalu mengharap banyak dari diri sendiri sama seperti Anda mengharap banyak dari orang lain. Sebagai organisator dan perencana yang hebat karena kemampuan Anda melihat persoalan dengan cara praktis, Anda mempunyai kemauan kuat yang seringkali disalahtafsirkan sebagai sifat keras kepala. Sekali sebuah keputusan dibuat, akan langsung dilanjutkan sampai mencapai konklusi, walaupun itu salah, benar, ataupun netral. Pola pikir Anda tidak mudah untuk berubah dan begitu yakin dalam cara Anda menangani persoalan. Cara Anda yang ulet dalam mencapai tujuan hampir seperti obsesi. Setia dan mengabdi, Anda merupakan pasangan ideal dalam kehidupan perkawinan dan juga partner bisnis yang bisa diandalkan. Mungkin tidak banyak teman-teman Anda, tapi sangat erat dan sekali bersahabat biasanya sepanjang hidup.</p>
                    <p>Garis hidup 4 ini berhubungan dengan elemen bumi yang memberikan kekuatan dan perasaan realistis. Jika kesabaran dan kegigihan merupakan sifat Anda sehari-hari, maka kesuksesan besar akan didapatkan dalam hidup. Sisi negatif dari 4 ini adalah sikap yang terlalu dogmatis, berpandangan sempit, dan represif atau tidak fleksibel terhadap gagasan baru. Anda tidak suka pada orang-orang yang superfisial, dan Anda sendiri terlalu terbuka dengan semua perasaan Anda. 4 yang negatif punya kecenderungan buruk untuk terlibat terlalu dalam dengan rutinitas sehari-hari dan sering kurang tanggap dengan hal-hal yang lebih luas sehingga tidak jarang kehilangan banyak kesempatan besar yang sekali-sekali datang.</p>`
            },
            5: {
                judul: "Tanggal Lahir Anda Berada Pada Garis Hidup 5",
                isi: `
                    <p>Minat dan kemampuannya banyak, petualang, dan progresif adalah beberapa gambaran bagi mereka yang angka garis hidupnya 5. Sebaliknya dari 4, Anda tidak menyukai rutinitas, sehingga pekerjaan sehari-hari yang harus langsung diselesaikan bukan untuk Anda. Selalu berusaha mencari jawaban bagi misteri kehidupan, Anda ingin selalu bebas, independen, dan tidak ada ikatan. Orang-orang dengan garis hidup 5 ini adalah komunikator hebat, dan tahu bagaimana memotivasi orang lain. Hal ini membuat Anda guru yang baik.</p>
                    <p>Cinta akan petualangan merupakan tema hidup Anda. Bisa dalam bentuk nyata ataupun hanya dalam pikiran. Apapun itu, Anda selalu antusias untuk mengeksplorasi hal-hal baru. Banyak potensi Anda, tapi tidak mempunyai arah. Juga seringkali tidak jelas akan keinginan Anda sendiri.</p>
                    <p>Energi yang ada dalam angka garis hidup 5 ini, jika digunakan secara salah menjadikan Anda tidak mempunyai rasa tanggung jawab dalam tugas maupun pengambilan keputusan dalam kehidupan rumah tangga maupun bisnis. Kesukaan pada sensasi dan petualangan bisa menjadikan diri Anda mengutamakan kepuasan diri dan tidak peka pada perasaan orang-orang di sekitar Anda. Bagi mereka yang berada di titik ekstrim negatif, angka garis hidup 5 ini sangat tidak bisa diandalkan dan menomorsatukan diri sendiri.</p>
                    <p>Bagi sebagian besar, kepribadian ini sangat hedonis, suka bersenang-senang, hidup untuk hari ini, dan tidak mau memikirkan esok hari. Penting bagi Anda untuk bergaul dengan orang yang mempunyai selera dan pola pikir yang tidak jauh berbeda, serta hindari orang-orang serius dan banyak menuntut. Juga penting untuk memilih pekerjaan yang menantang pikiran Anda dan bukannya tugas-tugas yang rutin. Karir terbaik adalah yang berurusan dengan banyak orang, tapi yang terpenting adalah Anda harus punya kebebasan untuk mengekspresikan diri Anda setiap saat.</p>`
            },
            6: {
                judul: "Tanggal Lahir Anda Berada Pada Garis Hidup 6",
                isi: `
                    <p>Sangat berbeda dengan nomer 5, karakter garis hidup 6 yang paling menonjol adalah rasa tanggung jawab yang besar. Anda idealis, dan bahagia jika berguna bagi orang lain. Sumbangan terbesar yang Anda berikan dalam kehidupan ini adalah memberikan advis, pelayanan dan dukungan. Garis hidup ini temanya adalah kepemimpinan karena kemampuannya dalam memberi teladan dan kesediaan untuk bertanggung jawab. Hal ini menjadikan Anda selalu bersedia menanggung beban kelompok dan siap untuk menolong.</p>
                    <p>Anda seringkali terdorong untuk bertindak dengan kekuatan dan belas kasihan. Anda simpatik, dan senang berbagi dengan orang lain, baik membantu dalam hal mental maupun materi. Kebijaksanaan, keseimbangan, dan pengertian adalah beberapa karakter Anda. Kemampuan Anda memahami masalah orang lain, dan ini sudah menjadi karakter Anda sejak kecil, sehingga tidak ada masalah dalam berhubungan dengan orang tua maupun muda. Anda bersedia untuk mengeluarkan tenaga lebih dari yang diminta, dan selalu bisa diandalkan oleh keluarga. Realistis memandang hidup, bagi Anda yang terpenting dalam hidup adalah rumah, keluarga dan teman-teman. Tentu ada sisi negatif pada tiap orang, bagi garis hidup 6 ini, Anda harus menghindari kecenderungan terlalu banyak menerima tanggung jawab dan diperbudak oleh orang lain. Selain itu, hindari terlalu banyak mengkritik diri sendiri maupun kepada orang lain).</p>
                    <p>Jika karakter buruknya terpupuk, maka ada kecenderungan untuk berlebih-lebihan, dan merasa paling benarsendiri, walaupun tidak selalu berkembang seperti ini. Juga harus dihindari, memaksakan pendapat sendiri dan mengurusi masalah orang lain. Karena selalu merasa harus bertanggung jawab, maka beban yang dibawanya akan terasa sangat berat, walaupun begitu, jika sekali-sekali Anda terpaksa tidak merasa bertanggung jawab, Anda akan sangat merasa bersalah dan akan memberi dampak yang merusak bagi hubungan dengan orang lain.</p>`
            },
            7: {
                judul: "Tanggal Lahir Anda Berada Pada Garis Hidup 7",
                isi: `
                    <p>Mereka yang angka garis hidupnya 7, berjiwa damai dan penyayang, tapi analitis dan tidak terlalu terbuka. Kekuatan hebat dalam diri Anda terlihat pada dalamnya cara berpikir, Anda selalu mengumpulkan pengetahuan baru dalam setiap hal yang Anda temukan. Seorang ntelektual, ilmiah, dan selalu mencari ilmu, Anda tidak akan menerima begitu saja sebuah pandangan tanpa mengetesnya dan memperoleh konklusi sendiri. Angka ini juga bersifat spiritual dan sejak kecil sudah menunjukkan kebijaksanaan. Anda butuh ketenangan agar bisa mengenali isi hati Anda. Keramaian, banyak orang, bukan hal yang disukai. Dalam bekerja, Anda akan mengerjakannya sampai selesai, karena Anda seorang perfeksionis yang mengharapkan tiap orang memenuhi standar performa yang tinggi. Anda mengevaluasi situasi dengan cepat dan benar.</p>
                    <p>Pengalaman-pengalaman dan intuisi memandu Anda dalam bertindak. Anda tidak mudah percaya pada saran orang lain. Memang dugaan-dugaan Anda seringkali tepat, dan karena Anda tahu benar akan hal ini, Anda selalu mengikutinya. Mudah bagi Anda untuk mengetahui adanya kebohongan dan Anda bisa mengenali mana orang-orang yang jujur, mana yang tidak.</p>
                    <p>Tidak banyak teman Anda, tapi sekali Anda menerima seseorang sebagai teman, itu untuk seumur hidup. Anda sama sekali bukan seseorang yang senang berkumpul dengan orang banyak, dan sikap Anda yang tertutup dianggap sebagai mengambil jarak. Itu tidak benar sama sekali, Anda memang senang menyendiri, jauh dari segala keramaian kehidupan modern. Dalam banyak hal, Anda lebih cocok hidup di jaman yang jauh sebelum masa sekarang.</p>
                    <p>Jika energi angka 7 dalam garis hidup ini digunakan secara negatif, Anda menjadi seorang pesimis, tidak pedulian, mudah berselisih, dan penuh rahasia. Bila individu ini tidak menjalani hidup dengan benar dan tidak belajar dari pengalaman, Ia menjadi sebuah pribadi yang sulit karena tidak bisa memikirkan kepentingan orang lain. Kepribadian garis hidup 7 ini egois dan manja. Jika Anda merasa memiliki sifat-sifat ini, sulit untuk menghapusnya dengan mudah karena Anda merasa bahwa sudah seharusnya dunia selalu memperlakukan Anda dengan baik. Untungnya, sifat negatif 7 ini bukanlah karakter yang umum. Emosi angka ini seringkali ekstrim, berada di titik rendah pada satu saat, kemudian tinggi di saat berikutnya. Jarang stabil.</p>`
            },
            8: {
                judul: "Tanggal Lahir Anda Berada Pada Garis Hidup 8",
                isi: `
                    <p>Fokus Anda adalah mendapatkan kepuasan yang didapat dari dunia kebendaan. Garis Hidup 8 adalah orang-orang yang percaya diri, kuat, serta sukses dalam materi. Anda independen, penuh dorongan dan kompetitif. Rutinitas Anda sehari-hari meliputi hubungan-hubungan bisnis, praktis dan membumi, sedikit sekali waktu untuk impian-impian dan khayalan. Bila ambisi, kemampuan organisasi, dan pendekatan Anda yang efisien itu terasah, tidak ada hal yang tidak bisa Anda capai.</p>
                    <p>Fokus Anda kebanyakan mengenai uang dan kekuatan manipulasi yang ada di dalamnya. Garis hidup 8 ini mungkin yang paling menganggap penting status dan kelas, sebagai suatu hal yang berdampingan dengan kesuksesan materi.</p>
                    <p>Jika karakter 8 ini berkembang dengan benar, Anda diberkahi dengan potensi hebat untuk menciptakan gagasan-gagasan yang maju, serta juga keuletan dan kemandirian untuk merealisasikannya. Singkatnya, dengan semua karakter itu Anda sangat siap untuk berkompetisi dalam dunia bisnis atau area lain yang bersifat pertandingan. Anda tahu benar bagaimana mengelola diri dan lingkungan Anda. Praktis dan stabil dalam usaha mencapai tujuan-tujuan, Anda punya keyakinan yang membuat Anda berani Sifat negatif mereka dengan garis hidup 8 kadang-kadang bisa seperti diktator dan seringkali menahan antusiasme dan usaha dari teman- teman di lingkungannya. Juga, kuatnya kepribadian tersebut malah membuat berkurangnya perasaan dekat Anda terhadap orang-orang sekitar.</p>
                    <p>Keuntungan materi dan penghargaan menjadi hal paling penting, sehingga keluarga, rumah, dan kedamaian hati justru terabaikan. Perasaan emosional sering ditekan dalam diri garis hidup 8 yang negatif. Hal ini menimbulkan rasa terasing dan kesendirian. Anda harus mencoba untuk selalu menghargai pendapat orang lain.</p>`
            },
            9: {
                judul: "Tanggal Lahir Anda Berada Pada Garis Hidup 9",
                isi: `
                    <p>Sifat-sifat utama mereka yang angka garis hidupnya 9 adalah: rasa kasih pada sesama dan sikap yang sangat humanis. Ini adalah misi yang harus Anda pelajari dalam hidup. Biasanya angka ini menghasilkan individu yang sangat dipercaya dan pribadi terhormat, juga seorang individu yang tidak punya sifat rasialis dalam bentuk apapun. Tentu saja, semua ini terlihat seperti daftar sifat yang terlalu sempurna, tapi Anda memang seseorang yang berperasaan peka bagi mereka yang kurang beruntung dibandingkan diri Anda. Dan jika Anda ada dalam posisi yang bisa membantu, akan Anda lakukan. Anda sangat peka dan memandang sekitar diri Anda dengan rasa kasih. Anda dengan angka garis hidup yang tertinggi ini berada pada posisi kehidupan yang tinggi dan dengan sendirinya mempunyai banyak tanggung jawab.</p>
                    <p>Tujuan hidup garis hidup 9 ini bersifat filosofis. Hakim, pemimpin spiritual, penyembuh dan pendidik, seringkali mempunyai energi 9 ini.</p>
                    <p>Keuntungan materi tidak terlalu penting, walaupun kualitas kepribadian beberapa dari Anda sedemikian istimewanya sehingga menghasilkan penghargaan secara materi yang luar biasa. Untuk kebaikan banyak orang, Anda seringkali harus bersikap tidak mengutamakan diri sendiri dan melepaskan hal-hal kebendaan. Bahkan orang-orang bergaris hidup 9 yang tidak terlalu istimewa saja memiliki pribadi yang sangat berbelas kasih. Keinginan untuk menolong orang, khususnya yang bermasalah dan kurang beruntung, sangat kuat. Kebaikan Anda juga sering disalahgunakan dan Anda juga tidak jarang dikecewakan oleh orang lain.</p>
                    <p>Pemahaman Anda yang dalam terhadap kehidupan terkadang terealisasi dalam bentuk seni dan literatur. Dengan garis hidup ini Anda sanggup mengekspresikan perasaan emosi terdalam dengan melukis, menulis, musik, atau bentuk seni yang lain. Tapi sering juga ada kesulitan untuk menemukan media yang tepat sebagai jalan hidup Anda. Profesi menolong dan menyembuhkan adalah pilihan yang tepat bagi mereka dengan angka garis hidup 9. Anda kurang tepat untuk berada dalam lingkungan bisnis yang kompetitif. Anda punya kemampuan untuk berteman dengan mudah, karena orang-orang tertarik pada kepribadian Anda yang terbuka dan seperti magnet. Anda diberi berkah oleh Tuhan berbentuk kemampuan untuk memahami orang, yang jika digunakan dengan benar bisa sangat bermanfaat bagi orang lain. Perhatian pada orang lain membuat diri Anda sangat sosial. Orang-orang dengan mudahnya menyukai mereka dengan angka garis hidup 9 karena Anda simpatik, toleran dan berwawasan luas. Anda seorang romantis dan dalam cinta dan gairah, bagaikan tersesat di jalan yang benar.</p>`
            }
        };

        let setDataGarisHidup = dataGarisHidupLengkap[angkaGarisHidup];

        if (setDataGarisHidup) {
            kontenHtml = `
                <h2 class="teks-disorot" style="font-weight: bold; margin-bottom: 20px;">${setDataGarisHidup.judul}</h2>
                <div class="isi-deskripsi" style="margin-left: 40px; text-align: justify; line-height: 1.6;">
                    ${setDataGarisHidup.isi}
                </div>
            `;
        } else {
            kontenHtml = `<h4 style="margin-left: 40px;">Data tidak ditemukan</h4>`;
        }

        $("#teksArti").hide().html(kontenHtml).fadeIn(500);
    }
});