const color   = require('./json/color.json');
const replace = require('replace');

color.forEach(function(entry){
    entry.old.forEach(function(oldValue){

        replace({
          regex: "\\" + oldValue,
          replacement: entry.new,
          paths: [
              '/Users/tom/Sites/website/thumbprint/'
          ],
          excludeList: 'exclude.txt',
          include: '*.scss',
          recursive: true,
          count: true,
          silent: false,
        });

    })
})
