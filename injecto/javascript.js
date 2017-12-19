console.log("injecto js is loading");

//const els = ['a'];

function rgbToHex(rgb) {
    var a = rgb.split("(")[1].split(")")[0];
    a = a.split(",");
    var b = a.map(function(x){             //For each array element
        x = parseInt(x).toString(16);      //Convert to a base16 string
        return (x.length==1) ? "0"+x : x;  //Add zero if we get only one character
    })
    var hex = "#"+b.join("");
    return hex;
}


var a = document.querySelectorAll("a");

a.forEach(function(el){
    var foo = getComputedStyle(el).color;
    if ( rgbToHex(foo) == "#3f93f3" ) {
        el.style.color = "red";
    }
})

var item = document.querySelectorAll("div");

item.forEach(function(el){
    var foo = getComputedStyle(el).backgroundColor;
    if ( rgbToHex(foo) == "#f7fafb" ) {
        el.style.backgroundColor = "red";
    }
})



// var body = document.querySelector("body");
//
// var bar = getComputedStyle(body).backgroundColor;
//
// if ( rgbToHex(bar) == "#f7fafb" ) {
//     body.style.backgroundColor = "red";
// }
