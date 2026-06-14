import books from "./database.js";

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const similarBookContainer = document.querySelector(".similar-book-container");

if (similarBookContainer) {
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
  document.getElementById("selected_book_genre").textContent=book.genre;

  books.forEach(function (item) {
    if (item.genre === book.genre && id !== item.id) {
    let ndiv = document.createElement("div");
    ndiv.className = "res_book";
    ndiv.innerHTML = `<a href='book.html?id=${item.id}'>
      <div class="res_img_con">
        <img src='${item.coverPage}' alt='${item.name}'>
      </div>
      <div class="res_book_name">
        <h3>${item.name}</h3>
        <p style="color: gray">by ${item.author}</p>
        <p style="background-color: rgb(200,200,200);padding:4px;border-radius:2px;display:flex;justify-content:center;align-items:center;width:120px;">${item.genre}</p>
      </div>
      </a>`;
  similarBookContainer.appendChild(ndiv);}
    }
  );
};

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

//for index

//find a book for each genre

let collectionArray = [
  ["Young Adult", "https://images.gr-assets.com/books/1447303603m/2767052.jpg"],
  ["Fantasy", "https://images.gr-assets.com/books/1474154022m/3.jpg"],
  ["Classics", "https://images.gr-assets.com/books/1361975680m/2657.jpg"],
  ["Fiction", "https://images.gr-assets.com/books/1303390735m/960.jpg"],
  ["Non-Fiction", "https://images.gr-assets.com/books/1358276407m/48855.jpg"],
  ["Mystery", "https://images.gr-assets.com/books/1339602131m/8442457.jpg"],
  ["Romance", "https://images.gr-assets.com/books/1385207843m/10818853.jpg"],
  [
    "Historical Fiction",
    "https://images.gr-assets.com/books/1390053681m/19063.jpg",
  ],
  ["Poetry", "https://images.gr-assets.com/books/1168052448m/30119.jpg"],
  ["Science Fiction", "https://images.gr-assets.com/books/1327656754m/11.jpg"],
  ["Children", "https://images.gr-assets.com/books/1174210942m/370493.jpg"],
  ["Humor", "https://images.gr-assets.com/books/1495278054m/7896527.jpg"],
  ["Drama", "https://images.gr-assets.com/books/1385738968m/3473.jpg"],
  ["Biography", "https://images.gr-assets.com/books/1327861368m/11084145.jpg"],
  ["Horror", "https://images.gr-assets.com/books/1213131305m/149267.jpg"],
  [
    "Graphic Novel",
    "https://images.gr-assets.com/books/1442239711m/472331.jpg",
  ],
  ["Contemporary", "https://images.gr-assets.com/books/1361098973m/345627.jpg"],
  ["Travel", "https://images.gr-assets.com/books/1320524083m/480479.jpg"],
  ["Self-Help", "https://images.gr-assets.com/books/1482865039m/52529.jpg"],
  ["History", "https://images.gr-assets.com/books/1478144278m/2203.jpg"],
  ["Science", "https://images.gr-assets.com/books/1333578746m/3869.jpg"],
  ["Religion", "https://images.gr-assets.com/books/1313518530m/1923820.jpg"],
  ["Thriller", "https://images.gr-assets.com/books/1399313258m/78129.jpg"],
  ["Philosophy", "https://images.gr-assets.com/books/1410136019m/629.jpg"],
  ["Business", "https://images.gr-assets.com/books/1366758683m/12609433.jpg"],
  ["Psychology", "https://images.gr-assets.com/books/1317793965m/11468377.jpg"],
  [
    "Spirituality",
    "https://placehold.co/400x600/333333/ffffff?text=A+New+Earth:+Awakening+to+Your+Life's+Purpose",
  ],
  ["Dystopian", "https://images.gr-assets.com/books/1349614200m/13453029.jpg"],
  ["Paranormal", "https://images.gr-assets.com/books/1388773547m/42900.jpg"],
];

const boxes = document.getElementById("box-container-1").children;
const boxesDub = document.getElementById("box-container-2").children;

collectionArray.forEach((el, i) => {
  let img = document.createElement("img");
  let imgDub = document.createElement("img");
  let genre = document.createElement("p");
  let genreDub = document.createElement("p");
  let redirectLink = document.createElement("a");
  let redirectLinkDub = document.createElement("a");

  //properties
  img.src = `${el[1]}`;
  img.className = "collection-box-img";
  imgDub.src = `${el[1]}`;
  imgDub.className = "collection-box-img";
  genre.innerText = `${el[0]}`;
  genre.className = "collection-box-name";
  genreDub.innerText = `${el[0]}`;
  genreDub.className = "collection-box-name";
  redirectLink.href =`catalog.html?genre=${el[0]}`;
  redirectLinkDub.href =`catalog.html?genre=${el[0]}`;

  //apending
  redirectLink.appendChild(img);
  redirectLink.appendChild(genre);
  redirectLinkDub.appendChild(imgDub);
  redirectLinkDub.appendChild(genreDub);
  boxes[i].appendChild(redirectLink);
  boxesDub[i].appendChild(redirectLinkDub);
});
