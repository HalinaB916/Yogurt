function buy() {
    let name = prompt("What is your name?");
    let email = prompt("What is your email address?");  

    alert("Thank you " + name + "! We'll be in touch by email, meanwhile have lot of Yogurt!");
}

let button = document.querySelector("button");
button.addEventListener("click", buy);