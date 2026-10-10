

      

        
           
            //    let str = "my name is sourabh kumar saini i from kotputli jaipr rajashtan "
            //     console.log(str.toUpperCase())




                
            //    let str1 = "my name is sourabh kumar saini i from kotputli jaipr rajashtan "
            //     console.log(str1.toLowerCase())




            //  let obj = {a: 10} 
            //  let obj1 = {b:20}

            //  let ans =  Object.assign({}, obj,obj1)//  use for merge to array 
            //  console.log(ans)
              

            //   console.log(Object.keys(ans))
            //    console.log(Object.values(ans))


            //    let ans1 = Object.values(ans).map((val)=> val*2)
            //    let avg = Object.values(ans1).filter((val,i)=> val>20)
            //    console.log(avg)



                //   setTimeout(()=>{
                //     console.log("hello")

                //   },2000)


                // let a = 10
                // let id = setInterval(()=>{
                //     a--
                //     console.log(a)
                //      if(a<0){
                //      clearsetInterval(id)
                    
                //      }

                // },1000)           // setInterval function


 
                //    let arr = [ 1,2,3-4,-6, 10]
                //    let ans = arr.some((val, i)=> val <0) 
                //    let ans1 =   arr.map((val,i)=> val+2)
                //     let res = ans1.filter((val,i)=> val%2 !=0)
                //    console.log(res)
                



                //Promise  promise ek object hota hai jo represent karta hai  ek asyncronous code ko jo ki success hoga ya failure


                 // eske 3 status hote hai 

                 //1  pending     
                 //   jab promise start to ho chuka ho par khtam nhe ho chuka to use pending bolte hai


                 //2 fulfilled / resolve

                 //  jab promise poora succesfully code complete ho chuka ho  use  resolve bolte hai


                 //3  reject 

                 //  jab promise poora pura reject ho chuka ho 



                // let p = new Promise((resolve, reject)=>{
                //     resolve(" code successfully done")

                // },)
                // console.log(p)



                let p = new Promise(( resolve , reject)=>{
                       reject(" reject code  with error")
                },)
                  
                p.catch((err)=>{
                    console.log(p)
                })


    













             


            