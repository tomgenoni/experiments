console.log("---------");
console.log("inj: js start");
console.log("---------");

var colorMap = [
    {
        "name": "$tp-color__black",
        "old": ["#333333", "#000000"],
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
        "old": ["#0abae6", "#3f93f3"],
        "new": "#009fd9"
    },
    {
        "name": "$tp-color__green",
        "old": ["#3ac392"],
        "new": "#2db783"
    },
    {
        "name": "$tp-color__yellow",
        "old": ["#fbe002", "#ff9f02"],
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

var els = [
    'html','body','div','span','strong','form',
    'h1','h2','h3','h4','h5','h6',
    'a','button','table','tr','td',
    'figure','nav','ol','ul','li',
    'svg'
];

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

        // Only assign borderColor value if borderWidth is something other than "0px"
        // "0px" is returned when no borderWidth has been declared
        // Have to check each one individually as it will report an inhereted color

        if (window.getComputedStyle(el).borderTopWidth != "0px") {
            var borderTopColor = rgbToHex(window.getComputedStyle(el).borderTopColor);
        } else {
            borderTopColor = false;
        }

        if (window.getComputedStyle(el).borderRightWidth != "0px") {
            var borderRightColor = rgbToHex(window.getComputedStyle(el).borderRightColor);
        } else {
            borderRightColor = false;
        }

        if (window.getComputedStyle(el).borderBottomWidth != "0px") {
            var borderBottomColor = rgbToHex(window.getComputedStyle(el).borderBottomColor);
        } else {
            borderBottomColor = false;
        }

        if (window.getComputedStyle(el).borderLeftWidth != "0px") {
            var borderLeftColor = rgbToHex(window.getComputedStyle(el).borderLeftColor);
        } else {
            borderLeftColor = false;
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

                if (borderTopColor && borderTopColor == oldColor) {
                    el.style.borderTopColor = newColor;
                    doConsole("border-top-color", el, oldColor, newColor, newVarName, "   ");
                }
                if (borderRightColor && borderRightColor == oldColor) {
                    el.style.borderRightColor = newColor;
                    doConsole("border-right-color", el, oldColor, newColor, newVarName, "   ");
                }
                if (borderBottomColor && borderBottomColor == oldColor) {
                    el.style.borderBottomColor = newColor;
                    doConsole("border-bottom-color", el, oldColor, newColor, newVarName, "   ");
                }
                if (borderLeftColor && borderLeftColor == oldColor) {
                    el.style.borderLeftColor = newColor;
                    doConsole("border-left-color", el, oldColor, newColor, newVarName, "   ");
                }
            })
        })
    })
}

// Start the script
getSelectors(els);

console.log("---------");
console.log("inj: js complete");
