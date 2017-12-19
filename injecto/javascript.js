console.log("inj: js start");

var colorMap = [
    {
        "old": ["#333333","#000000"],
        "new": "#001c26"
    },
    {
        "old": ["#6d7273", "#858b8c"],
        "new": "#526166"
    }
]

function rgbToHex(rgb) {
    var a = rgb.split("(")[1].split(")")[0];
    a = a.split(",");
    if (a.length <= 3 ) {
        //console.log(a);
        var b = a.map(function(x){             // For each array element
            x = parseInt(x).toString(16);      // Convert to a base16 string
            return (x.length==1) ? "0"+x : x;  // Add zero if we get only one character
        })
        var hex = "#"+b.join("");
        return hex;
    }
}

function getSelectors() {
    els.forEach(function(el){
        var elements = document.querySelectorAll(el);
        testSelectors(elements);
    })
}

function testSelectors(arr) {
    arr.forEach(function(el) {

        var color = rgbToHex(getComputedStyle(el).color);
        var bkgColor = rgbToHex(getComputedStyle(el).backgroundColor);

        colorMap.forEach(function(pair){
            var newColor = pair.new;
            pair.old.forEach(function(oldColor){
                if (color == oldColor) {
                    el.style.color = newColor;
                    console.log("inj: color on " + el.tagName + ", class: '" + el.classList + "', " + oldColor + " > " + newColor );
                }
                if (bkgColor == oldColor) {
                    el.style.backgroundColor = newColor;
                    console.log("inj: background-color on " + el.tagName + ", class: '" + el.classList + "', " + oldColor + " > " + newColor );
                }
            })
        })
    })
}


var els = ['html','body','div','span','strong'];



// var a = document.querySelectorAll("a");
//
// a.forEach(function(el){
//     var foo = getComputedStyle(el).color;
//     if ( rgbToHex(foo) == "#3f93f3" ) {
//         el.style.color = "red";
//     }
// })
//
// var item = document.querySelectorAll("div");
//
// item.forEach(function(el){
//     var foo = getComputedStyle(el).backgroundColor;
//     if ( rgbToHex(foo) == "#f7fafb" ) {
//         el.style.backgroundColor = "red";
//     }
// })



// var body = document.querySelector("body");
//
// var bar = getComputedStyle(body).backgroundColor;
//
// if ( rgbToHex(bar) == "#f7fafb" ) {
//     body.style.backgroundColor = "red";
// }

getSelectors(els);

console.log("injecto: js loaded");
