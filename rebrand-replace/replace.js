const replace            = require('replace');

const color              = require('./json/color.json');
const colorImport        = require('./json/colorImport.json');
const colorOrange        = require('./json/colorOrange.json');
const paths              = ['/Users/tom/Sites/website/thumbprint/'];
//const paths              = ['./test/'];

// node replace.js js sass import

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

// Change all the Sass color variables
if ( process.argv.includes("scss") || process.argv.includes("all") ) {

    // Swap out TPv1 orange variables for TPv2 orange variables
    // eg. $orange > $tp-color__ui__brand
    // These will eventually be replaced by indigo or blue

    colorOrange.forEach(function(entry){
        if (entry.sass.old) {
            entry.sass.old.forEach(function(oldValue){
                // this matches: $foo; $foo, and $foo[space]
                var regex = "\\" + oldValue + "(?=;|,|\\)| )";
                var replacement = entry.sass.new;
                var include = '*.scss';
                var excludeList = 'excludeList.txt';

                replaceValues(regex, replacement, include, excludeList);
            })
        }
    });

    color.forEach(function(entry){
        if (entry.sass.old) {
            entry.sass.old.forEach(function(oldValue){
                // this matches: $foo; $foo, and $foo[space]
                var regex = "\\" + oldValue + "(?=;|,|\\)| )";
                var replacement = entry.sass.new;
                var include = '*.scss';
                var excludeList = 'excludeList.txt';

                replaceValues(regex, replacement, include, excludeList);
            })
        }
    });
}

// Change all the React color variables
if ( process.argv.includes("react") || process.argv.includes("all") ) {
    color.forEach(function(entry){
        if (entry.js.old) {
            entry.js.old.forEach(function(oldValue){
                var regex = oldValue;
                var replacement = entry.js.new;
                var include = '*.jsx, *.js';
                var excludeList = 'excludeList.txt';

                replaceValues(regex, replacement, include, excludeList);
            })
        }
    });
}

// Change old color @imports to new tokens @import
// @import "@thumbtack/thumbprint-tokens/dist/scss/_index";
if ( process.argv.includes("import") || process.argv.includes("all") ) {
    colorImport.old.forEach(function(oldValue){
        var regex = oldValue;
        var replacement = colorImport.new;
        var include = '*.scss';
        var excludeList = 'excludeListImport.txt';

        replaceValues(regex, replacement, include, excludeList);
    });
}
