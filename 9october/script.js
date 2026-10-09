   

    //   let str = "mango"
    //    console.log(str.toUpperCase())
     

        // let arr = [1,2,3,4,5]
        //  let ans = arr.find((val,i)=> val>2)
        //   console.log(ans)



        //   let obj = {
        //      name: "abc",
        //      role: "kotputli",
        //   }

        //   for(let keys in obj){
        //      console.log(keys)
        //   }


            //   let obj = {
            //     name: "jaipur",
            //     city: "abc",
            //     pincode: 689999,

            //     state: {
            //         city: "delhi",
            //         village: "b",
            //     }
            //   }

              


            //    for(let keys in obj){
            //        console.log(keys)
            //    }
               
           
            // console.log(obj.state.city)


            // delete obj.state.city
            // console.log(obj)




            //  object.keys()     obj ki saari keys ko array me deta hai 
            //  let obj = {
            //      name: "abddjkg",
            //      role:    5333,
            //  }

            //  console.log(Object.keys(obj))

            //object.value  obj ki sari values array me deta hai 
            //    let obj = {
            //      name: "abddjkg",
            //      role:    5333,
            //  }

            //  console.log(Object.values(obj))





            //object.entries    ye obj ki keys values pair ko nested array me bdl deta hai

            //      let obj = {
            //      name: "abddjkg",
            //      role:    5333,
            //      city: "kotputli",
            //      role: " makha ladle miau ghop ghop ghop ",
            //  }

            //  console.log(Object.entries(obj))


                 // object.assign   esme obj ko merge karna hota hai 
                
                //  let obj = {a:1}
                //  let obj1 = {b:2}
                //  let ans = Object.assign({}, obj, obj1)
                //  console.log(ans)
                // console.log(Object.keys(obj))
                // console.log(Object.keys(obj1))

                // console.log(Object.values(obj))
                //  console.log(Object.values(obj1))

                //  let ans =  Object.values(obj1).map((val)=> val*2)
                //   console.log(ans)



                
                //  let obj = {a:1}
                //  let obj1 = {b:2}
                 

                //  let ans = Object.assign({}, obj,obj1)

                //  console.log(Object.keys(ans))
                //  console.log(Object.values(ans))


                //  let res = Object.values(ans).map((val)=> val*2)

                // //  let sum = Object.values(res).reduce((acc,val)=> acc+val,0)
                // let sum = Object.values(res).filter((val)=> val>2)
                //   console.log(sum)


        //   object.freeze()  ye obj me value ko lock kar deta hai
                //    let obj = {
                //      name: "sourah",

                //    }

                //    Object.freeze(obj)

                //    obj.name = "seeta",
                // //    delete obj.name  not delete

                // //    obj.name = "akgg",  //not add
                //    console.log(obj);






                // object.seal    esme value ko delete nhe kar sakte add nhe kar sakte but update kar sakte hai


                //   let obj = {
                //     name: " ramu bhai sahab",
                     
                //   }

                //   Object.seal(obj)

                //   obj.name = "sourabh",  // update kar sakte hai
                //   delete obj.name     //delete nhe kar sakte hai
                //   obj.age = 45        // add nhe kar saktee hai 
                //   console.log(obj)
                   





                // object.preventExtension()
                 

                // let obj = {
                //     role:  "dfdgggfg",

                // }

                // Object.preventExtensions(obj)
                //  obj.name = "seeta",    //
                //  delete obj.name
                //  console.log(obj)





                  