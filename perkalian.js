function faktorial(num){
    let arr = []
    let hasil
for(let i = num; i>=1;i--){
    arr.push(i)
}
 hasil = arr.reduce((hasilnya,nilaiskrg) => hasilnya *nilaiskrg)
return hasil
}
console.log(faktorial(4))
console.log(faktorial(8))