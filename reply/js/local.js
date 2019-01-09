const editMessage = document.querySelector("#editMessage");
const editScreen = document.querySelector("#editScreen");
const saveNewMessage = document.querySelector("#saveNewMessage");
const closeNewMessage = document.querySelector("#closeNewMessage");
const titleInput = document.querySelector("#titleInput");

editMessage.addEventListener("click", function() {
    editScreen.classList.add("is-active");
    titleInput.focus();
});

saveNewMessage.addEventListener("click", function() {
    editScreen.classList.remove("is-active");
});

closeNewMessage.addEventListener("click", function() {
    editScreen.classList.remove("is-active");
});
