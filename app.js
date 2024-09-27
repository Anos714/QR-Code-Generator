let inputBox = document.querySelector("#input");
let btn = document.querySelector("#btn");

let imgBox = document.querySelector(".imgBox");
let QRImg = document.querySelector("#qrimage");

function QRGenerator() {
  QRImg.src =
    " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    inputBox.value;
  imgBox.style.display = "block";
}

btn.addEventListener("click", () => {
  QRGenerator();
  inputBox.value = "";
  inputBox.addEventListener("click", () => {
    imgBox.style.display = "none";
  });
});
