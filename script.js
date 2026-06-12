import {book as imgs} from "databse.js"


const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const similarBookContainer = document.querySelector(".similar-book-container");

let mainBookImg = document.getElementById("main-book");
let mainBookTitle = document.getElementById("book-title");

const book = imgs.find((book) => book.id === id);

if (book) {
  mainBookImg.src = book.address;
  mainBookTitle.textContent = book.bookName;
}

imgs.forEach((obj) => {
  let name = obj.bookName;
  let address = obj.address;
  let index = obj.id;

  if (!mainBookImg.src.includes(address)) {
    let img = document.createElement("img");
    let card = document.createElement("div");
    let title = document.createElement("p");
    let link = document.createElement("a");
    img.src = `${address}`;
    img.className = "card-img";
    link.href = `book.html?id=${index}`;
    title.className = "card-title";
    card.className = "book-card";
    card.id = `img-div-${index}`;
    title.innerText = `${name}`;
    card.appendChild(title);
    card.appendChild(img);
    link.appendChild(card);
    similarBookContainer.appendChild(link);
  }
});

const imgcards = document.querySelectorAll(".book-card");

imgcards.forEach((card) => {
  card.addEventListener("click", () => {
    obj = imgs.find((obj) => obj.id === parseInt(card.id.split("-")[2]));
    console.log(obj);

    mainBookImg.src = obj.address;
    mainBookTitle.innerText = obj.bookName;
  });
});
