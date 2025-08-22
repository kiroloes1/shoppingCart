// order object

let order = {
    orderId: 0,
    username:"",
    age:0,
    governorate: "",
    region: "",
    address:"",
    phone: "",
    email: "",
    orderNote: "",
    products: [],
    status: "pending",
    paymentMethod: "Cash",
    totalPrice:0,
    shippingCost:0,
    discount: 0,
    createdAt: (new Date()).toLocaleDateString(),

    // Methods
    addProduct(product) {
        this.products.push(product);
    },
    removeProduct(productId) {
        this.products = this.products.filter(p => p.id !== productId);
    },
    calculateTotal() {
        let total = this.products.reduce((sum, p) => sum + (p.price * (p.qty || 1)), 0);
        return total - this.discount + this.shippingCost;
    },
    updateStatus(newStatus) {
        this.status = newStatus;
    },
    takeInfoUser(firstName,lastName,country,streetAddress,townOrCity,phone,email,orderNotes,paymentMethod){
        this.firstName=firstName;
        this.lastName=lastName;
        this.country=country;
        this.streetAddress=streetAddress;
        this.townOrCity=townOrCity;
        this.phone=phone;
        this.email=email;
        this.orderNotes=orderNotes;
        this.paymentMethod=paymentMethod;
    }
};
// user object
let user = {
    id:1,
    username: "",
    email: "",
    age: 0,
    password:"",
    token: "",
    productCart: [],
    conifrmOrder: [],
    wishList: [],
    role: "customer",
    address: { street: "", city: "", country: "" },
    joinedAt: new Date(),
    coupon:{},

    // Methods
    updateUserInfo(username,email,age){
        this.username=username;
        this.email=email;
        this.age=age;
    },
    addToCart(product, qty = 1) {
        this.productCart.push({ ...product, qty });
    },
    removeFromCart(productId) {
        this.productCart = this.productCart.filter(p => p.id !== productId);
    },

    addToWishlist(productId) {
        if (!this.wishList.includes(productId)) {
            this.wishList.push(productId);
        }
    },
    removeToWishlist(productId) {
        this.wishList = this.wishList.filter(p => p.id !== productId);
    },
    addOrder(order){
        this.conifrmOrder.push({ ...order});
    }
};


// all products from api and local
let products = [
  // المنتجات الأساسية (f1 إلى f7)
  {
    id: 41,
    title: "Mens Casual T-Shirt (f1)",
    price: 19.99,
    description: "Classic cotton t-shirt for everyday wear.",
    category: "men clothing",
    image: "./img/products/f1.jpg",
    rating: { rate: 4.0, count: 150 },
    quantity:1
  },
  {
    id: 42,
    title: "Mens Slim Fit Jeans (f2)",
    price: 39.99,
    description: "Slim-fit denim jeans with stretch fabric.",
    category: "men clothing",
    image: "./img/products/f2.jpg",
    rating: { rate: 4.2, count: 200 },
    quantity:1
  },
  {
    id: 43,
    title: "Leather Belt (f3)",
    price: 24.99,
    description: "Genuine leather belt with metal buckle.",
    category: "men accessories",
    image: "./img/products/f3.jpg",
    rating: { rate: 4.5, count: 85 },
    quantity:1
  },
  {
    id: 44,
    title: "Sports Running Shoes (f4)",
    price: 59.99,
    description: "Lightweight running shoes with cushioned soles.",
    category: "men footwear",
    image: "./img/products/f4.jpg",
    rating: { rate: 4.3, count: 120 },
    quantity:1
  },
  {
    id: 45,
    title: "Winter Jacket (f5)",
    price: 79.99,
    description: "Waterproof jacket with insulated lining.",
    category: "men clothing",
    image: "./img/products/f5.jpg",
    rating: { rate: 4.7, count: 90 },
    quantity:1
  },
  {
    id: 46,
    title: "Casual Polo Shirt (f6)",
    price: 29.99,
    description: "Breathable polo shirt for semi-formal occasions.",
    category: "men clothing",
    image: "./img/products/f6.jpg",
    rating: { rate: 4.1, count: 110 },
    quantity:1
  },
  {
    id: 47,
    title: "Baseball Cap (f7)",
    price: 14.99,
    description: "Adjustable cap with embroidered logo.",
    category: "men accessories",
    image: "./img/products/f7.jpg",
    rating: { rate: 3.9, count: 75 },
    quantity:1
  },

  // المنتجات الإضافية (n1 إلى n9) - اخترت 9 للوصول إلى 16 منتجًا
  {
    id: 48,
    title: "Work Boots (n1)",
    price: 89.99,
    description: "Steel-toe boots for heavy-duty work.",
    category: "men footwear",
    image: "./img/products/n1.jpg",
    rating: { rate: 4.6, count: 65 },
    quantity:1
  },
  {
    id: 49,
    title: "Swim Trunks (n2)",
    price: 22.99,
    description: "Quick-dry swimwear with mesh lining.",
    category: "men clothing",
    image: "./img/products/n2.jpg",
    rating: { rate: 4.0, count: 40 },
    quantity:1
  },
  {
    id: 80,
    title: "Dress Socks (n3)",
    price: 9.99,
    description: "Pack of 3 formal socks for office wear.",
    category: "men accessories",
    image: "./img/products/n3.jpg",
    rating: { rate: 3.8, count: 95 },
    quantity:1
  },
  {
    id: 81,
    title: "Denim Jacket (n4)",
    price: 49.99,
    description: "Vintage-style denim jacket with chest pockets.",
    category: "men clothing",
    image: "./img/products/n4.jpg",
    rating: { rate: 4.4, count: 80 },
    quantity:1
  },
  {
    id: 82,
    title: "Gym Shorts (n5)",
    price: 18.99,
    description: "Moisture-wicking shorts for workouts.",
    category: "men clothing",
    image: "./img/products/n5.jpg",
    rating: { rate: 4.2, count: 55 },
    quantity:1
  },
  {
    id: 83,
    title: "Wallet (n6)",
    price: 34.99,
    description: "Genuine leather bifold wallet with RFID protection.",
    category: "men accessories",
    image: "./img/products/n6.jpg",
    rating: { rate: 4.3, count: 70 },
    quantity:1
  },
  {
    id: 84,
    title: "Hooded Sweatshirt (n7)",
    price: 32.99,
    description: "Warm fleece-lined hoodie for casual wear.",
    category: "men clothing",
    image: "./img/products/n7.jpg",
    rating: { rate: 4.1, count: 105 },
    quantity:1
  },
  {
    id: 85,
    title: "Aviator Sunglasses (n8)",
    price: 27.99,
    description: "UV-protection sunglasses with metal frame.",
    category: "men accessories",
    image: "./img/products/n8.jpg",
    rating: { rate: 4.0, count: 60 },
    quantity:1
  },
  {
    id: 86,
    title: "Cargo Pants (n9)",
    price: 44.99,
    description: "Military-style pants with multiple utility pockets.",
    category: "men clothing",
    image: "./img/products/f8.jpg",
    rating: { rate: 4.5, count: 75 },
    quantity:1
  }
];
let searcharray=(JSON.parse(localStorage.getItem("products"))) ||[]
// current user 

// menu toggle
function menuToggle(){
// toggle the menu bar
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");   // بيضيف/يشيل الكلاس
  mobileMenu.classList.toggle("hidden");
});
}
menuToggle();
const users=JSON.parse(localStorage.getItem("userArray"));
if(users!==null){
var currentUser = users.find(e => e.token === localStorage.getItem("token")) || null;
}

// fetch products data from free api
async function productsRead() {
  try {
    // API 1
    let response1 = await fetch('https://dummyjson.com/products?limit=100');
    let data1 = await response1.json();

    // API 2
    let response2 = await fetch('https://fakestoreapi.com/products');
    let data2 = await response2.json();

    
    let x = products.length ? Math.max(...products.map(p => p.id)) + 1 : 100;

    // Format DummyJSON
    let productApi1 = data1.products.map(item => ({
      ...item,
      quantity: 1,
      id: x++
    }));

    // Format FakeStore
    let productApi2 = data2.map(item => ({
      ...item,
      quantity: 1,
      id: x++,
      images: [item.image] 
    }));

    // Merge all
    let allProducts = [...productApi1, ...productApi2];
    console.log("Fetched all products:", allProducts);

    products.push(...allProducts);
    localStorage.setItem("products", JSON.stringify(products));

    
  } catch (e) {
    console.error("Error fetching products:", e);
    return [];
  }
}
if(! JSON.parse(localStorage.getItem("products"))){
productsRead();
}






function readProducts(arr, place) {
    place.innerHTML = "";

    // حاول تجيب قيمة maxPrice، لو مش موجود استخدم Infinity
    const maxPriceElement = document.getElementById("maxPrice");
    const maxPrice = maxPriceElement ? parseInt(maxPriceElement.textContent) : Infinity;

    arr
      .filter(e => e.price <= maxPrice)
      .forEach((e, i) => {
        place.innerHTML += `
        <div id="cardProduct" class="card flex flex-col items-center">
            <a onclick='displayProduct(${JSON.stringify(e)})' class="w-full">
                <img loading="lazy" class="w-72 md:w-full  h-64 md:h-64  rounded-t-lg object-contain" src="${e.image||e.images[0]}" alt="${e.name}">
            </a>
            <div class="py-3 w-72 md:w-72  h-full max-w-sm bg-white shadow-md mt-[-2.5rem] rounded-md mx-2">
                <div class="px-3">
                    <p class="text-lg font-semibold">${e.title}</p>
                    <p class="h-12 px-2 text-md font-medium overflow-hidden py-1 my-2 mb-4 text-gray-500">
                        ${e.description}
                    </p>
                </div>
                <div class="flex justify-between items-center">
                    <p class="bg-orange-300 p-2 text-white text-center text-lg font-bold rounded-r-full w-28">${e.price}$</p>
                    <div class="flex gap-5 pr-3">
                        <button onclick="addToWishlist(${e.id})" id="fav" class="text-gray-500 hover:text-red-500 text-3xl transition">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                        <button onclick="addToCart(${e.id})" class="text-gray-500 hover:text-[var(--orange)] text-2xl transition">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;
    });

    // تأثير ظهور البطاقات
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = "translateY(50px) rotate(5deg)";
        card.style.transition = "opacity 0.5s ease, transform 0.5s ease";

        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = "translateY(0) rotate(0deg)";
        }, index * 200); 
    });
}

// read & reduce category 
function readcategory(arr, place) {
  let categories = arr.map(e => e.category);
  let categoryArray = categories.filter((cat, i) => categories.indexOf(cat) === i);


  place.innerHTML = "";


  // container for lg screen or greater
  let buttonContainer = document.createElement("div");
  buttonContainer.className = "hidden lg:flex flex-wrap gap-3"; // يظهر بس على الشاشات الكبيرة

  categoryArray.forEach(e => {
    buttonContainer.innerHTML += `
      <button onclick="categoryFilter('${e}')" value="${e}"  
        class="otherCategory px-6 py-2 rounded-md bg-gray-200 text-gray-700 font-semibold transition">
        ${e}
      </button>
    `;
  });

  //container for lg screen or less
  let selectContainer = document.createElement("div");
  selectContainer.className = "block lg:hidden w-full";

  let select = document.createElement("select");
  select.className = "w-full px-4 py-2 rounded-md bg-gray-200 text-gray-700 font-semibold";
  select.innerHTML = `<option disabled selected>Choose Category</option>`;

  categoryArray.forEach(e => {
    select.innerHTML += `<option value="${e}">${e}</option>`;
  });

  // event when select changes
  select.addEventListener("change", (event) => {
    categoryFilter(event.target.value);
  });

  selectContainer.appendChild(select);

  // append both
  place.appendChild(buttonContainer);
  place.appendChild(selectContainer);
}


/// filter by category
function categoryFilter(value) {
  document.getElementById("search").value = "";

  let products = JSON.parse(localStorage.getItem("products")) || [];

  
  let arrfilter = products.filter(e => e.category === value);


  const categories = document.querySelectorAll(".otherCategory") || [];

  categories.forEach(e => {
    if (e.value == value) {
      e.classList.remove("bg-gray-200", "text-gray-700");
      e.classList.add("bg-[var(--orange)]", "text-white");
    } else {
      e.classList.remove("bg-[var(--orange)]", "text-white");
      e.classList.add("bg-gray-200", "text-gray-700");
    }
  });

  

  
  readProducts(arrfilter, document.getElementById("product-card-container"));
  searcharray = arrfilter;
}

function initUserSection() {
  let name = "";
  let image = "./img/people/1.png";

  if (currentUser) {
    name = currentUser.username;
  }

  // Inject user name
  document.getElementById("userName").innerText = name;

  // إظهار/إخفاء بناءً على حالة الـ token
  if (!localStorage.getItem("token")) {
    document.getElementById("userImage").classList.add("hidden");
    document.getElementById("logout").classList.add("hidden");
    document.getElementById("viewProfile").classList.add("hidden");
    document.getElementById("noUser").classList.remove("hidden");
  } else {
    document.getElementById("userImage").classList.remove("hidden");
    document.getElementById("logout").classList.remove("hidden");
    document.getElementById("viewProfile").classList.remove("hidden");
    document.getElementById("noUser").classList.add("hidden");
  }

  // فتح/غلق البانل
  document.querySelectorAll(".fa-user").forEach(e => {
    e.addEventListener("click", () => {
      document.getElementById("userSection").classList.toggle("hidden");
    });
  });

  document.getElementById("closeUserSection").addEventListener("click", () => {
    document.getElementById("userSection").classList.add("hidden");
  });
}


document.addEventListener("DOMContentLoaded", initUserSection);

// filter by search input
function searchInput(value, arr = searcharray) {
  const container = document.getElementById("product-card-container");
  const price=parseInt(document.getElementById("maxPrice").textContent);
  // If input is empty, show all products
  if (value.trim() === "") {
    readProducts( arr.filter(e => 
(    (e.price<=price))
  ), container);
    return;
  }

  // Normalize search value
  const searchValue = value.toLowerCase().trim();

  console.log(searchValue)
  // Filter products by category or title
  const filtered = arr.filter(e => 
    (
      e.title.toLowerCase().trim().includes(searchValue) ||
      e.category.toLowerCase().trim().includes(searchValue)
    ) && e.price <= price
  );
  
  console.log(filtered)
  // Display results
  readProducts(filtered, container);
}
// filter by price range
function priceFilter(value, arr = searcharray){
    document.getElementById("search").value=""
  document.getElementById("maxPrice").innerHTML=`${value} `;
  const container = document.getElementById("product-card-container");

    // Filter products by category or title
  const filtered = arr.filter(e => 
    e.price<parseInt(value))
    // Display results
    
  readProducts(filtered, container);
}
// for display selected product
function displayProduct(e){
   localStorage.setItem("displayProduct",JSON.stringify(e))
   location.href="./productDisplay.html"
}

function addToCart(productId, q = 1) {
  let AddCartArray = [];

  if (localStorage.getItem("token") && currentUser) {
    AddCartArray = currentUser.productCart || [];
  } else {
    AddCartArray = JSON.parse(localStorage.getItem("cartArray")) || [];
  }

  let productS = JSON.parse(localStorage.getItem("products")) || [];

  const existingProduct = AddCartArray.find(item => item.id === productId) || null;

  if (existingProduct) {
    existingProduct.quantity = (existingProduct.quantity || 1) + q;
  } else {
    const product = productS.find(p => p.id === productId);
    if (product) {
      const newProduct = { ...product, quantity: q };
      AddCartArray.push(newProduct);
    }
  }

  correctpop();

  if (localStorage.getItem("token") && currentUser) {
    currentUser.productCart = AddCartArray;
    localStorage.setItem("userArray", JSON.stringify(users));
  } else {
    localStorage.setItem("cartArray", JSON.stringify(AddCartArray));
  }

  cartcount();
}


function userSection(){
document.getElementById("userSectionContainer").innerHTML=`
  <!-- userSection -->
  <div id="userSection" 
       class="hidden  top-96 right-5 fixed translate-x-1/2  md:top-32 md:right-28 lg:right-40 xl:right-52 2xl:right-80 
              bg-white rounded-2xl shadow-xl drop-shadow-lg p-8 flex flex-col items-center gap-6 
              w-[90%] sm:w-[400px] animate-fadeIn z-50">

    <button id="closeUserSection" 
            class="absolute top-3 right-3 w-8 h-8 flex items-center justify-center 
                   rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-black transition">
      <i class="fa-solid fa-xmark"></i>
    </button>

    <div class="flex flex-col items-center gap-3 ">
      <img id="userImage" src="./img/people/1.png" alt="User image" class="w-20 h-20 rounded-full shadow-md">
      <p id="userName" class="text-center text-2xl font-bold text-gray-800"></p>
      <p id="noUser" class="hidden text-gray-500 text-sm">Welcome! Please login or sign up to continue</p>
    </div>

    <div class="flex flex-col gap-4 w-full">
      <div class="flex flex-row gap-4 justify-center">
        <a href="./login.html" class="flex-1 py-2 px-4 rounded-xl text-lg font-semibold bg-orange-400 text-white hover:bg-orange-500 transition">
          Login
        </a>
        <a href="./signUp.html" class="flex-1 py-2 px-4 rounded-xl text-lg font-semibold bg-gray-900 text-white hover:bg-gray-700 transition">
          Sign Up
        </a>
      </div>
      
      <a id="viewProfile" href="./viewProfile.html" 
         class="w-full text-center py-2 px-4 rounded-xl text-lg font-semibold bg-gray-500 text-white hover:bg-gray-600 transition">
        View Profile
      </a>
      <div id="logout" onclick="logout()" 
           class="w-full text-center py-2 px-4 rounded-xl text-lg font-semibold bg-red-500 text-white hover:bg-red-600 transition">
        Logout
      </div>
    </div>
  </div>`
}
userSection()
function correctpop() {
    document.getElementById("body").innerHTML += `
        <div id="successPopup" 
            class="z-50 fixed top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-xl
            shadow-lg flex items-center gap-3 opacity-0 scale-90 transition-all duration-300 ease-out">
            <i class="fas fa-check-circle text-green-600 text-2xl"></i>
            <p class="font-medium">successfully!</p>
        </div>`;

document.getElementById("successPopup").classList.remove("opacity-0") ;
document.getElementById("successPopup").classList.add("upp");
 setTimeout(e=>{ document.getElementById("successPopup").classList.add("opacity-0");
     document.getElementById("successPopup").classList.remove("upp"); },1000)
}
function incorrectpop() {
    document.body.innerHTML += `
        <div id="failPopup" 
            class="z-50 fixed top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-xl
            shadow-lg flex items-center gap-3 opacity-0 scale-90 transition-all duration-300 ease-out">
            <i class="fas fa-check-circle text-red-600 text-2xl"></i>
            <p class="font-medium">faild!</p>
        </div>`;

document.getElementById("failPopup").classList.remove("opacity-0") ;
document.getElementById("failPopup").classList.add("upp");
 setTimeout(e=>{ document.getElementById("failPopup").classList.add("opacity-0");
     document.getElementById("failPopup").classList.remove("upp"); },1000)
 }

function cartcount(){
  let AddCartArray=JSON.parse(localStorage.getItem("cartArray"))||[]
    if(localStorage.getItem("token") &&currentUser){
      
     AddCartArray=currentUser.productCart ||[]
  }
  else{
    AddCartArray = JSON.parse(localStorage.getItem("cartArray")) ;
  }
    document.querySelectorAll("#cart-count").forEach(e=>{
    e.innerHTML=AddCartArray.length
})

}

cartcount()
function addToWishlist(id){
  let favArray=[]
    if(localStorage.getItem("token") && currentUser){
     favArray=currentUser.wishList ||[]
  }
  else{
   favArray=JSON.parse(localStorage.getItem("favArray"))||[]
  }
    
    let productsAll=JSON.parse(localStorage.getItem("products"))||[];
    let favProduct=productsAll.find(e=>{
       return e.id===id;
    
    });
    console.log(id)
    let check=favArray.find(e=>{
         return e.id==favProduct.id
       })
       if(check){
        Swal.fire({
  icon: 'warning', 
  title: 'Oops...',
  text: 'This favorite product already exists!',
  confirmButtonText: 'OK',
  confirmButtonColor: '#3085d6'
})
return
;


        
       }
    if(favProduct){
         correctpop();
         favArray.push(favProduct);
         
         if(localStorage.getItem("token") && currentUser){
          currentUser.wishList=favArray;
            localStorage.setItem("userArray",JSON.stringify(users));
         }
         else{
            localStorage.setItem("favArray",JSON.stringify(favArray));
         }
         
    }else{
       incorrectpop();
    }

    cartcount()
}

function confirmProcess(){
    let user=JSON.parse(localStorage.getItem("userArray"));
    let token=localStorage.getItem("token");
    if(!token){
                Swal.fire({
  icon: 'warning', 
  title: 'Oops...',
  text: 'You must be Login first!',
  confirmButtonText: 'OK',
  confirmButtonColor: '#3085d6'
}).then(e=>{
    if(e.isConfirmed){
        setTimeout(()=>{
             location.href="./login.html";
        },500)
    }
})
    }
    else if( currentUser.productCart.length===0){
      Swal.fire({
  icon: 'error', 
  title: 'Oops...',
  text: 'no there product in cart!',
  confirmButtonText: 'OK',
  confirmButtonColor: 'red'
  })

    }
    
    else {
      document.getElementById("orderSection").classList.remove("hidden");
    }
    
}
console.log(currentUser)



function generateToken(length = 32) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  for (let i = 0; i < length; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
}




// goBack
function goBack() {
  window.history.back();
}

function logout(){
  localStorage.removeItem("token")
  location.href="./index.html"
}
// console.log(JSON.parse(localStorage.getItem("lastOrder")))
// console.log(JSON.parse(localStorage.getItem("userArray")))
// //  console.log((localStorage.getItem("token")))

// console.log(JSON.parse(localStorage.getItem("cartArray")))

 
// console.log(order)
// localStorage.removeItem("userArray")

console.log(currentUser)
console.log(localStorage)