
     

        // fetch("https://jsonplaceholder.typicode.com/users")

const { log } = require("node:console")

        // .then((res)=>  res.json())
        // .then((data)=> {
        //     localStorage.setItem("user", JSON.stringify(data))
        //      console.log("data save successfully")
        // })

        // .catch((err)=> console.log(err))




        //   let arr = [1,2,3,4,,5,6,7,8]
        //     let ans = arr.filter((val)=> val%2 === 0)
        //       console.log(ans)




        // let arr = [1,2,3]
        // let arr1 = [4,5,6]
        //  let arr2 = [...arr,...arr1]
        //   console.log(arr2)




        // let arr = [1,2,,3,4]
        //  let arr1 = [3,4,5,6]
        //  let ans = arr.filter((val)=> arr1.includes(val))
        //    console.log(ans)




        //  let arr = [1,2,3]
        //  let arr1 = [ 3,4,5]
        //   let ans = [ ...arr, ...arr1]
        //     console.log(ans)


               
        // let arr = [5,2,9,-1,3]
         
        //  let ans = arr.sort((a,b)=> b-a)
        //    console.log(ans)

        //  let arr = [1,2,2,3,3,4,4]

        //  let ans = [...new Set(arr)]
        //   let rev = ans.reverse()
        //    let even = rev.filter((val)=> val%2 === 0)

        //    console.log(even)


        // let arr= [3,-1,5,-7,9]
        //  let ans= arr.filter((val)=> val<0)
        //    console.log(ans)


    // let arr = ["name", "age", "city"]
    //   let ans =arr.reduce((acc, val)=> {
    //     acc[val] = null;
    //     return acc
    //   },{})
    //     console.log(ans)

   
        //    let arr = [1,2,3]
        //     let arr1 = [3,4,5]
        //      let ans = [...new Set([...arr, ...arr1])]
        //          console.log(ans)
              
//  longest subarray with sum = k
         
            // let arr = [ 1,2,3,1,1,1,1]
            //      let k = 6;

            //      let maxlength = 0;

            //      for( let i = 0; i<arr.length; i++){
            //           let sum = 0;

            //           for(let j = 0; j<arr.length; j++){
            //              sum = sum+arr[j]
            //               if(sum===k){
            //                   maxlength = Math.max(maxlength, j-i+1)
            //               }
            //           }
            //      }
            //        console.log(maxlength)


// count sumarrays k = 2 
              let arr = [1,1,1]
                let k = 2;

                 let count = 0;

                 for( let i = 0; i<arr.length; i++){
                     let sum = 0; 

                     for( let j = 0; j<arr.length; j++){
                          sum = sum+arr[j]
                            if(sum === k){
                                 count++;
                            }
                     }
                 }
                  console.log(count)
