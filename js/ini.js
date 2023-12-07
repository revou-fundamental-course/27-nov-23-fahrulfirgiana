function hitungLuas() {
  var panjangAlasInput = document.getElementsByName('panjangAlas')[0];
  var tinggiInput = document.getElementsByName('tinggi')[0];

  // Cek jika belum ada input
  if (!panjangAlasInput.value || !tinggiInput.value) {
    alert('Masukkan nilai panjang alas dan tinggi.');
    return;
  }

  var panjangAlas = parseFloat(panjangAlasInput.value);
  var tinggi = parseFloat(tinggiInput.value);

  // Cek jika input bukan integer
  if (isNaN(panjangAlas) || isNaN(tinggi) || !Number.parseFloat(panjangAlas) || !Number.parseFloat(tinggi)) {
    alert('Masukkan nilai yang valid untuk panjang alas dan tinggi.');
  } else {
    var luas = 0.5 * panjangAlas * tinggi;

    // Hasil
    var resultString = 'Hasil : '+'\n';
    resultString += 'L = 1/2 x ' + panjangAlas + ' x ' + tinggi + '\n';
    resultString += 'L = 1/2 x ' + panjangAlas * tinggi + '\n';
    resultString += 'L = ' + luas;

    // menampilkan hasil
    document.getElementById('result').innerText = resultString;
  }
}


function resetInput() {
  document.getElementsByName('panjangAlas')[0].value = '';
  document.getElementsByName('tinggi')[0].value = '';
  document.getElementById('result').innerText = '';
}

function hitungKeliling() {
  var nilaiSisiAInput = document.getElementsByName('nilaiSisiA')[0];
  var nilaiSisiBInput = document.getElementsByName('nilaiSisiB')[0];
  var nilaiSisiCInput = document.getElementsByName('nilaiSisiC')[0];

  // cek jika belum ada input
  if (!nilaiSisiAInput.value || !nilaiSisiBInput.value || !nilaiSisiCInput.value) {
    alert('Masukkan nilai sisi A, sisi B, dan sisi C.');
    return;
  }

  var nilaiSisiA = parseFloat(nilaiSisiAInput.value);
  var nilaiSisiB = parseFloat(nilaiSisiBInput.value);
  var nilaiSisiC = parseFloat(nilaiSisiCInput.value);

  // cek jika format tidak sesuai
  if (isNaN(nilaiSisiA) || isNaN(nilaiSisiB) || isNaN(nilaiSisiC)) {
    alert('Masukkan nilai yang valid untuk sisi A, sisi B, dan sisi C.');
  } else {
    var keliling = nilaiSisiA + nilaiSisiB + nilaiSisiC;

    // Hasil
    var resultString = 'Hasil : '+'\n';
    resultString += 'K = ' + nilaiSisiA + ' + ' + nilaiSisiB + ' + ' + nilaiSisiC + '\n';
    resultString += 'K = ' + keliling;

    // Menampilkan hasil
    document.getElementById('resultK').innerText = resultString;
  }
}


function resetInputKeliling() {
  document.getElementsByName('nilaiSisiA')[0].value = '';
  document.getElementsByName('nilaiSisiB')[0].value = '';
  document.getElementsByName('nilaiSisiC')[0].value = '';
  document.getElementById('resultK').innerText = '';
}

function showLuasSegitiga() {
  document.getElementById('luasSegitiga').style.display = 'block';
  document.getElementById('luasContainer').style.display = 'block';
  document.getElementById('kelilingSegitiga').style.display = 'none';
  document.getElementById('kelilingContainer').style.display = 'none';
}

function showKelilingSegitiga() {
  document.getElementById('luasSegitiga').style.display = 'none';
  document.getElementById('luasContainer').style.display = 'none';
  document.getElementById('kelilingSegitiga').style.display = 'block';
  document.getElementById('kelilingContainer').style.display = 'block';
}

