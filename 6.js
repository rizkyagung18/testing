const divideAndSort = num => {
    if(typeof num !== 'number') {
        return
    }
    const convert = num.toString()
    const arr = []
    let temp = []
    for (let i = 0; i < convert.length; i++) {
        if(convert[i] == '0') {
            arr.push(temp)
            temp = []
        } else {
            temp.push(convert[i])
            if(i == convert.length - 1) {
                arr.push(temp)
            }
        }
    }

    const sorted = []
    for(let i = 0; i < arr.length; i++) {
        let sort = arr[i].sort()

        sorted.push(sort)
    }

    let hasil = ""

    for (let i = 0; i < sorted.length; i++) {
        for(let j = 0; j < sorted[i].length; j++) {
            hasil += sorted[i][j]
        }
    }

    return parseInt(hasil)
}

console.log(divideAndSort(5956560159466056))