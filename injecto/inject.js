(function(){

    console.log("inj: css start");

    var head   = document.getElementsByTagName('head')[0];
    var link   = document.createElement('link');
    var script = document.createElement('script');

    link.id   = 'local-css';
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    //link.href = chrome.extension.getURL('style.css');
    link.href = 'https://tomgenoni.github.io/experiments/injecto/style.css';
    link.media = 'all';
    head.appendChild(link);

    console.log("inj: css complete");

    script.type = "text/javascript";
    script.src = chrome.extension.getURL('javascript.js');
    //script.src = 'https://tomgenoni.github.io/experiments/injecto/javascript.js';
    script.onload = function() {
        this.remove();
    };
    head.appendChild(script);

})();
