// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.



function createCard(newCard){
    const divCard = document.createElement('div');
    const divHeadline = document.createElement('div');
    const divAuthor = document.createElement('div');
    const divImg = document.createElement('div');
    const imgAuthor = document.createElement('img');
    const spanAuthor = document.createElement('span');


    divCard.classList.add('card');
    divHeadline.classList.add('headline');
    divAuthor.classList.add('author');
    divImg.classList.add("img-container");

    divCard.appendChild(divHeadline);
    divCard.appendChild(divAuthor);
    divAuthor.appendChild(divImg);
    divImg.appendChild(imgAuthor);
    divCard.appendChild(spanAuthor);

    divHeadline.textContent = newCard.headline;
    divImg.src = newCard["authorPhoto"];
    spanAuthor.textContent = newCard.author;


}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response)
const articlesDiv = document.querySelector('.cards-container');
response.articles.forEach(item => articlesDiv.append(createCard(item)))

})
.catch(error => {
        console.log(error)

});