// change color heading 2
const h2s = document.getElementsByTagName("h2");
for (const h2 of h2s) {
    h2.style.color = "lightblue";
}

// change backpack section color
const backpack = document.getElementById("backpack");
backpack.style.backgroundColor = "tomato";

// change border redious of card
const cardBorder = document.getElementsByClassName("card");
for (const cardStyle of cardBorder) {
    cardStyle.style.borderRadius = "30px";
}

// when click it will show in console
const sliderBtn = document.getElementsByClassName("console-js");
for (const stockUpdate of sliderBtn) {
    stockUpdate.addEventListener("click", function () {
        console.log("This product not available Now! Please wait few days.");
    });
}

// email validation

const inputEmail = document.getElementById("input-email");
const submiEmail = document.getElementById("submit-email");

inputEmail.addEventListener("keyup", function (email) {
    if (email.target.value == "email") {
        submiEmail.removeAttribute("disabled");
    } else {
        submiEmail.setAttribute("disabled", true);
    }
});

// change color by dubble click
const changeBg = document.getElementById("subscribe");
changeBg.addEventListener('dblclick',function () {
    changeBg.style.backgroundColor = "skyblue"
})