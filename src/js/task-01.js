const listItems = document.querySelectorAll('.item');
console.log('Number of categories: ', listItems.length);

listItems.forEach(function (number, index) {
  
const listTitle = listItems[index].querySelector('h2');
console.log('Category: ', listTitle.textContent); 
  
const listElem = listTitle.nextElementSibling.querySelectorAll('li');
console.log('Elements: ', listElem.length);
});

