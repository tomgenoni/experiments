const box = document.querySelector("#boxes");
const boxes = document.querySelectorAll("#boxes li");
const dots = document.querySelectorAll("#dots li");
const boxesNum = boxes.length;

dots.forEach(function(dot) {
    dot.addEventListener("click", dotTrigger);
});

function dotTrigger(e) {
    const indexNew = [...this.parentElement.children].indexOf(this);
    const indexOld = parseInt(box.dataset.index);
    let diff = indexNew - indexOld;

    const arr = [];

    boxes.forEach(function(item) {
        arr.push(item.style.order);
    });

    box.dataset.index = indexNew;

    dots.forEach(function(dot) {
        dot.classList.remove("is-active");
    });

    this.classList.add("is-active");

    if (diff != 0) {
        if (diff > 0) {
            const value = -(diff * 100);
            box.className = "slide-left";
            box.style.transform = `translateX( ${value}%)`;
            setTimeout(function() {
                for (i = 0; i < diff; i++) {
                    arr.unshift(arr.pop());
                }
                box.classList.remove("slide-left");
                box.removeAttribute("style");
                setOrder();
            }, 500);
        } else {
            diff = Math.abs(diff);
            for (i = 0; i < diff; i++) {
                arr.push(arr.shift());
            }
            setOrder();
            box.className = "slide-right";
            const value = diff * 100;
            box.style.transform = `translateX( ${value}%)`;
            box.style.left = `${-value}%`;

            setTimeout(function() {
                box.classList.remove("slide-right");
                box.removeAttribute("style");
            }, 500);
        }
    }
    function setOrder() {
        boxes.forEach(function(box, i) {
            box.style.order = arr[i];
        });
    }
}
