const categories = [
  //   {
  //     image:
  //       "https://www.boat-lifestyle.com/cdn/shop/files/True-wireless-earbuds_small.png?v=1684842854",
  //     cat_name: "True Wireless",
  //   },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Neckbands_bc6343f4-622f-4ebd-bb36-205643c3bf78_small.png?v=1684842854",
    cat_name: "Neckbands",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Smartwatches_88f12bcf-24bd-4e3a-aacb-ecc204f62179_small.png?v=1684842853",
    cat_name: "Smart Watches",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Wireless-Headphones_small.png?v=1684842854",
    cat_name: "wireless Headphones",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Wireless-Speaker_small.png?v=1684842854",
    cat_name: "Wireless Speackers",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Wired-Headphones_small.png?v=1684842854",
    cat_name: "Wired Headphones",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Wired-Earphones_small.png?v=1684842854",
    cat_name: "Wired Earphones",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Gaming-Headphones_small.png?v=1684842853",
    cat_name: "Gaming Headphones",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Trimmers_d0d346cf-b681-49b6-8942-835819bec2d1_small.png?v=1684842853",
    cat_name: "Trimmers",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Soundbars_d9a7bdfd-e780-4581-ab85-f2e86f84cd28_small.png?v=1684842854",
    cat_name: "Soundbars",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/w_de57f25b-de5b-4d1a-bed0-765975b25da8_small.png?v=1684847228",
    cat_name: "party Speakers",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Chargers_c290cb92-f132-412c-8387-f399a7aba423_small.png?v=1684842854",
    cat_name: "Chargers",
  },
];

const cate_container = document.querySelector(".cat-container");

categories.forEach((item) => {
  const categoriesIcon = document
    .querySelector(".categories-icon")
    .cloneNode(true);

  const images = categoriesIcon.querySelector("img");
  images.src = item.image;

  const catName = categoriesIcon.querySelector(".cat-name");
  catName.textContent = item.cat_name;

  cate_container.appendChild(categoriesIcon);
});
