const btn = document.getElementById("btn");
const err = document.getElementById("bac-err");
const plus = document.getElementById("plus");
const favoritePlace = document.getElementById("favorite_place");

callError = function () {
  let fp = favoritePlace.classList.contains("none");
  err.classList.toggle("none");
  favoritePlace.classList.add("none");
  setTimeout(() => {
    err.classList.toggle("none");
    if (!fp) {
      favoritePlace.classList.remove("none");
    }
  }, 2000);
};
showSection = function () {
  favoritePlace.classList.toggle("none");
};

btn.addEventListener("click", callError);
plus.addEventListener("click", showSection);
