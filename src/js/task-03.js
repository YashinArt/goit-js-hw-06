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

const imagesEl = document.querySelector(".gallery")

const image = ({ url, alt }) => {
  return `<li class="list"><img class="img__width" src = ${url} alt = '${alt}' width="250"></li>`;
};

const imagesElMap = images.map(image).join('');
console.log(image);

imagesEl.insertAdjacentHTML('beforebegin', imagesElMap);



// =>{
  
//   // const imageElli = document.createElement('li');
//   // const imageElamg = document.createElement('img');
//   // imageElamg.src = image.url;
//   // imageElamg.alt =image.alt;
//   // imageElamg.width = '250';
  
//   imageElli.append(imageElamg)
//   imagesEl.append(imageElli)
//   imageElli.insertAdjacentHTML('beforebegin', imageElamg.alt);
//   console.log(imagesEl);
// });






