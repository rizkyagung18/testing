const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

// cekHariKerja("sabtu")
//   .then((res) => {
//     console.log(`Hari ${res} adalah hari kerja`)
//   })
//   .catch((err) => {
//     console.log(err.message)
//   })

(async(day) => {
  try {
    const res = await cekHariKerja(day)
    console.log(`Hari ${res} adalah hari kerja`)
  } catch (err) {
    console.log(err.message)
  }
})('senin')

// Fungsi then dan catch
// then berfungsi untuk melanjutkan proses pada promise apabila resolve berhasil didapatkan
// catch berfungsi untuk menangkap error setelah didapati reject pada promise

// Fungsi try dan catch
// try berfungsi untuk mencoba apakah suatu code berjalan dengan baik atau tidak
// catch berfungsi untuk menangkap error apabila code di dalam try tidak berjalan sesuai ekspektasi alias error