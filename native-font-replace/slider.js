const slider = document.querySelector("#slider");
const nativeExamples = document.querySelectorAll(".native");
const webfontExamples = document.querySelectorAll(".webfont");

function setNativeOpacity(value) {
    const webFontOpacity = 1 - value;
    console.log(webFontOpacity);
    webfontExamples.forEach(function(example){
        example.style.opacity = webFontOpacity;
    })
}

function setWebfontOpacity(value) {
    nativeExamples.forEach(function(example){
        example.style.opacity = value;
    })
}

slider.oninput = function() {
    const opacityValue = this.value / 100;
    setNativeOpacity(opacityValue);
    setWebfontOpacity(opacityValue);
}
