const formEl = document.querySelector(".login-form");


formEl.addEventListener("submit", onButtonClick )
function onButtonClick (event) {
    event.preventDefault() ;
    console.log("hi")
    const formData = new FormData(event.currentTarget);
    const object = {};

    if( event.currentTarget.elements.email.value === "" || event.currentTarget.elements.password.value === ""){
        alert("В форме есть незаполненные поля");
    } else {
        formData.forEach((value, name) => {
            console.log(value, name);
            object[name] = value;
        });
    }
    console.log(object);
    event.currentTarget.reset();
}


