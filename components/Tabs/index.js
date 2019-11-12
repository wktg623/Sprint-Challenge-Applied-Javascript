// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



// function Tabs (newTabs){
// console.log(newTabs)
//     const divTab = document.createElement('div')

//     divTab.classList.add('tab');
//     divTab.textContent = 
//     newTab.appendChild(divTab);
   
    
   
// return divTab;
// }





const newTab = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
//console.log(response);
    //const dataArray = Object.keys(topics);
    //console.log(dataArray)
    response.data.topics.forEach(topic => {
    const divTab = document.createElement('div');
    divTab.classList.add('tab');
    divTab.textContent = topic;
    newTab.appendChild(divTab);
    })

    
})

.catch(error => {
    console.log(error);
})
//data.topics