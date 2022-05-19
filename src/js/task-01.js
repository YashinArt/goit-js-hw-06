
const navEl = document.querySelector("#categories");
console.log("Numder of categories:" + navEl.children.length);


// const navElAnimals = document.querySelector("h2");
// const catege = navElAnimals.textContent;
// console.log("Category:" + catege);

// const navAnimals = navElAnimals.nextElementSibling;
// console.log("Element:" + navAnimals.children.length);




const navElItem = document.querySelectorAll(".item");
// console.log(navElItem)

const test = navElItem.forEach((iter)=>{


   const nameiter =  iter.children[0].textContent
   const numberIter = iter.lastElementChild.children.length

    console.log(nameiter)
    console.log("Category:" + numberIter)
})