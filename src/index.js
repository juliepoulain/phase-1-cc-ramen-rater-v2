const addSubmitListener = (event) => {
  event.preventDefault();
  const newName = event.target.name.value;
  const newImage = event.target.image.value;
  const ramenMenuDiv = document.querySelector("#ramen-menu");
  const newRamenImg = document.createElement("img");
  newRamenImg.src = newImage;
  newRamenImg.alt = newName;
  ramenMenuDiv.append(newRamenImg);
};

const newRamenForm = document.querySelector("#new-ramen");
newRamenForm.addEventListener("submit", addSubmitListener);

const data = fetch(`http://localhost:3000/ramens/`)
  .then((r) => r.json())



const displayRamens = () => {
  for (let i = 1; i < 6; i++) {
    fetch(`http://localhost:3000/ramens/${i}`)
      .then((r) => r.json())
      .then((ramenData) => {
        const ramenMenuDiv = document.querySelector("#ramen-menu");
        const ramenImg = document.createElement("img");
        ramenImg.src = ramenData.image;
        ramenImg.alt = ramenData.name;
        ramenImg.id = ramenData.id;
        ramenMenuDiv.append(ramenImg);
        ramenImg.addEventListener("click", function handleClick() {
          const detailImage = document.querySelector(".detail-image");
          detailImage.src = ramenData.image;
          detailImage.alt = ramenData.name;
          const detailName = document.querySelector(".name");
          detailName.textContent = ramenData.name;
          const detailRestaurant = document.querySelector(".restaurant");
          detailRestaurant.textContent = ramenData.restaurant;
          const detailRating = document.querySelector("#rating-display");
          detailRating.textContent = ramenData.rating;
          const detailComment = document.querySelector("#comment-display");
          detailComment.textContent = ramenData.comment;
        });
      });
  }
};

document.addEventListener("DOMContentLoaded", function () {
  main();
});

const main = () => {
  displayRamens();
};
