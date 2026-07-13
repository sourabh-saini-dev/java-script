
     

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
            //   let arr = [1,1,1]
            //     let k = 2;

            //      let count = 0;

            //      for( let i = 0; i<arr.length; i++){
            //          let sum = 0; 

            //          for( let j = 0; j<arr.length; j++){
            //               sum = sum+arr[j]
            //                 if(sum === k){
            //                      count++;
            //                 }
            //          }
            //      }
            //       console.log(count)





            //  let arr = [1,2,3,4,5]
            //    let k = 9;

            //    for( let i = 0; i<arr.length; i++){
            //       let sum = 0; 
            //       for( let j = i; j<arr.length; j++){
            //          sum = sum+arr[j]
            //          if(sum===k){
                       
            //            console.log(arr.slice(i, j+1))
            //         //    break;
            //          }
            //       }
            //    }
               


              // first index find in array 
            //    let arr = [ 1,2,3,4,2,4,2]
            //      let ele = 4;
            //       let firstIndex = -1;
                    
            //        for(let i = 0; i<arr.length; i++){
            //             if(arr[i]===ele){
            //                 firstIndex = i;
            //                 break;
            //             }
            //        }
                
            //          console.log(firstIndex)






// last index findd in array

                //      let arr = [ 1,2,3,4,2,4,2]
                //  let ele = 4;
                //   let lasstIndex = -1;
                    
                //    for(let i = 0; i<arr.length; i++){
                //         if(arr[i]===ele){
                //             lastIndex = i;
                            
                //         }
                //    }
                
                //      console.log(lastIndex)






                //   let arr = [10,20,30,40]
                //    let ele = 30;
                        

                //     let index = -1;
                //       for(let i = 0; i<arr.length; i++){
                //          if(arr[i]===ele){
                //              index = i;
                //              break;
                //          }
                //       }
                //        console.log(index)














     let employee = {
    name: "Sourabh",
    age: 26,
    city: "Jaipur",
    salary: 50000,
    skills: ["HTML", "CSS", "JavaScript", "React"],
    address: {
        state: "Rajasthan",
        pincode: 302018
    }
};



// Name print karo.

  //console.log(employee.name)
// Age print karo.
    //  console.log(employee.age)
// City print karo.

//console.log(employee.city)
// Salary print karo.
     // console.log(employee.salary)
// Skills ka pehla element print karo.
   //console.log(employee.skills.length[0])
// Skills ka last element print karo.
//console.log(employee.skills.length-1)
// Total skills count karo.
    // console.log(employee.skills.length)
// Address ka state print karo.
     //  console.log(employee.address.state)
// Address ka pincode print karo.

    //console.log(employee.address.pincode)
// gender = "Male" add karo.

    // employee.gender = "Male"
    //  console.log(employee)

// Salary update karke 60000 karo.
        // employee.salary = 60000
        // console.log(employee)
// city delete karo.
//   delete employee.city 
//     console.log(employee)
   
// Check karo "age" property exist karti hai ya nahi.
       // console.log(employee.hasOwnProperty("age"))
         
// Object.keys(employee) print karo.
      // console.log(Object.keys(employee))
// Object.values(employee) print karo.
         // console.log(Object.values(employee))
// Object.entries(employee) print karo.
 // console.log(Object.entries(employee))
// for...in loop se sari keys aur values print karo.
//    for(let key in employee){
//          console.log(key, employee[key])
//    }
// Skills me "Node.js" add karo.
    //  employee.skills="Node.js";
    //  console.log(employee)

// Skills se "CSS" remove karo.
// that is wrong because it is my mistake in this 
    // employee.splice(1,1)
    //  console.log(employee)
      
// Employee object clone karo using spread operator.
    //   let newEmployee = {...employee}
    //    console.log(newEmployee)




  

