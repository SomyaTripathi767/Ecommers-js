const URLParms = new URLSearchParams(window.location.search);
const productID = parseInt(URLParms.get("ID"));
let productcontainer = document.getElementById("product_data");

let product = [
  {
    id: 1,
    image:
      "https://www.bullionknot.com/cdn/shop/files/Songbirdmin_4.jpg?v=1711431567",
    price: "999",
    name: "Songbird Georgett Dress",
    size: "S , M , L , XL",
    color: "black , pink , red",
    rating: "4.5",
    cat: "female",
  },

  {
    id: 2,
    image:
      "https://www.bullionknot.com/cdn/shop/files/Sofiyamin_4.jpg?v=1710132961",
    price: "2000",
    name: "Sofiya Anarkali Dress",
    size: "S , M , L , XL",
    color: "purpel , pink , red",
    rating: "3.5",
    cat: "female",
  },
  {
    id: 3,
    image:
      "https://images.meesho.com/images/products/173368875/3rntu_512.webp",
    price: "200",
    name: "HALF SLEEVE SHIRT",
    size: "S , M , L , XL",
    color: "Blue , Brown , White , Black",
    rating: "5.5",
    cat: "male",
  },
  {
    id: 4,
    image:
      "https://images.meesho.com/images/products/336129967/g4sjd_512.webp",
    price: "400",
    name: "VDLooks Man Shirt",
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
    name: "Beautiful White Dress",
    size: "S , M , L , XL",
    color: " White , Black",
    rating: "3.5",
    cat: "female",
  },
  // 6
  {
    id: 6,
    image:
      "https://5.imimg.com/data5/ECOM/Default/2023/3/293258839/ND/NX/PM/11492969/bluepromdressesv-neckpuffysleevesa-lineeveninggownforwedding-500x500.jpg",
    price: "4000",
    name: "Blue Prome Dress",
    size: "S , M , L , XL",
    color: " White , Blue",
    rating: "2.5",
    cat: "female",
  },
  {
    id: 7,
    image:
      "https://images.meesho.com/images/products/342444492/qtyoi_512.webp",
    price: "1499",
    name: "Men Polyester Tshirts",
    size: "S , M , L , XL",
    color: "black , white , blue , gray , yellow",
    rating: "4.3",
    cat: "male",
  },
  {
    id: 8,
    image:
      "https://images.meesho.com/images/products/383853457/i9ylu_512.webp",
    price: "1999",
    name: "Printed Cotton Kurti ",
    size: "S , M , L , XL",
    color: "black , white , blue , perpulse ",
    rating: "4.5",
    cat: "female",
  },
  {
  id: 9,
    image: "https://images.herzindagi.info/image/2021/Feb/Avoid-These-5-Mistakes-While-Buying-Bridal-Jewelleryssssss.jpg",
    price: "2000",
    name: "Bridal Jewellery",
    size: "S , M , L , XL",
    color: "black , white , yellow ",
    rating: "3.8",
    cat: "kids",
  },
  {
    id: 10,
    image:
      "https://images.meesho.com/images/products/412086199/l4j4g_512.webp",
    price: "1999",
    name: "Baby Girls Midi Dress",
    size: "S , M , L , XL",
    color: "black , white , blue",
    rating: "3.6",
    cat: "kids",
  },
  {
    id: 11,
    image:
      "https://images.meesho.com/images/products/112535551/ufcrk_512.webp",
    price: "1499",
    name: "Trendy Partywear Dress",
    size: "S , M , L , XL",
    color: "black , white , blue , red",
    rating: "3.9",
    cat: "female",
  },
  {
    id: 12,
    image:
      "https://images.meesho.com/images/products/291575789/cibku_512.webp",
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
    image:
      "https://images.meesho.com/images/products/382314018/xpd29_512.webp",
    price: "1399",
    name: "Retro Women Dresses",
    size: "S , M , L , XL",
    color: "black , white , blue , red , yellow",
    rating: "4.2",
    cat: "female",
  },
  {
    id: 14,
    image: "https://www.karpagamjewellers.com/wp-content/uploads/2023/03/Gold-Collection-Design.jpg",
    price: "2000",
    name: "Lakshmi Pendant Set",
    size: "S , M , L , XL",
    color: "black , white , blue , red ",
    rating: "3.9",
    cat: "female",
  },
  {
    id: 15,
    image:
      "https://images.meesho.com/images/products/407303010/rcn2q_512.webp",
    price: "1299",
    name: "MAN BLACK SHIRT ",
    size: "S , M , L , XL",
    color: "black , white , blue , green , yellow",
    rating: "3.7",
    cat: "male",
  },
  {
    id: 16,
    image:
      "https://images.meesho.com/images/products/21133389/85c1a_400.webp",
    price: "1299",
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

// count

let count = 0;
let increase = document.getElementById("increment");
let decrease = document.getElementById("dectement");
let quantityChange = document.getElementById("quantity");

decrease.addEventListener("click", function () {
  if (count > 0) {
    count--;
    quantityChange.textContent = count;
  }
  updatetotalprice();
});

increase.addEventListener("click", function () {
  count++;
  quantityChange.textContent = count;
  updatetotalprice();
});

// display product


function display(array){
  document.getElementById("name").innerHTML = array.name;
  document.getElementById("price").innerHTML = `price: ${array.price}`;
  // document.getElementById("size").innerHTML = `Size: ${array.size}`;
  // document.getElementById("color").innerHTML = `Color: ${array.color}`;
  // document.getElementById("rating").innerHTML = `Rating: ${array.rating}`;
  const imageElement = document.getElementById('image');
  imageElement.src = array.image;
  updatetotalprice();
}

function updatetotalprice(){
  const products = product.find(p => p.id === productID);
  if(products){
      let totalPrice = products.price * count
      document.getElementById("pricetotal").innerHTML =`Total price: ${totalPrice}`;
  }
}

const products = product.find(p => p.id === productID);

if(products){
  display(products)
}else{
  console.log(`Product with ID ${productID} not found`);
}

// add to cart
document.getElementById('buyNowButton').addEventListener('click', function() {
  const selectedColor = document.querySelector('input[name="color"]:checked').value;
  const selectedSize = document.querySelector('input[name="size"]:checked').value;
  if (selectedColor && selectedSize) {
    alert(`Thank you for your purchase! You selected the color: ${selectedColor.value} and size: ${selectedSize.value}`);
} else {
    alert('Please select a color and size.');
}
});