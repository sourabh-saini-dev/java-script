       //duplicate element delete by nested array

const { log } = require("node:console")

     
        //  let arr = [1,2,3,2,3,4,5,4]
        //     for(let i = 0; i<arr.length; i++){
        //         for(let j = i+1; j<arr.length; j++){
        //             if(arr[i]===arr[j]){
        //                 console.log(arr[i])
        //             }
        //         }
        //     }

                  
               let arr = [ 3,4,5,]
                let arr1 = [ 3,4,6,7,8]

                 let ans = [...new Set([...arr,...arr1])]
                  let rev = ans.reverse().join("")
                   console.log(rev)