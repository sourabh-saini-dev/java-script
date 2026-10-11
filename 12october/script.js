








    // let p = new Promise((resolve, reject)=> {
    //     resolve("my task is done")
    // })
    // console.log(p);

        
             let p = new Promise((resolve , reject)=>{
                let a = 10
                if(a){
                    resolve("the code is done from me")
                }else{
                    reject("code is not done from  me")
                }
             })
             

             p.then((res)=> {
                console.log(res)

             })
             p.catch((err)=>{
                console.log("err")

             })
            p.finally(()=>{
                console.log("finally")

             })
             console.log(p)


    


  

                   