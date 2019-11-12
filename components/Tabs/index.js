// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const newTab = document.querySelector('.topics');

function Tabs (newTabs){

    const divTab = document.createElement('div')

    divTab.classList.add('tab');
    
    

divTab.textContent = "topic here";


   return divTab;
}




axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {

    //const dataArray = Object.keys(topics);
    //console.log(response)
    
    Object.keys(response).forEach(el => newTab.append(Tabs(el)));
  
})
.catch(error => {
    console.log(error);
})
//data.topics