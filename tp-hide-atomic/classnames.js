const boxes = document.querySelectorAll(".box");

boxes.forEach(function(box, i){
    let boxClasses = box.className.split(" ");
    boxClasses.shift();

    const code = box.parentElement.previousElementSibling;
    const codeClasses = boxClasses.join(' ');
    code.innerHTML = codeClasses;
})
