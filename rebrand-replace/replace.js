const color   = require('./json/color.json');
const replace = require('replace');

color.forEach(function(entry){

    if (entry.sass.old) {

        entry.sass.old.forEach(function(oldValue){

            replace({
                regex: "\\" + oldValue + "(?=;| )", // for exact matches
                replacement: entry.sass.new,
                paths: [
                    './styles/'
                ],
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
                paths: [
                    './styles/'
                ],
                excludeList: 'exclude.txt',
                include: '*.js',
                recursive: true,
                count: true,
                silent: false,
            });

        })
    }


});
