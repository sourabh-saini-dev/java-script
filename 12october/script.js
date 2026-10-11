// let p = new Promise((resolve, reject)=> {
//     resolve("my task is done")
// })
// console.log(p);

//  let p = new Promise((resolve , reject)=>{
//     let a = 10
//     if(a){
//         resolve("the code is done from me")
//     }else{
//         reject("code is not done from  me")
//     }
//  })

//  p.then((res)=> {
//     console.log(res)

//  })
//  p.catch((err)=>{
//     console.log("err")

//  })
// p.finally(()=>{
//     console.log("finally")

//  })
//  console.log(p)

// let p = new Promise ((resolve, reject)=>{
//       let a = 12
//       if(a==a){
//          resolve("success")
//       }else{
//          reject("code not success")
//       }
// })

// p.then((res)=> console.log(res)).catch((err)=> console.log("err")).finally(()=> console.log("finally"))

// console.log(p)

//   1.      Promise.resolve("success")
//         Promise.resolve("success").then((res)=> console.log(res))

//  3

//   let p = Promise.resolve("hello")
//   let p1 = Promise.resolve("ram")

//   let p2 = Promise.resolve("ram1")

//   Promise.all([p,p1,p2]).then((res)=> console.log(res)).catch((err)=> console.log("err"))

//    //  promise.all me sare promise resolve hone chahiye ek b reject hua to ek b nhe chlega err dega fir ye

// 4   esme sare promise resolve hote hai chahe wo fir resolve ho ya fir reject

//  let a =   Promise.resolve  ("1")
//   let b =   Promise.resolve  ("2")
//   let c =   Promise.reject ("4")

//   Promise.allSettled([a,b,c]).then((res)=> console.log(res)).catch((err)= console.log("err"))

5;
//   promise.race me  jo b promise pahle aayega wo pahle resolve hoga

//   let a =  Promise.resolve("1")
//   let p = Promise.resolve("4")
//   let w = Promise.resolve("6")

//    Promise.race([w,a,p]).then((res)=> console.log( "res",    res)).catch((err)=> console.log("err", err))

// 6.
//     let a = Promise.reject ("my sourab")
//      let b = Promise.reject("myhhfh sourab")
//       let c = Promise.resolve ("my qqqsourab")

//       Promise.any([b,a,c]).then((res)=> console.log(res)).catch((err)=> console.log("err"))

//  JSON      eska use data ko store karne ke liye kia jata hai ek client se dusre client ya server se data ko exchange karna he json hota hai

let obj = {
  name: "jdkjfdkf",
}
//   console.log(obj)

let ans1 = JSON.stringify(obj);
console.log(ans1);

  localStorage.setItem("users", ans1)

  localStorage.removeItem("users")
