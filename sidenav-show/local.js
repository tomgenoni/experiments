const toggle = document.querySelector("#toggle");
const close = document.querySelector("#close");
const nav = document.querySelector("#nav");

toggle.addEventListener("click", function(){
    nav.classList.add("is-active")
})

close.addEventListener("click", function(){
    nav.classList.remove("is-active")
});
