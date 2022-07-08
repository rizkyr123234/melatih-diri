function two(nums, target) {
    let hasil = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
          
            if ( nums.length>2) {
                if (i == j) { continue }
                if (nums[i] + nums[j] == target) {
                    if (hasil.length == 2) {
                        return hasil
                    }
                    hasil.push(i, j)
                }
            } else if( nums.length==2){
                if (hasil.length == 2) {
                    break
                }
                hasil.push(0,1)
            }


        }
    }
    return (hasil)
}
console.log(two([2, 7, 11, 15], 9))
console.log(two([3, 2,4], 6))
console.log(two([3,3],6))
console.log(two([3,2,3],6))