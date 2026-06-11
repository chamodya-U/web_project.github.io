const imgs = [
  {
    id: 1,
    bookName: "Three Men in a Boat",
    address: "src/bookimg/81tb8gsbcRL._AC_UF1000,1000_QL80_.jpg.jpeg",
    genres: ["Classic", "Adventure", "Humor"],
  },
  {
    id: 2,
    bookName: "Diary of a Wimpy Kid: Rodrick Rules",
    address: "src/bookimg/9781419716256_diary_of_a_wimpy_kid9_3.jpg.jpeg",
    genres: ["Children's", "Humor", "Coming-of-Age"],
  },
  {
    id: 3,
    bookName: "Diary of a Wimpy Kid: The Third Wheel",
    address: "src/bookimg/9781419741968.jpg.jpeg",
    genres: ["Children's", "Humor", "Coming-of-Age"],
  },
  {
    id: 4,
    bookName: "Pride and Prejudice",
    address: "src/bookimg/IMG_1879.JPG.jpeg",
    genres: ["Romance", "Classic", "Literary Fiction"],
  },
  {
    id: 5,
    bookName: "The Secret Garden",
    address: "src/bookimg/IMG_1880.JPG.jpeg",
    genres: ["Children's", "Fantasy", "Classic"],
  },
  {
    id: 6,
    bookName: "Anne of Green Gables",
    address: "src/bookimg/IMG_1881.JPG.jpeg",
    genres: ["Classic", "Children's", "Coming-of-Age"],
  },
  {
    id: 7,
    bookName: "Charlotte's Web",
    address: "src/bookimg/IMG_1882.JPG.jpeg",
    genres: ["Children's", "Fantasy", "Classic"],
  },
  {
    id: 8,
    bookName: "A Wrinkle in Time",
    address: "src/bookimg/IMG_1901.JPG.jpeg",
    genres: ["Science Fiction", "Children's", "Fantasy"],
  },
  {
    id: 9,
    bookName: "Harriet the Spy",
    address: "src/bookimg/IMG_1902.JPG.jpeg",
    genres: ["Children's", "Adventure", "Mystery"],
  },
  {
    id: 10,
    bookName: "The Giver",
    address: "src/bookimg/IMG_1904.JPG.jpeg",
    genres: ["Science Fiction", "Dystopian", "Children's"],
  },
  {
    id: 11,
    bookName: "Chasing Headlines",
    address: "src/bookimg/IMG_1906.JPG.jpeg",
    genres: ["Contemporary", "Young Adult", "Romance"],
  },
  {
    id: 12,
    bookName: "The Summer I Turned Pretty",
    address: "src/bookimg/IMG_1907.JPG.jpeg",
    genres: ["Young Adult", "Romance", "Coming-of-Age"],
  },
  {
    id: 13,
    bookName: "This Lullaby",
    address: "src/bookimg/IMG_1908.JPG.jpeg",
    genres: ["Young Adult", "Romance", "Contemporary"],
  },
  {
    id: 14,
    bookName: "The Alchemist",
    address: "src/bookimg/IMG_1910.JPG.jpeg",
    genres: ["Fantasy", "Adventure", "Philosophical"],
  },
  {
    id: 15,
    bookName: "The Great Gatsby",
    address: "src/bookimg/IMG_1911.JPG.jpeg",
    genres: ["Classic", "Literary Fiction", "Romance"],
  },
  {
    id: 16,
    bookName: "Taming Flame",
    address: "src/bookimg/IMG_1912.JPG.jpeg",
    genres: ["Science Fiction", "Romance", "Young Adult"],
  },
  {
    id: 17,
    bookName: "Diary of a Wimpy Kid",
    address: "src/bookimg/IMG_1914.JPG.jpeg",
    genres: ["Children's", "Humor", "Coming-of-Age"],
  },
  {
    id: 18,
    bookName: "Good Omens",
    address: "src/bookimg/IMG_1916.JPG.jpeg",
    genres: ["Fantasy", "Comedy", "Adventure"],
  },
  {
    id: 19,
    bookName: "Diary of a Wimpy Kid",
    address: "src/bookimg/IMG_1917.JPG.jpeg",
    genres: ["Children's", "Humor", "Coming-of-Age"],
  },
  {
    id: 20,
    bookName: "To Kill a Mockingbird",
    address: "src/bookimg/IMG_1919.JPG.jpeg",
    genres: ["Classic", "Literary Fiction", "Drama"],
  },
];

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
