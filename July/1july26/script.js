
       

    //    let str = " my name is sourabh saini i blong to kotputli jaipur rajasthan ajmer"
    //     let ans = str.split(" ").map((val)=> val.charAt(0).toUpperCase()+val.slice(1)).join(" ")
    //     console.log(ans)

const { log } = require("console")

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

           function abc(){
             return   new Promise(resolve=> {
                resolve("resolved")
             })
           }

           abc().then(res=> console.log(res))