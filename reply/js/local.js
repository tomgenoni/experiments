const bookmark = document.querySelector("#bookmark");
const shade = document.querySelector("#shade");
const introScreen = document.querySelector("#introScreen");
const newScreen = document.querySelector("#newScreen");
const introMessage = document.querySelector("#introMessage");
const firstMessage = document.querySelector("#firstMessage");

const closeIntroScreen = document.querySelector("#closeIntroScreen");
const closeNewScreen = document.querySelector("#closeNewScreen");
const openNewScreen = document.querySelector("#openNewScreen");
const saveNewMessage = document.querySelector("#saveNewMessage");

const typeMessage = document.querySelector("#typeMessage");

bookmark.addEventListener("click", function() {
    shade.classList.add("is-active");
    introScreen.classList.add("is-active");
});

closeIntroScreen.addEventListener("click", function() {
    shade.classList.remove("is-active");
    introScreen.classList.remove("is-active");
});

openNewScreen.addEventListener("click", function(e) {
    newScreen.classList.add("is-active");
    // typeMessage.focus();
});

closeNewScreen.addEventListener("click", function() {
    newScreen.classList.remove("is-active");
});

saveNewMessage.addEventListener("click", function() {
    newScreen.classList.remove("is-active");
    introMessage.style.display = "none";
    firstMessage.style.display = "block";
});
