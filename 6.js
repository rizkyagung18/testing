const divideAndSort = num => {
    if(typeof num !== 'number') {
        return
    }
    const convert = num.toString()
    const arr = convert.split('0')

    const sorted = arr.map(item => {
        return item.split('').sort().join('')
    })

    const hasil = sorted.join('')

    return parseInt(hasil)
}

console.log(divideAndSort(5956560159466056))