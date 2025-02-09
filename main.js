// Loader
document.addEventListener("DOMContentLoaded", function () {
  // let loaderTime = 3000;

  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
    document.getElementById("contant").style.display = "block";
  }, 3000);
});
// cart counter
let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}

// Example of adding a product to the cart
document.querySelectorAll('#product_list').forEach(card => {
    card.addEventListener('click', function() {
        addToCart();
    });
});


// slider
let slider = {
  slides: document.querySelectorAll(".slide"),
  currentslide: 0,

  init: function () {
    this.showslide(this.currentslide);
  },                                  
  showslide: function (index) {
    this.slides.forEach((slide) => {
      slide.style.display = "none";
    });
    this.slides[index].style.display = "block";
  },
  prev: function () {
    this.currentslide =
      (this.currentslide - 1 + this.slides.length) % this.slides.length;
    this.showslide(this.currentslide);
  },
  next: function () {
    this.currentslide = (this.currentslide + 1) % this.slides.length;
    this.showslide(this.currentslide);
  },
};

slider.init();


//   product

let product = [
  {
    id: 1,
    image:
      "https://m.media-amazon.com/images/I/71fN-NpvuBL._SX679_.jpg",
    price: "400",
    name: "drop shoulder tshirt ",
    size: "S , M , L , XL",
    color: "black , pink , red",
    rating: "4.5",
    cat: "female",
  },

  {
    id: 2,
    image:
      "https://m.media-amazon.com/images/I/61HG5aA3GYL._SY879_.jpg",
    price: "800",
    name: "Anarkali Kurta",
    size: "S , M , L , XL",
    color: "purpel , pink , red",
    rating: "3.5",
    cat: "female",
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/71x4rLhMkML._SY741_.jpg",
    price: "350",
    name: "Lymio Men T-Shirt",
    size: "S , M , L , XL",
    color: "Blue , Brown , White , Black",
    rating: "5.5",
    cat: "male",
  },
  {
    id: 4,
    image: "https://m.media-amazon.com/images/I/610IIi6wHuL._SY879_.jpg",
    price: "400",
    name: "Lymio Track Pant",
    size: "S , M , L , XL",
    color: "Piche , Orange , White , Black",
    rating: "3.5",
    cat: "male",
  },
  {
    id: 5,
    image:
      "https://imgmedia.lbb.in/media/2022/09/63231bef6a824c7ba8072024_1663245295876.jpg",
    price: "6000",
    name: "The Beautiful White Dress",
    size: "S , M , L , XL",
    color: " White , Black",
    rating: "3.5",
    cat: "female",
  },
  // 6
  {
    id: 6,
    image:
      "https://m.media-amazon.com/images/I/51Clvs6gtYL._SY879_.jpg",
    price: "1000",
    name: "KOTTY Trousers",
    size: "S , M , L , XL",
    color: " White , Blue",
    rating: "2.5",
    cat: "female",
  },
  {
    id: 7,
    image: "https://images.meesho.com/images/products/342444492/qtyoi_512.webp",
    price: "1499",
    name: "Polyester Tshirts",
    size: "S , M , L , XL",
    color: "black , white , blue , gray , yellow",
    rating: "4.3",
    cat: "male",
  },
  {
    id: 8,
    image: "https://images.meesho.com/images/products/383853457/i9ylu_512.webp",
    price: "1999",
    name: "Printed Kurti  ",
    size: "S , M , L , XL",
    color: "black , white , blue , perpulse ",
    rating: "4.5",
    cat: "female",
  },
  {
    id: 9,
    image: "https://5.imimg.com/data5/XR/KU/MY-26152501/kids-gown.jpg",
    price: "2000",
    name: "Kido Gown",
    size: "S , M , L , XL",
    color: "black , white , yellow ",
    rating: "3.8",
    cat: "kids",
  },
  {
    id: 10,
    image: "https://images.meesho.com/images/products/412086199/l4j4g_512.webp",
    price: "1400",
    name: "Baby Girls Midi Dress",
    size: "S , M , L , XL",
    color: "black , white , blue",
    rating: "3.6",
    cat: "kids",
  },
  {
    id: 11,
    image: "https://images.meesho.com/images/products/112535551/ufcrk_512.webp",
    price: "1109",
    name: "Trendy Partywear Dresses",
    size: "S , M , L , XL",
    color: "black , white , blue , red",
    rating: "3.9",
    cat: "female",
  },
  {
    id: 12,
    image: "https://images.meesho.com/images/products/291575789/cibku_512.webp",
    price: "999",
    name: "Pretty Women Dresses",
    size: "S , M , L , XL",
    color: "black , white , blue , pink",
    rating: "4.4",
    cat: "kids",
  },
  // 13
  {
    id: 13,
    image: "https://cdn4.sharechat.com/newdressDesign_1d5b9fb7_1653884549498_sc_cmprsd_75.jpg?tenant=sc&referrer=feed-service&f=rsd_75.jpgp",
    price: "999",
    name: "Retro Women Dress",
    size: "S , M , L , XL",
    color: "black , white , blue , red , yellow",
    rating: "4.2",
    cat: "female",
  },
  {
    id: 14,
    image: "https://www.karpagamjewellers.com/wp-content/uploads/2023/03/Gold-Collection-Design.jpg",
    price: "1799",
    name: "Lakshmi Pendant Set",
    size: "S , M , L , XL",
    color: "black , white , blue , red ",
    rating: "3.9",
    cat: "female",
  },
  {
    id: 15,
    image: "https://images.meesho.com/images/products/407303010/rcn2q_512.webp",
    price: "1299",
    name: "MAN BLACK SHIRT ",
    size: "S , M , L , XL",
    color: "black , white , blue , green , yellow",
    rating: "3.7",
    cat: "male",
  },
  {
    id: 16,
    image: "https://images.meesho.com/images/products/21133389/85c1a_400.webp",
    price: "1009",
    name: "Stylish Women Dresses",
    size: "S , M , L , XL",
    color: "black , white , gray",
    rating: "3.5",
    cat: "female",
  },
  // {
  //   id: 17,
  //   image:
  //     "https://images.meesho.com/images/products/319687495/xwzrg_512.webp",
  //   price: "999",
  //   name: "Pretty Graceful Women Dresses",
  //   size: "S , M , L , XL",
  //   color: "black , white , blue",
  //   rating: "4.5",
  //   cat: "female",
  // },
];



let allproduct = document.getElementById("product_list");


function Item(product) {
  allproduct.innerHTML = "";
  product.forEach((product) => {
    const product_Element = document.createElement("div");


    product_Element.classList.add("product");

    product_Element.innerHTML = `
             <img src = "${product.image}" alt="${product.name}">
             <br>
             <h5><b>Name:</b> ${product.name}</h5>
             <p><b>Price :</b> ${product.price}</p>
             <p><b>Size :</b> ${product.size}</p>
             <p><b>Color :</b> ${product.color}</p>
             <p><b>Rating :</b> ${product.rating}</p>
             <p><b>Catagary :</b> ${product.cat}</p>
             <a href="singleProduct.html?ID=${product.id}" class="anchar">View Product</a>`;
    allproduct.appendChild(product_Element);

    const product_btn = document.createElement('button');
    product_Element.appendChild(product_btn)
    product_btn.textContent = 'add to cart'
    // product_btn.classList = 'product_btn'

    product_btn.onclick = () => addtocart(product.id)
  });
}
// button add to cart
function addtocart(id){
  console.log(id);
  alert("added to cart");
  let cart = JSON.parse(localStorage.getItem('pro')) || []
  // let item = product.find(p => p.id === id)

  let item = product.find(p => p.id === id);

  if (item) {
      let isProductInCart = cart.some(p => p.id === id);
      if (isProductInCart) {
          alert("Product is already in the cart");
      } else {
          cart.push(item);
          localStorage.setItem('pro', JSON.stringify(cart));
          alert("Added to cart");
      }
  }
}

// sort
function sortName(criteria) {
  let sorted = [...product];

  if (criteria === "name") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
    console.log(criteria);
  } else if (criteria === "Price") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (criteria === "rating") {
    sorted.sort((a, b) => a.rating - b.rating);
  }
  Item(sorted);
}

// assending and dicending oder

function sortProduct() {
  let sortData = document.getElementById("sort").value;
  let filter;
  if (sortData === "asc") {
    filteredprocuct = [...product].sort((a, b) => a.price - b.price);
  } else if (sortData === "dec") {
    filteredprocuct = [...product].sort((a, b) => b.price - a.price);
  } else if (sortData === "301-600") {
    filteredprocuct = product.filter(
      (product) => product.price >= 301 && product.price <= 600
    );
  } else if (sortData === "601-1000") {
    filteredprocuct = product.filter(
      (product) => product.price >= 601 && product.price <= 1000
    );
  } else if (sortData === "1000-2000") {
    filteredprocuct = product.filter(
      (product) => product.price >= 1000 && product.price <= 2000
    );
  } else {
    filteredprocuct = product;
  }
  Item(filteredprocuct);
}

// Event listner for dropdown change

document.getElementById("sort").addEventListener("change", function () {
  const sort = this.value;
  sortProduct(sort);
});


// filter product

// function filteredprocuct(){
//   const cat = document.getElementById('cat').value;
//   let filteredprocuct;

//   if(cat === 'all'){
//     filteredprocuct = product;
//   }
//   else if(cat === 'men'){
//     filteredprocuct = product
//   }
//   else if(cat === 'women'){
//     filteredprocuct = product
//   }
//   else if(cat === 'kid'){
//     filteredprocuct = product
//   }
//   else {
//     filteredprocuct = product.filter(product =>
//       product.cat === cat);
//   }
//   Item(filteredprocuct)
// }

// function filteredproduct(){
//   let filteredproduct = [];
//   let cata = document.getElementById("cat").value;

//   if(cata === "All"){
//     filteredproduct=[...product];
//   }
//   else{
//     filteredproduct=product.filter((product) => product.cat === cata)
//   }
//   Item(filteredproduct)
// }

// 


// 

// 

document.addEventListener('scroll', function() {
  const backToTopButton = document.getElementById('backToTop');
  if (window.scrollY > 200) { // Show button after scrolling down 200px
      backToTopButton.style.opacity = 1;
  } else {
      backToTopButton.style.opacity = 0;
  }
});

document.getElementById('backToTop').addEventListener('click', function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});


Item(product);

