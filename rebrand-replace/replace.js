const replace            = require('replace');

const color              = require('./json/color.json');
const colorImport        = require('./json/colorImport.json');
const paths              = ['./styles/'];

color.forEach(function(entry){

    if (entry.sass.old) {

        entry.sass.old.forEach(function(oldValue){

            replace({
                regex: "\\" + oldValue + "(?=;| )", // for exact matches
                replacement: entry.sass.new,
                paths: paths,
                excludeList: 'exclude.txt',
                include: '*.scss',
                recursive: true,
                count: true,
                silent: false,
            });

        })

    }

    if (entry.js.old) {

        entry.js.old.forEach(function(oldValue){

            replace({
                regex: oldValue,
                replacement: entry.js.new,
                paths: paths,
                excludeList: 'exclude.txt',
                include: '*.jsx',
                recursive: true,
                count: true,
                silent: false,
            });

        })
    }

});

// Change old color @imports to new tokens @import
// @import "@thumbtack/thumbprint-tokens/dist/scss/_index";

colorImport.old.forEach(function(oldValue){

    replace({
        regex: oldValue,
        replacement: colorImport.new,
        paths: paths,
        excludeList: 'exclude.txt',
        include: '*.scss',
        recursive: true,
        count: true,
        silent: false,
    });

})
