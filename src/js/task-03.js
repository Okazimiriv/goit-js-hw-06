const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesList = document.querySelector('.gallery');
imagesList.style.display = 'flex';
imagesList.style.justifyContent = 'space-between';

 const makeImageCard = ({ url, alt }) => {
 imagesList.insertAdjacentHTML('beforeend', `<li> <img 
      src="${url}" 
       alt="${alt}" height = 1000>      
</li>`);  
  
  return;
};

const elements = images.map(makeImageCard);

//___________________________

// const imagesList = document.querySelector('.gallery');
// console.log(imagesList);

// const makeImageCard = ({ url, alt }) => {
//   const itemEl = document.createElement('li');

//   const imageEl = document.createElement('img');
//   imageEl.src = url;
//   imageEl.alt = alt;

//   itemEl.appendChild(imageEl);

//   return itemEl;
// };

// const elements = images.map(makeImageCard);
// console.log(elements);

// imagesList.append(...elements)





