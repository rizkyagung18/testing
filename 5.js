function reverseWord(teks) {
    if(typeof teks !== 'string') {
      return "teks harus string!"
    }
      teks += " "
      let arr = [];
      let temp = "";
      for (let i = 0; i < teks.length; i++) {
        if (teks[i] === " ") {
          arr.push(temp);
          temp = "";
        } else {
          temp += teks[i];
        }
      }

      let hasil = "";
      for (let i = arr.length - 1; i >= 0; i--) {
        hasil += arr[i] + " ";
      }

      return hasil
}
  
console.log(reverseWord("Saya Belajar Javascript"));