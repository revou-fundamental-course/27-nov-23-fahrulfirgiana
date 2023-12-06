function hitungLuas() {
  var panjangAlas = parseFloat(document.getElementsByName('panjangAlas')[0].value);
  var tinggi = parseFloat(document.getElementsByName('tinggi')[0].value);

  if (isNaN(panjangAlas) || isNaN(tinggi)) {
    document.getElementById('result').innerText = 'Masukkan nilai yang valid untuk panjang alas dan tinggi.';
  } else {
    var luas = 0.5 * panjangAlas * tinggi;

    // Build the result string with the formula and calculated result
    var resultString = 'Hasil : '+'\n';
    resultString += 'L = 1/2 x ' + panjangAlas + ' x ' + tinggi + '\n';
    resultString += 'L = 1/2 x ' + panjangAlas * tinggi + '\n';
    resultString += 'L = ' + luas;

    // Update the result div with the formatted string
    document.getElementById('result').innerText = resultString;
  }
}

function resetInput() {
  document.getElementsByName('panjangAlas')[0].value = '';
  document.getElementsByName('tinggi')[0].value = '';
  document.getElementById('result').innerText = '';
}

function hitungKeliling() {
  var nilaiSisiA = parseFloat(document.getElementsByName('nilaiSisiA')[0].value);
  var nilaiSisiB = parseFloat(document.getElementsByName('nilaiSisiB')[0].value);
  var nilaiSisiC = parseFloat(document.getElementsByName('nilaiSisiC')[0].value);

  if (isNaN(nilaiSisiA) || isNaN(nilaiSisiB || isNaN(nilaiSisiC))) {
    document.getElementById('result').innerText = 'Masukkan nilai yang valid untuk panjang alas dan tinggi.';
  } else {
    var keliling = nilaiSisiA + nilaiSisiB + nilaiSisiC;

    // Build the result string with the formula and calculated result
    var resultString = 'Hasil : '+'\n';
    resultString += 'K = ' + nilaiSisiA + ' + ' + nilaiSisiB + ' + ' + nilaiSisiC + '\n';
    resultString += 'K = ' + keliling;

    // Update the result div with the formatted string
    document.getElementById('result').innerText = resultString;
  }
}

function resetInputKeliling() {
  document.getElementsByName('nilaiSisiA')[0].value = '';
  document.getElementsByName('nilaiSisiB')[0].value = '';
  document.getElementsByName('nilaiSisiC')[0].value = '';
  document.getElementById('result').innerText = '';
}


