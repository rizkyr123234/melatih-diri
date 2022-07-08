function pola(str) {
    let jawaban = str.split('=')
    let akhir = []
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (eval(jawaban[0].replace('#', `${i}`)) == jawaban[1].replace('#', `${j}`)) {
                akhir.push(i, j)
            }
        }
    }
    return akhir
}
console.log(pola("42#3 * 188 = 80#204"))
