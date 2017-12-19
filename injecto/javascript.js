console.log("---------");
console.log("inj: js start");
console.log("---------");

var colorMap = [
    {
        "name": "$tp-color__black",
        "old": ["#333333","#000000"],
        "new": "#001c26"
    },
    {
        "name": "$tp-color__black-200",
        "old": ["#6d7273", "#858b8c"],
        "new": "#526166"
    },
    {
        "name": "$tp-color__gray",
        "old": ["#ced6d9"],
        "new": "#d3d4d5"
    },
    {
        "name": "$tp-color__gray-200",
        "old": ["#e6f0f2", "#f0f6f7"],
        "new": "#e9eced"
    },
    {
        "name": "$tp-color__gray-100",
        "old": ["#f7fafb"],
        "new": "#fafafa"
    },
    {
        "name": "$tp-color__blue",
        "old": ["#0abae6","#3f93f3"],
        "new": "#009fd9"
    },
    {
        "name": "$tp-color__green",
        "old": ["#3ac392"],
        "new": "#2db783"
    },
    {
        "name": "$tp-color__yellow",
        "old": ["#fbe002","#ff9f02"],
        "new": "#febe14"
    },
    {
        "name": "$tp-color__red",
        "old": ["#f16a4f"],
        "new": "#ff5a5f"
    },
    {
        "name": "$tp-color__indigo",
        "old": ["#455fcf"],
        "new": "#5968e2"
    },
    {
        "name": "$tp-color__purple",
        "old": ["#8b71de"],
        "new": "#a97ff0"
    }
]

var els = ['html','body','div','span','strong','form','h1','h2','h3','h4','h5','h6','a','table','tr','td','figure','nav','ol','ul','li'];

// Functions

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

function doConsole(property, el, oldColor, newColor, newVarName, spacer) {
    console.log("inj: " + property + spacer + " : " + oldColor + " > " + newColor + " (" + newVarName + ") on " + el.tagName + ", class: '" + el.classList + "'" );
}

function testSelectors(arr) {
    arr.forEach(function(el) {

        var color = rgbToHex(window.getComputedStyle(el).color);
        var bkgColor = rgbToHex(window.getComputedStyle(el).backgroundColor);

        // Only get borderColor value if border width something other than "0px"
        if (window.getComputedStyle(el).borderWidth != "0px") {
            var borderColor = rgbToHex(window.getComputedStyle(el).borderColor);
        } else {
            borderColor = false;
        }

        colorMap.forEach(function(colorData){
            var newColor = colorData.new;
            var newVarName = colorData.name;

            colorData.old.forEach(function(oldColor){
                if (color == oldColor) {
                    el.style.color = newColor;
                    doConsole("color", el, oldColor, newColor, newVarName, "          ");
                }
                if (bkgColor == oldColor) {
                    el.style.backgroundColor = newColor;
                    doConsole("backgroud-color", el, oldColor, newColor, newVarName, "");
                }
                // If borderWidth value is not "0px"
                if (borderColor && borderColor == oldColor) {
                    el.style.borderColor = newColor;
                    doConsole("border-color", el, oldColor, newColor, newVarName, "   ");
                }
            })
        })
    })
}

// Start the script
getSelectors(els);

console.log("---------");
console.log("inj: js complete");
