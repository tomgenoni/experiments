(function() {
    console.log("injecto: start");
    console.log("-------");

    // Indicate if local assets should be used. Change to false to use remote assets.
    const local = false;

    // Edit remove URLs as needed.
    const source = {
        local: {
            css: "local/style.css",
            js: "local/javascript.js"
        },
        remote: {
            css:
                "https://tomgenoni.github.io/experiments/injecto/local/style.css",
            js: "https://tomgenoni.github.io/experiments/injecto/local/js.js"
        }
    };

    //----------------------------------------------
    //------- Don't edit below this line ----------

    const head = document.getElementsByTagName("head")[0];
    const link = document.createElement("link");
    const script = document.createElement("script");

    //------- Build style tag to include CSS ----------

    link.id = "local-css";
    link.rel = "stylesheet";
    link.type = "text/css";
    link.media = "all";

    //------- Build script tag include js ----------

    script.type = "text/javascript";

    //------- Determine local or remote sources ----------

    if (local) {
        link.href = chrome.extension.getURL(source.local.css);
        script.src = chrome.extension.getURL(source.local.js);
    } else {
        link.href = source.remote.css;
        script.src = source.remote.js;
    }

    //------- Inject CSS & JS ----------

    head.appendChild(link);
    head.appendChild(script);

    if (local) {
        console.log(`injecto: ${source.local.css} appended`);
        console.log(`injecto: ${source.local.js} appended`);
    } else {
        console.log(`injecto: ${source.remote.css} appended`);
        console.log(`injecto: ${source.remote.js} appended`);
    }

    console.log("-------");
    console.log("injecto: end");
})();