const lifeStyle_Data = [
  //   {
  //     image: "",
  //     lifestyle_name: "",
  //     apperance: "",
  //   },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Party_Animal_4.png?v=1685942349",
    lifestyle_name: "For Parties",
    // apperance: "View All",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Workaholic_2.png?v=1685083745",
    lifestyle_name: "For Work",
    apperance: "View All",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Entertainment_2.png?v=1685083746",
    lifestyle_name: "For Entertainment",
    apperance: "View All",
  },
  {
    image:
      "https://www.boat-lifestyle.com/cdn/shop/files/Audiophile_3.png?v=1685942349",
    lifestyle_name: "For Audiophiles",
    apperance: "View All",
  },
];

const lifestyle_container = document.querySelector(".lifestyle_container");

lifeStyle_Data.forEach((item) => {
  const lifestyle_container_image = document
    .querySelector(".lifestyle_container_image")
    .cloneNode(true);

  const images = lifestyle_container_image.querySelector("img");
  images.src = item.image;

  const lifestyle_name =
    lifestyle_container_image.querySelector(".lifestyle_name");
  lifestyle_name.textContent = item.lifestyle_name;

  //   const views = lifestyle_container_image.querySelector(".view");
  //   views.textContent = item.apperance;

  lifestyle_container.appendChild(lifestyle_container_image);
});
