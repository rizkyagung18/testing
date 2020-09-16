const getMonth = (callback) => {
    setTimeout(() => {
        let error = true;
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        if(!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000)
}

getMonth((err, res) => {
    try {
        const data = res.map(item => {
            return item
        })

        if(data.length == 0) {
            console.log('Data kosong')
            return false
        }

        console.log(data)
    } catch(error) {
        console.log(err.message)
    }
})
