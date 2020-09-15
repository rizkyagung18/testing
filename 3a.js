const jackpot = new Promise((resolve, reject) => {
    const random = Math.random() * 10
    const hadiah = ['sepatu', 'hoodie', 'macbook']
    if(random > 7) {
        resolve(hadiah)
    } else {
        reject(new Error("Unfortunately, no gift"))
    }
})

jackpot.then((hadiah) => {
    hadiah[hadiah.length-1] = "dan " + hadiah[hadiah.length-1]
    console.log(`Selamat anda mendapatkan hadiah berupa ${hadiah.join(", ")}`)
}).catch((err) => {
    console.log(err.message)
})

