(function(){

    console.log("injecting...");

    var head   = document.getElementsByTagName('head')[0];
    var link   = document.createElement('link');
    var script = document.createElement('script');

    link.id   = 'local-css';
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = chrome.extension.getURL('style.css');
    link.media = 'all';
    head.appendChild(link);

    script.type = "text/javascript";
    script.src = chrome.extension.getURL('javascript.js');
    script.onload = function() {
        this.remove();
    };
    head.appendChild(script);

})();
