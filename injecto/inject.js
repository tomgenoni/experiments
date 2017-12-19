(function(){

    console.log("injecting css and js");

    var head   = document.getElementsByTagName('head')[0];
    var link   = document.createElement('link');
    var script = document.createElement('script');

    link.id   = 'local-css';
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://tomgenoni.github.io/experiments/injecto/style.css';
    link.media = 'all';
    head.appendChild(link);

    script.type = "text/javascript";
    //script.src = chrome.extension.getURL('javascript.js');
    script.src = 'https://tomgenoni.github.io/experiments/injecto/javascript.js';
    script.onload = function() {
        this.remove();
    };
    head.appendChild(script);

})();
