console.log("---------");
console.log("inj: js start");
console.log("---------");

var colorMap = [
    {
        "name": "blue-200",
        "old": ["#94beee"],
        "new": "#b3ebff"
    },
    {
        "name": "blue-300",
        "old": ["#70acf1"],
        "new": "#79d2f2"
    },
    {
        "name": "blue",
        "old": ["#0abae6", "#3f93f3"],
        "new": "#009fd9"
    },
    {
        "name": "blue-500",
        "old": ["#287ddd"],
        "new": "#007fad"
    },
    {
        "name": "indigo",
        "old": ["#455fcf"],
        "new": "#5968e2"
    },
    {
        "name": "purple",
        "old": ["#8b71de"],
        "new": "#a97ff0"
    },
    {
        "name": "green-200",
        "old": ["#93dbc2","#a6d5ae"],
        "new": "#c6f7da"
    },
    {
        "name": "green-300",
        "old": ["#62cca7"],
        "new": "#73e4a2"
    },
    {
        "name": "green",
        "old": ["#3ac392","#63cb76"],
        "new": "#2db783"
    },
    {
        "name": "yellow-200",
        "old": ["#ffb742","#f9cf62"],
        "new": "#ffebb3"
    },
    {
        "name": "yellow",
        "old": ["#fbe002","#ff9f02","#fbb90e"],
        "new": "#febe14"
    },
    {
        "name": "red-200",
        "old": ["#f2a494","#ff9796"],
        "new": "#ffd9d9"
    },
    {
        "name": "red-300",
        "old": ["#f28974","#ff6e6d"],
        "new": "#ffb0b0"
    },
    {
        "name": "red",
        "old": ["#f16a4f","#ff4847"],
        "new": "#ff5a5f"
    },
    {
        "name": "black-300",
        "old": ["#6d7273", "#858b8c","#8d9494"],
        "new": "#526166"
    },
    {
        "name": "black",
        "old": ["#333333", "#000000","#312f2f","#4e4d4d"],
        "new": "#001c26"
    },
    {
        "name": "gray-200",
        "old": ["#f7fafb","#f4f4f4"],
        "new": "#fafafa"
    },
    {
        "name": "gray-300",
        "old": ["#e6f0f2", "#f0f6f7","#e1e3e3","#edeeee"],
        "new": "#e9eced"
    },
    {
        "name": "gray",
        "old": ["#ced6d9","#bdc4c4"],
        "new": "#d3d4d5"
    }
]

var els = [
    'html','body','div','span','strong','form',
    'h1','h2','h3','h4','h5','h6',
    'a','button','table','tr','td',
    'figure','nav','ol','ul','li','section',
    'svg','rect','input'
];

// Functions

function rgbToHex(rgb) {
    var a = rgb.split("(")[1].split(")")[0];
    a = a.split(",");
    if (a.length <= 3 ) {
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
        var fillColor = rgbToHex(window.getComputedStyle(el).fill);

        console.log(color, bkgColor, fillColor);

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
                    doConsole("color", el, oldColor, newColor, newVarName, "              ");
                }
                if (bkgColor == oldColor) {
                    el.style.backgroundColor = newColor;
                    doConsole("backgroud-color", el, oldColor, newColor, newVarName, "    ");
                }
                if (fillColor == oldColor) {
                    el.style.fill = newColor;
                    doConsole("fill", el, oldColor, newColor, newVarName, "               ");
                }

                if (borderTopColor && borderTopColor == oldColor) {
                    el.style.borderTopColor = newColor;
                    doConsole("border-top-color", el, oldColor, newColor, newVarName, "   ");
                }
                if (borderRightColor && borderRightColor == oldColor) {
                    el.style.borderRightColor = newColor;
                    doConsole("border-right-color", el, oldColor, newColor, newVarName, " ");
                }
                if (borderBottomColor && borderBottomColor == oldColor) {
                    el.style.borderBottomColor = newColor;
                    doConsole("border-bottom-color", el, oldColor, newColor, newVarName, "");
                }
                if (borderLeftColor && borderLeftColor == oldColor) {
                    el.style.borderLeftColor = newColor;
                    doConsole("border-left-color", el, oldColor, newColor, newVarName, "  ");
                }
            })
        })
    })
}

// Start the script
getSelectors(els);

console.log("---------");
console.log("inj: js complete");
