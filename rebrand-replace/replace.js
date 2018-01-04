const color   = require('./json/color.json');
const replace = require('replace');

color.forEach(function(entry){
    entry.sass.old.forEach(function(oldValue){

        replace({
          regex: "\\" + oldValue + "(?=;| )",
          replacement: entry.sass.new,
          paths: [
              '/Users/tom/Sites/website/thumbprint/globals'
          ],
          excludeList: 'exclude.txt',
          include: '*.scss',
          recursive: true,
          count: true,
          silent: false,
        });

    })
})


//searchText.replace(/\$foo(?=;| )/gm, "\\$bar")
