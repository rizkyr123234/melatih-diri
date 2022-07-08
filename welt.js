function wel(arr){
    let hasil =[]
    let largest=0

for(let i= 0;i<arr.length;i++){
  hasil.push( arr[i].reduce((hasilnya,nilaiskrg) => hasilnya + nilaiskrg))
}
const max = Math.max(...hasil);
console.log(max)
}
// wel([[1,5],[7,3],[3,5]])
wel([[1,2,3],[3,2,1]])