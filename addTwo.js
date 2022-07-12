function add(l1, l2) {
    let arr = []
    let arr2 = []
    let arr3 = []
    let hasil
    let jawaban = []
    let final = []
    for (let i = l1.length - 1; i >= 0; i--) {
        arr.push(l1[i])
    }

    for (let i = l2.length - 1; i >= 0; i--) {
        arr2.push(l2[i])
    }

    kestr = arr.join('')

    arr3.push(arr.join(''))
    arr3.push(arr2.join(''))
    let arr4 = []
    for (let i = 0; i < arr3.length; i++) {
        arr4.push(parseInt(arr3[i]))
    }
    hasil = arr4.reduce((hasilnya, nilaiskrg) => hasilnya + nilaiskrg)
    let tostr = hasil.toString()
    for (let i = tostr.length - 1; i >= 0; i--) {
        jawaban.push(tostr[i])
    }
    for (let i = 0; i < jawaban.length; i++) {
        final.push(parseInt(jawaban[i]))
    }
    return final

}
console.log(add([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]))
console.log(add([0], [0]))
console.log(add([2,4,3], [5,6,4]))