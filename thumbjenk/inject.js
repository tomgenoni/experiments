(function(){

    console.log("injecting...");
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = 'thumbpress-css';
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://s3.amazonaws.com/thumbprint/test/new.css';
    link.media = 'all';
    head.appendChild(link);

})();
