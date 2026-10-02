    



       
    //    let obj = {
    //     name: "sourabh",
    //     age: 54,
    //     pincode: 98768,
    //      address: {
    //     city: "ajmer",
    //     role: "rajasthan",
       
    //        }
    //    }

    //   console.log(Object.entries(obj));
   
    //    console.log(obj.address.city)


    //    let obj1 = {...obj} // shallow copy
    //    let obj2 = structuredClone(obj) // deep copy 
    //    obj.address.city = "alwar"
    //    console.log(obj)
    //    console.log(obj2)



  
//     obj1 =  {a: 4}
//      obj2 = { b:6}
   

//   let ans = Object.assign({}, obj1,obj2)
//   console.log(ans)



//    let timer = setInterval(() => {
//     for(let i = 10; i>=0; i--){
//         console.log(i)
//         if(i<0){
//             clearInterval(timer)
//         }
//     }
//   },2000)
             
        //  let a  = 20;
        //  let abc = setInterval(() => {
        //       a--;
        //       console.log(a)
        //       if(a<0){
        //         clearInterval(abc)
        //       }
        //  },2000)

//    let str = "hello";
//     let ans = str.split(" ").map((val)=> val.charAt(0).toUpperCase()+val.slice(1)).join(" ")
//     console.log(ans)


    

// let str = "mangoaga"
// let ans = str.split("").filter((ch) => ch==="a").length;
// console.log(ans)  
     
//    let str = "sourabheijkle"
//    let ans = str.split("").filter((ch) => "aeiou".includes(ch))
//    console.log(ans)

      
// let str = "ramaadfda";
// let ans = str.split("a").map((ch)=> ch.includes(ch)).length-1

// console.log(ans)


    //   let str = "jdgjsdkfdlkdgkldg"
    //   let ans = str.split().reduce((acc,val)=> acc+val,0).length
    //   console.log(ans)


        //    let str = "hdfdlkg"
        //    let ans = str.split("").reverse()
        //    console.log(ans)




        // a count in string
        
            //    let str = "fdkfjdkfffff"
                
            //    let ans = str.split("").filter((ch) => ch==="f").length
            //    console.log(ans)
      
               
    // let str = "aaadbbbjgcc"
    //  let ans = [...new Set(str)].join("")
    //  let sum = 
    //  console.log(ans)

//    let str = "hello sourabh learning javascdript"
//    console.log(str.replaceAll(" ","-"))


        //    let str = "javascript"
        //    console.log(str.startsWith("java"));
           


        //       let obj = {
        //         name: "suresh kumar pareek",
        //         age: 45,
        //         state: "Rajasthan",

        //         address: {
        //             city: "jaipur",
        //             mobile: 6454454545
                   
        //         }
                 
        //       }

         
        //       // shallow copy of obj
        //       obj.capital = " lakhnow"
        //  let obj2 = structuredClone(obj)
        //   obj.address.city = "delhi"
        //   console.log(obj2)
           
              
        // let obj = {
        //     name:" Raghav vaishanv",
        //     age: 54,
        //     address: {
        //         city: "tonk phatak",
        //     }
        // }

        // console.log(Object.entries(obj))
      

        //   let obj1 = {a: 45}
        //   let obj2 = {b:56}
        //     let ans = Object.assign({}, obj1, obj2)
            
        //     console.log(ans);
         

        //  let obj = {name: "ram"}
        //  Object.seal(obj)

        //  obj.age = 54,   // add nhe hoga
        //  delete obj.name
        //  obj.name = "sourabh",

        //  console.log(obj);
         //   esme add delte nhe kar sakte hai esme update kar sakte hai 

        //    let obj = {
        //     name: "ramesh"

        //    }

        //    Object.preventExtensions(obj)
        //    obj.age = 56
        //    delete obj.name
        //   console.log(obj)
        // prevent me hum add nhe kar sakte update  kar sakte hai delete kar sakte hai 
         
        
         