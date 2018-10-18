const boxes = document.querySelectorAll(".box");

boxes.forEach(function(box, i){
    let boxClasses = box.className.split(" ");
    boxClasses.shift();

    boxClasses.forEach(function(item){
        if (item.includes("db")) {
            const boxWrap = box.parentElement;
            boxWrap.classList.add("box-display");
        }
    });

    const code = box.parentElement.previousElementSibling.querySelector(".code");
    const codeClasses = boxClasses.join(' ');
    code.innerHTML = codeClasses;
})
