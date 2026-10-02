// fetch("https://jsonplaceholder.typicode.com/users")

const { log } = require("console");

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

// let employee = {
//   name: "Sourabh",
//   age: 26,
//   city: "Jaipur",
//   salary: 50000,
//   skills: ["HTML", "CSS", "JavaScript", "React"],
//   address: {
//     state: "Rajasthan",
//     pincode: 302018,
//   },
// };

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

// Arrays questions for practice

//        1. Find the largest number in an array.
//   let arr = [ 12,3,45,67,89,90]
//   let ans = Math.max(...arr)
//    console.log(ans)
// 2. Find the smallest number in an array.
//  let arr = [12,34,54,1]
//   let ans = Math.min(...arr)
//   console.log(ans)
// 3. Find the sum of all elements in an array.
//    let arr =[ 12,43,54,33,67]
//       let ans = arr.reduce((acc,val)=> {
//             return acc+val
//       },0)
//         console.log(ans)

// 4. Find the average of array elements.
//  let arrr = [ 22,54,67,89]
//   let ans = arrr.reduce((acc,val)=> acc+val,0)
//    let average =  ans/arrr.length
//      console.log(average)

// 5. Reverse an array without using reverse().

// 6. Reverse an array using reverse().
//  let arr = [ 1,2,3,4]
//   let ans = arr.reverse()
//    console.log(ans)
// 7. Find the second largest number in an array.
// let arr = [1,2,3,4,5]
//  arr.sort((a,b)=> b-a)
//     console.log(arr[1])
// 8. Find the second smallest number in an array.
// let arr = [1,2,3,4,5,6]
//  arr.sort((a,b)=> a-b)
//     console.log(arr[1])
// 9. Remove duplicate elements from an array.
//   let arr = [ 1,22,3,4,55,6,7,6,7]
//    let ans =[...new Set(arr)]
//       console.log(ans)

//     10. Check if an array contains a specific value.
//    let arr = [ 12,43,60]
//     let value =  43
//      console.log(arr.includes(value))
// 11. Count even and odd numbers in an array.
//  let arr = [1,2,3,4,5,6]
//   let even = 0;
//   let odd = 0;
//   for( let i = 0; i<arr.length; i++){
//      if(arr[i]%2===0){
//          even++
//      }else{
//         odd++;
//      }
//   }
//    console.log(even,odd)
// 12. Find the maximum occurring element in an array.

// 13. Find missing number in an array from 1 to N.
// 14. Merge two arrays.
// 15. Merge arrays and remove duplicates.
// 16. Find intersection of two arrays.
// 17. Find union of two arrays.
// 18. Find the first non-repeating element in an array.
// 19. Find the first repeating element.
// 20. Move all zeros to the end of the array.
//    let arr = [1,-1,20,3-32,0,4,0];
//     let res = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     res.push(arr[i]);
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= 0) {
//     res.push(arr[i]);
//   }
// }
// console.log(res);

// bubble sorted array question
//            let arr = [5, 2, 8, 1, 3];

// for (let i = 0; i < arr.length; i++) {

//     for (let j = 0; j < arr.length-1; j++) {

//         if (arr[j] > arr[j + 1]) {

//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;

//         }
//     }
// }

// console.log(arr);






    // let arr = [ 32,23,45,65,76,76,89]
    //  let res = [...new Set([...arr,...arr])]
    //    console.log(res)



      // let arr = [ 12,12,54,67,67]
        
      //   for(let i = 0; i<arr.length; i++){
      //      for( let j = i+1; i<arr.length; j++){
      //        if(arr[i]===arr[j]){
      //         console.log(arr[i])
      //        }
      //      }
      //   }
                  