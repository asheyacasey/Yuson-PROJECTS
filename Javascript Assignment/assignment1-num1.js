function find(arr) {
    if (arr.some(num => `${num}`.includes('7'))) {
       return "!!!!!"
    } 
   return "there is no 5 in the array"
 }
 
 console.log(find([2, 55, 60, 97, 86]))
 console.log(find([8, 6, 33, 100]))
 console.log(find([1, 2, 3, 4, 5, 6, 7]))
 