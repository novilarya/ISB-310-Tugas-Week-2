const warnaBackground = document.getElementById('warna-background');
const warnaTeks = document.getElementById('warna-teks');
const simpanButton = document.getElementById('simpan');
const body = document.body;

simpanButton.addEventListener('click', function(){
    const warnaBackgroundDipilih = warnaBackground.value;
    const warnaTeksDipilih = warnaTeks.value;

    body.style.backgroundColor = warnaBackgroundDipilih;
    body.style.color = warnaTeksDipilih;

    localStorage.setItem('warnaBackground', warnaBackgroundDipilih);
    localStorage.setItem('warnaTeks', warnaTeksDipilih);
});