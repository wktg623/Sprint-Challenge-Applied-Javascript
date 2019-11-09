// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const divHeader = document.createElement('div');
    const spanDate = document.createElement('span');
    const h1 = document.createElement('h1');
    const spanTemp = document.createElement('span');

    divHeader.classList.add('header');
    spanDate.classList.add('date');
    spanTemp.classList.add('temp');

    divHeader.appendChild(spanDate);
    divHeader.appendChild(h1);
    divHeader.appendChild(spanTemp);
    

    spanDate.textContent = "March 28, 2019";
    h1.textContent = "Lambda Times";
    spanTemp.textContent = "98°";

    return divHeader;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());