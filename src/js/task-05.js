const refs = {
    input: document.querySelector("#name-input"),
    spanName: document.querySelector("#name-output"),
}
refs.input.addEventListener("input", onInputSpanName);

function onInputSpanName(event){
    refs.spanName.textContent = event.currentTarget.value;
    if(event.currentTarget.value === ''){
        refs.spanName.textContent = "Anonymous" ;  
    }
    
};