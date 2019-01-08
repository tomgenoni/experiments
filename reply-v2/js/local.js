const bookmark = document.querySelector("#bookmark");
const shade = document.querySelector("#shade");
const introScreen = document.querySelector("#introScreen");
const newScreen = document.querySelector("#newScreen");
const introMessage = document.querySelector("#introMessage");
const firstMessage = document.querySelector("#firstMessage");

const closeIntroScreen = document.querySelector("#closeIntroScreen");
const editMessage = document.querySelector("#editMessage");
const editMessages = document.querySelector("#editMessages");
const openNewScreen = document.querySelector("#openNewScreen");
const saveNewMessage = document.querySelector("#saveNewMessage");

const typeMessage = document.querySelector("#typeMessage");

const editArrows = document.querySelectorAll(".editArrow");

bookmark.addEventListener("click", function() {
    shade.classList.add("is-active");
    introScreen.classList.add("is-active");
});

closeIntroScreen.addEventListener("click", function() {
    shade.classList.remove("is-active");
    introScreen.classList.remove("is-active");
    newScreen.style.display = "none";
});

openNewScreen.addEventListener("click", function(e) {
    newScreen.classList.add("is-active");
});

saveNewMessage.addEventListener("click", function() {
    newScreen.classList.remove("is-active");
    introMessage.style.display = "none";
    firstMessage.style.display = "block";
    editMessages.classList.remove("v-hidden");
    editMessages.classList.remove("is-active");
    editArrows.forEach(function(arrow) {
        arrow.classList.remove("is-active");
    });
});

editMessages.addEventListener("click", function() {
    editArrows.forEach(function(arrow) {
        arrow.classList.toggle("is-active");
    });
    this.classList.toggle("is-active");
});

editMessage.addEventListener("click", function(e) {
    newScreen.classList.add("is-active");
});
