const { log } = require("node:console");


       const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 65000,
    stock: 10,
    rating: 4.7
  },
  {
    id: 2,
    name: "Mobile",
    category: "Electronics",
    price: 30000,
    stock: 20,
    rating: 4.5
  },
  {
    id: 3,
    name: "Shoes",
    category: "Fashion",
    price: 2500,
    stock: 50,
    rating: 4.2
  },
  {
    id: 4,
    name: "Watch",
    category: "Accessories",
    price: 5000,
    stock: 15,
    rating: 4.0
  },
  {
    id: 5,
    name: "Headphones",
    category: "Electronics",
    price: 3500,
    stock: 25,
    rating: 4.6
  },
  {
    id: 6,
    name: "T-Shirt",
    category: "Fashion",
    price: 1200,
    stock: 40,
    rating: 4.1
  },
  {
    id: 7,
    name: "Bag",
    category: "Accessories",
    price: 2200,
    stock: 18,
    rating: 4.3
  },
  {
    id: 8,
    name: "Keyboard",
    category: "Electronics",
    price: 1800,
    stock: 12,
    rating: 4.4
  }
];
//  Practice Questions
// Easy

// Sabhi products ke names ka array banao.
            //  let ans = products.map((val)=> val.name)
            //   console.log(ans)
// Sirf Electronics products nikalo.
        let ans = products.filter((val) => val.category === "Electronics")
           console.log(ans)
// Jinki price 5000 se jyada hai unhe nikalo.
// Sabhi products ki total price nikalo.
// Average price nikalo.
// Medium
// Sabhi products ki price me 1000 add karo.
// Watch ka object find karo.
// Check karo koi product Fashion category me hai ya nahi.
// Check karo kya sabhi products ka stock 10 se jyada hai.
// Sirf name aur price ka naya object banao.
// Hard
// Sabse mehenga product nikalo.
// Sabse sasta product nikalo.
// Products ko price ke descending order me sort karo.
// Products ko rating ke descending order me sort karo.
// Sirf Electronics category ki total price nikalo.
// Jinki rating 4.5 ya usse jyada hai unke names nikalo.
// Stock 20 se kam wale products nikalo.
// Category ke hisaab se products ko group karo (reduce).
// Sabhi product names ko ek string me convert karo.
// Total inventory value nikalo (price × stock ka sum)