function reverseWord(teks) {
    if(typeof teks !== 'string') {
      return "teks harus string!"
    }
    
    const hasil = teks.split(' ').reverse().join(' ')

      return hasil
}
  
console.log(reverseWord("Saya Belajar Javascript"));