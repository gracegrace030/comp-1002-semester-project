// Toggle Navigation
const btn_menu = document.getElementById("btn_menu");
const menu_full = document.getElementById("menu");
const btn_back_menu = document.querySelector("#menu .btn_back");

btn_menu.addEventListener("click", () => {
    menu_full.classList.toggle("show");
})

btn_back_menu.addEventListener("click", () => {
    menu_full.classList.toggle("show");
})

// Popup
const btn_customize = document.getElementById("btn_customize");
const popup = document.getElementById("popup");
const btn_back_popup = document.querySelector("#popup .btn_back");
const form_p1 = document.querySelector(".form_p1");
const form_p2 = document.querySelector(".form_p2");
const btn_next_form1 = document.querySelector(".form_p1 .btn_next");
const btn_prev_form2 = document.querySelector(".form_p2 .btn_prev");
const patternChoice = document.getElementById("cushion_pattern");
const colorArr = document.querySelectorAll(".form_p1 input");
const patternArr = document.querySelectorAll(".form_p2 option");

btn_customize.addEventListener("click", () => {
    popup.classList.add("show");
})

btn_back_popup.addEventListener("click", () => {
    popup.classList.remove("show");
})

btn_next_form1.addEventListener("click", ()=>{
    form_p1.style.display = "none";
    form_p2.style.display = "block";
})

btn_prev_form2.addEventListener("click", ()=>{
    form_p1.style.display = "block";
    form_p2.style.display = "none";
})

//Radio Buttons
colorArr[0].addEventListener("click", () =>{
    document.getElementById("previewer").style.backgroundImage = "url(./image/cushion_white.jpg)";
})

colorArr[1].addEventListener("click", () =>{
    document.getElementById("previewer").style.backgroundImage = "url(./image/cushion_black.jpg)";
})

colorArr[2].addEventListener("click", () =>{
    document.getElementById("previewer").style.backgroundImage = "url(./image/cushion_red.jpg)";
})

// Dropdown
document.querySelector(".form_p2 select").addEventListener("change", ()=>{
    let priceTag = document.querySelectorAll("fieldset .price span");

    if(patternArr[0].selected){
        document.getElementById("previewer").style.backgroundImage = "url(./image/cushion_white.jpg)";
        priceTag[0].innerHTML = 200;
        priceTag[1].innerHTML = 200;

    }
    else if (patternArr[1].selected){
        document.getElementById("previewer").style.backgroundImage = "url(./image/cushion_grid.png)";
        priceTag[0].innerHTML = 220;
        priceTag[1].innerHTML = 220;
    }
    else if (patternArr[2].selected){
        document.getElementById("previewer").style.backgroundImage = "url(./image/cushion_flower.png)";
        priceTag[0].innerHTML = 220;
        priceTag[1].innerHTML = 220;
    };
})



//Price Check
function calculatePrice(){
    const patternChoiceIndex = document.getElementById("cushion_pattern").selectedIndex;
    let cushionPrice = 200;
    if (patternChoiceIndex === 0){
        cushionPrice = 200;
    }
    else {
        cushionPrice = 220;
    }
    return cushionPrice;
}

patternChoice.addEventListener("mouseout", () =>{
    let cushionPrice = calculatePrice();
    let priceTag = document.querySelectorAll("fieldset .price span");
    priceTag[0].innerHTML = cushionPrice;
    priceTag[1].innerHTML = cushionPrice;
})