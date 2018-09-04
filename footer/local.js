const sections = document.querySelectorAll(".section-title");

function toggleSection(){
    this.classList.toggle("is-active")
}

sections.forEach(function(section){
    section.addEventListener("click", toggleSection)
})
