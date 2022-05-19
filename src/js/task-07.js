const inputEL = document.querySelector("#font-size-control");
const spanEL = document.querySelector("#text");

inputEL.addEventListener('input', onChangeFontSize);
function onChangeFontSize(event){
    console.log(event.currentTarget.value);
    spanEL.style.fontSize = event.currentTarget.value+"px"
};



