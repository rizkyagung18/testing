function palindrome(teks) {
  if(typeof teks !== 'string') {
    return "teks harus string"
  }

  teks = teks.toLowerCase()
  const balik = teks.split('').reverse().join('')

  if (teks === balik) {
    return "Palindrome"
  } else {
    return "Bukan Palindrome"
  }
}
  
console.log(palindrome("Malam"))
  