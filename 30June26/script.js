      
        // let arr = [ 56,43,45,43]
        //   let arr1 = [54,34]
        //     let arr2 = [...arr, ...arr1, 70,90]
        //     let sum = arr2.reduce((acc,val)=> {
        //         return acc+val
        //     },0)
            
        //                     let ans = sum/arr2.length


        //     console.log(ans);
            

        //  let arr = [ 54,67,54,44,44,44]
        //   let ans = [...new Set(arr)]
        //   let sum = ans.reduce((acc,val)=> acc+val,0)
        //   let average = sum / ans.length
        //   console.log(average);
         
         //   let arr = [ 1,2,3,4,5,6]

         //   let ans = arr.reverse().join("")

         //   console.log(ans)


        //    let str = "love you brother "
        //     let ans = str.split(" ").map((val)=> val.charAt(0).toUpperCase()+val.slice(1)).join(" ")
        //     console.log(ans);
            


         // let str = "my name is sourabh saini kotputli jaipur";
         //  let res = str.split(" ").map((val)=> val.charAt(0).toUpperCase(0)+val.slice(1)).join(" ")
         // console.log(res);
         


         // let str = "sourab saini"

         // let ans = str.split("").filter((ch)=> ch==="a").length
         // console.log(ans);


         // let str = "sourabh saini kotputli jaipur rajasthan ajmer delhi ahmedabad"

         // let ans = str.split("").filter((ch)=> "a,e,i,o,u".includes(ch)).length 
         // let avg = ans/ str.length
         // console.log(avg);
         
//  string number me se number or vowel consont niklana 

         //   let str = "teterrer12323223"
         //   let ans = str.split("").filter((val) => val >"a" && val<"z")
         //       let sum = ans.filter((ch) => "a,e, i, o, u".includes(ch)).length
         //   console.log(sum);
           

         //   let arr = [34,54,33,45]
         //    let arr1 = [56,43,54]
         //    let arr2  = [...arr,...arr1]   // shallow copy 
         //    arr[0] = 12
         //    arr1[0] = 11
         //    console.log(arr)
         //    console.log(arr1)
         //    console.log(arr2);

            let students = [
  {
    id: 1,
    name: "Rahul",
    age: 21,
    city: "Jaipur",
    marks: 85,
    course: "MERN",
    isActive: true
  },
  {
    id: 2,
    name: "Aman",
    age: 19,
    city: "Delhi",
    marks: 72,
    course: "Java",
    isActive: false
  },
  {
    id: 3,
    name: "Sourabh",
    age: 22,
    city: "Kotputli",
    marks: 91,
    course: "MERN",
    isActive: true
  },
  {
    id: 4,
    name: "Rohit",
    age: 20,
    city: "Ajmer",
    marks: 66,
    course: "Python",
    isActive: true
  },
  {
    id: 5,
    name: "Mohit",
    age: 23,
    city: "Jaipur",
    marks: 78,
    course: "Java",
    isActive: false
  },
  {
    id: 6,
    name: "Ankit",
    age: 24,
    city: "Delhi",
    marks: 95,
    course: "MERN",
    isActive: true
  },
  {
    id: 7,
    name: "Deepak",
    age: 18,
    city: "Alwar",
    marks: 58,
    course: "Python",
    isActive: false
  },
  {
    id: 8,
    name: "Neha",
    age: 21,
    city: "Jaipur",
    marks: 88,
    course: "React",
    isActive: true
  },
  {
    id: 9,
    name: "Pooja",
    age: 22,
    city: "Udaipur",
    marks: 81,
    course: "MERN",
    isActive: true
  },
  {
    id: 10,
    name: "Karan",
    age: 20,
    city: "Delhi",
    marks: 69,
    course: "React",
    isActive: false
  }
];

// Sab students ke names print karo.


//  let ans = students.map((val)=> val.name)
//    console.log(ans);
   
// Sirf Jaipur ke students nikalo.

   //   let ans = students.filter((val) => val.City === "jaipur")
   //   console.log(ans);
     

// Marks 80 se upar wale students nikalo.
   // let ans = students.filter((val) => val.marks > 80)
   //   console.log(ans);
     

// Sirf active students nikalo.

   //   let ans = students.filter((val)=> val.isActive===true)
   //   console.log(ans);
     
// Sabke marks me 5 number add karo.
         //   let ans = students.map((val)=>{
         //     return {
         //       ...val, marks: val.marks+5
         //     }
         //   })
         //   console.log(ans);
           
// Sab students ke marks ka total nikalo.
   //   let ans = students.reduce((acc,val)=> {
   //    return acc + val.marks;
           
   //   },0)
   //       console.log(ans);
    
     
// Average marks nikalo.
   //   let ans =  students.reduce((acc, val) =>{
   //    return acc + val.marks
      
   //   },0)
   //   let average = ans/students.length
   //   console.log(average);
     
// MERN course wale students nikalo.
   //  let ans = students.filter((val)=> val.course === "MERN")
   //  console.log(ans);
    

// Sab cities ka array banao.

//   let ans = students.map((val)=> val.city)
//   console.log(ans);
  
// Sabse zyada marks kis student ke hain?
//  let ans = students.reduce((acc,val)=> {
//    if(val.marks>acc.marks){

//    }
//    return acc
//  })
//  console.log(ans)


// let  ans = students.filter((val)=> val.age  >= 21)
// console.log(ans)
//  let ans = students.filter((val)=> val.city === "Delhi" || val.city === "Jaipur")
//  console.log(ans);
            
         