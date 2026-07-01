//    let str = " my name is sourabh saini i blong to kotputli jaipur rajasthan ajmer"
//     let ans = str.split(" ").map((val)=> val.charAt(0).toUpperCase()+val.slice(1)).join(" ")
//     console.log(ans)

//const { log } = require("node:console")

//const { json } = require("node:stream/consumers");

//    let str = " abcdaaba"
//     let res = str.split("").filter((ch)=> ch==="a").length
//     console.log(res)

//    let str = " abcdaabartumrfdghj"
//     let res = str.split("").filter((ch) => "a,e,i,o,u".includes(ch))
//     console.log(res)

// let user = {
//      name: "henamt kumar sharma",
//       age: 56,
// }

// localStorage.setItem("name", JSON.parse())
//   let ans = localStorage.getItem("name")

//    console.log(ans)
//     console.log(typeof ans)

//   async  function abc(){
//         return "hello"
//     }
//      let a = abc()
//      console.log(a);
//      a.then(res=> console.log(res)).catch(err => console.log(err))
// async yah normal function ko promise returining function me bnati hai

// await   yah async me use kia jata hai promise resolve hone ka wait karna

//  function abc(){
//    return   new Promise(resolve=> {
//       resolve("resolved")
//    })
//  }

//  abc().then(res=> console.log(res))

const students = [
  {
    id: 1,
    name: "Rahul",
    age: 22,
    city: "Jaipur",
    marks: 85,
  },
  {
    id: 2,
    name: "Priya",
    age: 20,
    city: "Delhi",
    marks: 92,
  },
  {
    id: 3,
    name: "Amit",
    age: 23,
    city: "Jaipur",
    marks: 78,
  },
  {
    id: 4,
    name: "Neha",
    age: 21,
    city: "Mumbai",
    marks: 88,
  },
  {
    id: 5,
    name: "Rohit",
    age: 24,
    city: "Delhi",
    marks: 65,
  },
];
// Questions

// Sabhi students ke name ka array banao.

//  let ans = students.map((val) => val.name)
//     console.log(ans);

// Sirf Jaipur ke students nikalo

//  let ans = students.filter((val)=> val.city==="Jaipur")
//    console.log(ans)

// Jinki marks 80 se jyada hain unhe nikalo.

//  let ans = students.filter((val)=> val.marks > 80)
//       console.log(ans);

// Sabhi students ke marks ka total nikalo.

//  let ans = students.reduce((acc,val) =>{
//   return acc +val.marks
//  },0)
//   console.log(ans);

// Average marks nikalo. (reduce)

//  let ans = students.reduce((acc, val)=> {
//    return  acc+val.marks
//  },0)
//   let average = ans/students.length
//      console.log(average);

// Sabhi students ke marks me 5 marks add karo.

// let ans = students.map((val) => val.marks +5)
//    console.log(ans);

// Rohit ka object find karo. (find)

//  let ans = students.find((val) => val.name === "Rohit")
//  console.log(ans);

// Check karo ki koi student Mumbai se hai ya nahi.
// let ans = students.some((val) => val.city === "Mumbai")
//   console.log(ans);

// Check karo ki sabhi students ke marks 60 se upar hain ya nahi.
//  let ans  = students.every((val)=> val.marks >60)
//    console.log(ans);

// Sirf name aur city ka naya object banao.

//  let ans = students.map((val) => {
//   return {
//     name: val.name,
//     city: val.city,
//   }

//  })
//    console.log(ans);

// Example output:
