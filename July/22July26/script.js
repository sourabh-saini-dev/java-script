const { log } = require("node:console");

let p = new Promise((resolve, reject) => {
    let a = 10;

    if (a) {
        resolve("resolved");
    } else {
        reject("rejected");
    }
});

p.then((res) => {
    console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(()=>{
//      console.log("finally")
// })