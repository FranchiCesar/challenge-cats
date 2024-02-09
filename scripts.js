const cat1Image = document.querySelector(".cat-1");
const cat2Image = document.querySelector(".cat-2");
const cat3Image = document.querySelector(".cat-3");
const mainImage = document.querySelector(".main-image");

function changeImage(aux) {
  mainImage.src = aux;
}

cat1Image.addEventListener("click", function () {
  changeImage("images/Gato-filhote-1.jpg");
});
cat2Image.addEventListener("click", function () {
  changeImage("images/Gato-filhote-2.jpg");
});
cat3Image.addEventListener("click", function () {
  changeImage("images/Gato-filhote-3.jpg");
});
