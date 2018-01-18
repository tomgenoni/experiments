const replace            = require('replace');

const color              = require('./json/color.json');
const colorImport        = require('./json/colorImport.json');
const colorOrange        = require('./json/colorOrange.json');
const font               = require('./json/font.json');
const fontWeight         = require('./json/fontWeight.json');
const paths              = ['/Users/tom/Sites/thumbprint-ui/packages'];
//const paths              = ['./test/'];

function replaceValues(regex, replacement, include, excludeList) {
    replace({
        regex: regex, // for exact matches
        replacement: replacement,
        paths: paths,
        excludeList: excludeList,
        include: include,
        recursive: true,
        count: true,
        silent: false,
    });
}


if ( process.argv.includes("font") ) {
    font.forEach(function(entry){
        entry.html.old.forEach(function(oldValue){
            var regex = oldValue + "(?!-)";
            var replacement = entry.html.new;
            var include = '*.html, *.js, *.jsx, *.scss';
            var excludeList = 'excludeList.txt';

            replaceValues(regex, replacement, include, excludeList);
        })

        entry.js.old.forEach(function(oldValue){
            var regex = oldValue;
            var replacement = entry.js.new;
            var include = '*.html, *.js, *.jsx, *.scss';
            var excludeList = 'excludeList.txt';

            replaceValues(regex, replacement, include, excludeList);
        })
    });
}

if ( process.argv.includes("weight") ) {
    fontWeight.forEach(function(entry){
        entry.old.forEach(function(oldValue){
            // Lookahead for colon
            var regex = "font-weight: " + oldValue + ";";
            var replacement = "font-weight: " + entry.new + ";";
            var include = '*.html, *.js, *.jsx, *.scss';
            var excludeList = 'excludeList.txt';

            replaceValues(regex, replacement, include, excludeList);
        })
    });
}


//
// // Change all the Sass color variables
// if ( process.argv.includes("scss") || process.argv.includes("all") ) {
//
//     // Swap out TPv1 orange variables for TPv2 orange variables
//     // eg. $orange > $tp-color__ui__brand
//     // These will eventually be replaced by indigo or blue
//
//     colorOrange.forEach(function(entry){
//         if (entry.sass.old) {
//             entry.sass.old.forEach(function(oldValue){
//                 // negative lookahead to distinguish beteeen $sky4 and $sky
//                 var regex = "\\" + oldValue + "(?![0-9]|-)";
//                 var replacement = entry.sass.new;
//                 var include = '*.scss';
//                 var excludeList = 'excludeList.txt';
//
//                 replaceValues(regex, replacement, include, excludeList);
//             })
//         }
//     });
//
//     color.forEach(function(entry){
//         if (entry.sass.old) {
//             entry.sass.old.forEach(function(oldValue){
//                 // negative lookahead to distinguish beteeen $sky4 and $sky and $sky-
//                 var regex = "\\" + oldValue + "(?![0-9]|-)";
//                 var replacement = entry.sass.new;
//                 var include = '*.scss';
//                 var excludeList = 'excludeList.txt';
//
//                 replaceValues(regex, replacement, include, excludeList);
//             })
//         }
//     });
// }
//
// // Change all the React color variables
// if ( process.argv.includes("react") || process.argv.includes("all") ) {
//     color.forEach(function(entry){
//         if (entry.js.old) {
//             entry.js.old.forEach(function(oldValue){
//                 var regex = oldValue;
//                 var replacement = entry.js.new;
//                 var include = '*.jsx, *.js';
//                 var excludeList = 'excludeList.txt';
//
//                 replaceValues(regex, replacement, include, excludeList);
//             })
//         }
//     });
// }
//
// // Change old color @imports to new tokens @import
// // @import "@thumbtack/thumbprint-tokens/dist/scss/_index";
// if ( process.argv.includes("import") || process.argv.includes("all") ) {
//     colorImport.old.forEach(function(oldValue){
//         var regex = oldValue;
//         var replacement = colorImport.new;
//         var include = '*.scss';
//         var excludeList = 'excludeListImport.txt';
//
//         replaceValues(regex, replacement, include, excludeList);
//     });
// }
//
// // Change any hex code in SVGs
// if ( process.argv.includes("svg") ) {
//     color.forEach(function(entry){
//         if (entry.hex.old) {
//             entry.hex.old.forEach(function(oldValue){
//                 // negative lookahead to distinguish beteeen $sky4 and $sky
//                 var regex = oldValue;
//                 var replacement = entry.hex.new;
//                 var include = '*.svg';
//                 var excludeList = 'excludeList.txt';
//
//                 replaceValues(regex, replacement, include, excludeList);
//             })
//         }
//     });
// }
