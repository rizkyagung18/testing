function palindrome(teks) {
  if(typeof teks !== 'string') {
    return "teks harus string"
  }

  teks = teks.toLowerCase()
  let balik = ""
  for (let i = teks.length - 1; i >= 0; i--) {
    balik += teks[i]
  }

  if (teks === balik) {
    return "Palindrome"
  } else {
    return "Bukan Palindrome"
    }
}
  
console.log(palindrome("Malam"))
  