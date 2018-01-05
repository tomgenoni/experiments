const replace            = require('replace');

const color              = require('./json/color.json');
const colorImport        = require('./json/colorImport.json');
const colorOrange        = require('./json/colorOrange.json');
const paths              = ['/Users/tom/Sites/website/thumbprint/'];
//const paths              = ['./test/'];

// node replace.js js sass import

function replaceValues(regex, replacement, include) {
    replace({
        regex: regex, // for exact matches
        replacement: replacement,
        paths: paths,
        excludeList: 'exclude.txt',
        include: include,
        recursive: true,
        count: true,
        silent: false,
    });
}

// Change all the Sass color variables
if ( process.argv.includes("scss") ) {

    // Swap out TPv1 orange variables for TPv2 orange variables
    // eg. $orange > $tp-color__ui__brand
    // These will eventually be replaced by indigo or blue

    colorOrange.forEach(function(entry){
        if (entry.sass.old) {
            entry.sass.old.forEach(function(oldValue){
                var regex = "\\" + oldValue + "(?=;| )";
                var replacement = entry.sass.new;
                var include = '*.scss';

                replaceValues(regex, replacement, include);
            })
        }
    });


    color.forEach(function(entry){
        if (entry.sass.old) {
            entry.sass.old.forEach(function(oldValue){
                var regex = "\\" + oldValue + "(?=;| )";
                var replacement = entry.sass.new;
                var include = '*.scss';

                replaceValues(regex, replacement, include);
            })
        }
    });
}

// Change all the React color variables
if ( process.argv.includes("react") ) {
    color.forEach(function(entry){
        if (entry.js.old) {
            entry.js.old.forEach(function(oldValue){
                var regex = oldValue;
                var replacement = entry.js.new;
                var include = '*.jsx, *.js';

                replaceValues(regex, replacement, include);
            })
        }
    });
}

// Change old color @imports to new tokens @import
// @import "@thumbtack/thumbprint-tokens/dist/scss/_index";
if ( process.argv.includes("import") ) {
    colorImport.old.forEach(function(oldValue){
        var regex = oldValue;
        var replacement = colorImport.new;
        var include = '*.scss';

        replaceValues(regex, replacement, include);
    });
}
