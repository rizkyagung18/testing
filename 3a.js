const jackpot = () => { 
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const random = Math.random() * 10
        const hadiah = ['sepatu', 'hoodie', 'macbook']
        if(random > 7) {
            resolve(hadiah)
        } else {
            reject(new Error("Unfortunately, no gift"))
        }
    }, 3000)
  })
}

jackpot()
 .then((hadiah) => {
    hadiah[hadiah.length-1] = "dan " + hadiah[hadiah.length-1]
    console.log(`Selamat anda mendapatkan hadiah berupa ${hadiah.join(", ")}`)
})
 .catch((err) => {
    console.log(err.message)
})

const faker = (url, opt) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const req = {
                '/users': [
                    {
                        id: 1,
                        name: 'Pak Soleh',
                        age: 35,
                        city: 'Jakarta',
                        covid19: true
                    },
                    {
                        id: 2,
                        name: 'Arung',
                        age: 30,
                        city: 'Bandung',
                        covid19: false
                    },
                    {
                        id: 3,
                        name: 'Hamzah',
                        age: 24,
                        city: 'Tangerang',
                        covid19: false
                    },
                    {
                        id: 4,
                        name: 'Rikara',
                        age: 20,
                        city: 'Jakarta',
                        covid19: true
                    },
                    {
                        id: 5,
                        name: 'Ucup',
                        age: 20,
                        city: 'Bay Area',
                        covid19: false
                    }
                ],
                '/movies': [
                    {
                        id: 101,
                        title: 'Ikan Hiu Makan Tomat',
                        rating: 7.95
                    },
                    {
                        id: 102,
                        title: 'Cinta Tyranosaurus',
                        rating: 8.5
                    },
                    {
                        id: 103,
                        title: 'Ada Apa Dengan Coding',
                        rating: 9
                    }
                ]
            }
            const datas = req[url]
            if(opt) {
                const data = req[url].map(item => item[opt]) 
                if(data.some(item => item == undefined)) {
                    reject({ status: 404, message: 'DATA NOT FOUND!!'})
                } else {
                    resolve(data)
                }
            }
            if(datas) {
                resolve(datas)
            } else {
                reject({ status: 404, message: 'DATA NOT FOUND!!'})
            }
        }, 3000);
    })
}

faker('/movies', 'title')
 .then(data => {
     console.log('Congrats you got a data')
     console.log(data)
 })
 .catch(err => {
     console.log(`Error Status: ${err.status}`)
     console.log(err.message)
 })