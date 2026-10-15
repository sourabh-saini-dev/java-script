    //   let str = "mango is very sweet"
    //   console.log(str.toLowerCase())




    //   let sourabh = 12;
    //   let p = setInterval(()=>{
    //        sourabh--
    //        console.log(sourabh)
    //        if(sourabh<0){
    //         clearInterval(p)
    //        }
    //   },1000)





          let a = {a : 5}
          let b = {b : 10}
          let ans = Object.assign({}, a, b)
          console.log(ans)

          console.log(Object.keys(ans))
          console.log(Object.values(ans))

          let res =  Object.values(ans).map((val)=> val*4)
         let res1  = Object.values(res).reduce((acc,val)=> acc+val,0)
          console.log(res1)