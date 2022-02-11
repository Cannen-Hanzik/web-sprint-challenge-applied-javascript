import axios from "axios";

const Card = (article) => {
   const cardWrapper = document.createElement("div");
  const cardHeadline = document.createElement("div");
  const cardAuthor = document.createElement("div");
  const cardImg = document.createElement("div");
  const image = document.createElement("img");
  const cardName = document.createElement("span");

  cardWrapper.appendChild(cardHeadline);
  cardWrapper.appendChild(cardAuthor);
  cardAuthor.appendChild(cardImg);
  cardImg.appendChild(image);
  cardAuthor.appendChild(cardName);

  cardWrapper.classList.add("card");
  cardHeadline.classList.add("headline");
  cardAuthor.classList.add("author");
  cardImg.classList.add("img-container");

  image.src = article.authorPhoto;
  cardHeadline.textContent = article.headline;
  cardName.textContent = `By ${article.authorName}`;

  cardWrapper.addEventListener("click", () => {
    console.log(article.headline);
  });

  return cardWrapper;
};
 // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
const cardAppender = (selector) => {
  axios.get("http://localhost:5000/api/articles")
    .then((resp) => {
      const cardElement = document.querySelector(selector);
      Object.values(resp.data.articles).forEach((articleArray) => {
        articleArray.forEach((articleObj) => {
          cardElement.appendChild(Card(articleObj));
        });
      });
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("DONE");
    });
};
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
export { Card, cardAppender };