const watchCartData = [
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
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave_Active.jpg?v=1691076995",
    rating: "⭐ Be first to review",
    product_name: "Wave call",
    price: "₹1,799",
    feature: "BT Calling",
    button: "Add To Cart",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Ultima_Chronos.jpg?v=1690524280",
    rating: "⭐5.0",
    product_name: "Ultima Chronos",
    price: "₹2,599",
    feature: "AMOLED Display",
    button: "Add To Cart",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Storm_Plus_434a1d44-7685-4571-b356-4e16190cde5b.jpg?v=1690536070",
    rating: "⭐ Be first to review",
    product_name: "Strom Plus",
    price: "₹2,299",
    feature: "AMOLED Display",
    button: "Add To Cart",
  },
];

const watch_container = document.querySelector(".watch_container");

watchCartData.forEach((item) => {
  const watchIteam = document.querySelector(".watch_row").cloneNode(true);
  const watch_image = watchIteam.querySelector("img");
  watch_image.src = item.image;

  const watch_feature = watchIteam.querySelector(".watch_feature");
  watch_feature.textContent = item.feature;

  const watch_rating = watchIteam.querySelector(".watch_rating");
  watch_rating.textContent = item.rating;

  const watch_name = watchIteam.querySelector(".watch_name");
  watch_name.textContent = item.product_name;

  const watch_price = watchIteam.querySelector(".watch_price");
  watch_price.textContent = item.price;

  const watch_button = watchIteam.querySelector(".watch_btn-cart");
  watch_button.textContent = item.button;

  watch_container.appendChild(watchIteam);
});
