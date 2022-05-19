const inputEL = document.querySelector("#validation-input");

inputEL.addEventListener("blur", onInputBlur);

function onInputBlur (event){
// console.log("hi");

console.log(Number(event.currentTarget.dataset.length));
console.log(event.currentTarget.value.length);
event.currentTarget.classList.remove("invalid")

if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)){
    console.log(event.currentTarget.value.length);
    event.currentTarget.classList.add("valid")
    
} else {
    console.log(event.currentTarget.value.length);
    event.currentTarget.classList.add("invalid")
}
};  



