import books from "./database.js";

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const similarBookContainer = document.querySelector(".similar-book-container");

let mainBookImg = document.getElementById("main-book");
let mainBookTitle = document.getElementById("book-title");
let description = document.getElementById("book-description");
let auhthor = document.getElementById("author");
let pages = document.getElementById("pages");
let published = document.getElementById("published");
let language = document.getElementById("language");

const book = books.find((book) => book.id === id);

if (book) {
  mainBookImg.src = book.coverPage;
  mainBookTitle.textContent = book.name;
  description.innerText = book.description;
  auhthor.innerHTML = `by <b>${book.author}</b>`;
  pages.innerHTML = `pages <b>${book.numberOfPages}</b>`;
  published.innerHTML = `published <b>${book.publishDate}</b>`;
  language.innerHTML = `Language <b>${book.language}</b>`;
}

books.forEach((obj) => {
  let name = obj.name;
  let coverPage = obj.coverPage;
  let index = obj.id;

  //generating boook divs
  if (!mainBookImg.src.includes(coverPage)) {
    let img = document.createElement("img");
    let card = document.createElement("div");
    let title = document.createElement("p");
    let link = document.createElement("a");
    img.src = `${coverPage}`;
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
    const obj = books.find((obj) => obj.id === parseInt(card.id.split("-")[2]));
    console.log(obj);

    mainBookImg.src = obj.coverPage;
    mainBookTitle.innerText = obj.name;
    description.innerText = obj.description;
    auhthor.innerHTML = `by <b>${obj.author}</b>`;
    pages.innerHTML = `pages <b>${obj.numberOfPages}</b>`;
    published.innerHTML = `published <b>${obj.publishDate}</b>`;
    language.innerHTML = `Language <b>${obj.language}</b>`;
  });
});
