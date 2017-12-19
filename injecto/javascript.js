console.log("---------");
console.log("inj: js start");
console.log("---------");

var colorMap = [
    {
        "old": ["#333333","#000000"],
        "new": "#001c26"
    },
    {
        "old": ["#6d7273", "#858b8c"],
        "new": "#526166"
    },
    {
        "old": ["#ced6d9"],
        "new": "#d3d4d5"
    },
    {
        "old": ["#e6f0f2", "#f0f6f7"],
        "new": "#e9eced"
    },
    {
        "old": ["#f7fafb"],
        "new": "#fafafa"
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

function doConsole(property, el, oldColor, newColor, spacer) {
    //console.log("inj: " + property + " on " + el.tagName + ", class: '" + el.classList + "', " + oldColor + " > " + newColor );
    console.log("inj: " + property + spacer + " : " + oldColor + " > " + newColor + " on " + el.tagName + ", class: '" + el.classList + "'" );
}

function testSelectors(arr) {
    arr.forEach(function(el) {

        var color = rgbToHex(getComputedStyle(el).color);
        var bkgColor = rgbToHex(getComputedStyle(el).backgroundColor);
        var borderColor = rgbToHex(getComputedStyle(el).borderColor);


        colorMap.forEach(function(pair){
            var newColor = pair.new;
            pair.old.forEach(function(oldColor){
                if (color == oldColor) {
                    el.style.color = newColor;
                    doConsole("color", el, oldColor, newColor, "          ")
                }
                if (bkgColor == oldColor) {
                    el.style.backgroundColor = newColor;
                    doConsole("backgroud-color", el, oldColor, newColor, "")
                }
                if (borderColor == oldColor) {
                    el.style.borderColor = newColor;
                    doConsole("border-color", el, oldColor, newColor, "   ")
                }
            })
        })
    })
}


var els = ['html','body','div','span','strong','form'];
getSelectors(els);

console.log("---------");
console.log("inj: js complete");
