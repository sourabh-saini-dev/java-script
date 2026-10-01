
   
let employee = {
  id: 101,
  name: "Sourabh Saini",
  age: 25,
  email: "sourabh@gmail.com",
  phone: "9876543210",
  salary: 50000,
  department: "Development",
  isActive: true,
  skills: ["HTML", "CSS", "JavaScript", "React"],
  address: {
    houseNo: 25,
    street: "Tonk Road",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: 302018
  },
  projects: [
    {
      id: 1,
      name: "E-commerce",
      status: "Completed"
    },
    {
      id: 2,
      name: "Chat App",
      status: "In Progress"
    }
  ]
};


// 20 Practice Questions
// Basic
// Object.keys() se saari keys print karo.

 // console.log(Object.keys(employee))

// Object.values() se saari values print karo.

     // console.log(Object.values(employee))

// Object.entries() se key-value pairs print karo.

   //  console.log(Object.entries(employee))

// Total kitni properties hain? (Object.keys().length)
         
      //  console.log(Object.keys(employee).length);
        
// "email" property exist karti hai ya nahi (Object.hasOwn())?
      // console.log(Object.hasOwn(employee,"email"));
       
// Update / Add / Delete
   
// Salary ko 65000 update karo.
//    employee.salary = employee.salary+65000;
//    console.log(employee.salary);
   
  
// "gender" property add karo.
            //  employee.gender = "male"
            //  console.log(employee.gender);
             
// "phone" property delete karo.

//   delete employee.phone
//   console.log(employee.phone);
  
// Nested Object
        
         
// City print karo.
        console.log(employee.address.city);
        
// Pincode print karo.
// State ko "Haryana" update karo.
// Array inside Object
// Sabhi skills print karo.
// Last skill print karo.
// "Node.js" skill add karo.
// Array of Objects
// First project ka name print karo.
// Second project ka status print karo.
// Third project add karo.

// Example:

// {
//   id: 3,
//   name: "Portfolio",
//   status: "Pending"
// }
// Object Methods
// Object.freeze(employee) lagao aur salary change karke dekho.
// Object.seal(employee) lagao aur "country" add karke dekho.
// Object.assign() ya spread operator se employee ki copy banao aur usme name "Rahul" kar do. Original object change nahi hona chahiye.