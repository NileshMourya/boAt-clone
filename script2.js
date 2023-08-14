const cartData = [
  //   {
  //     image:
  //       "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049",
  //     rating: "⭐4.8",
  //     product_name: "Airdrops 131",
  //     price: "₹999",
  //     button: "Add To Cart",
  //   },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave_Call__1.jpg?v=1689751649",
    rating: "⭐4.9",
    product_name: "Wave call",
    price: "₹1,799",
    feature: "BT Calling",
    button: "Add To Cart",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_141_d277995b-31ae-420d-b5b4-1161515335ed.jpg?v=1687428689",
    rating: "⭐4.8",
    product_name: "Airdrops 141",
    price: "₹1,199",
    feature: "42 Hours Playback",
    button: "Add To Cart",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/rockerz_ea76e8ff-d95c-49da-b6c9-fca4304dce11.jpg?v=1685686978",
    rating: "⭐4.8",
    product_name: "Rockerz 235 V2",
    price: "₹899",
    feature: "8 Hours Playback",
    button: "Add To Cart",
  },
];

const mainContainer = document.querySelector(".container");

cartData.forEach((item) => {
  const cartItem = document.querySelector(".row").cloneNode(true);

  const cartImages = cartItem.querySelector("img");
  cartImages.src = item.image;

  const rating = cartItem.querySelector(".rating");
  rating.textContent = item.rating;

  const feature_name = cartItem.querySelector(".feature");
  feature_name.textContent = item.feature;

  const name = cartItem.querySelector(".name");
  name.textContent = item.product_name;

  const price = cartItem.querySelector(".price");
  price.textContent = item.price;

  const button_cart = cartItem.querySelector(".btn-cart");
  button_cart.textContent = item.button;

  mainContainer.appendChild(cartItem);
});

// cartData.forEach((item) => {
//   const cartImages = document.querySelector("img");
//   cartImages.src = item.image;

//   document.querySelector(".rating").innerHTML = item.rating;
//   document.querySelector(".name").innerHTML = item.product_name;
//   document.querySelector(".price").innerHTML = item.price;
//   document.querySelector(".btn-cart").innerHTML = item.button;
// });
