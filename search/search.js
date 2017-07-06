// Vars
// ------------------------------------------------------
var search      = document.querySelector("#search");
var searchInput = document.querySelector("#searchInput");
var json        = "allPackages.json";
var hits     = []

// Events
// ------------------------------------------------------
search.addEventListener('submit', getData);

// Handlers
// ------------------------------------------------------

function unscope(str) {
    var unscoped = str.split("/");
    return unscoped[1];
}

function getData(event) {
    event.preventDefault();
    $.getJSON(json, collectHits);
}

function collectHits(data) {
    var searchTerm = searchInput.value;
    Object.keys(data).forEach(function(key) {
        var content = data[key].readme;
        if (content.includes(searchTerm)) {
            var hit = {
                name: data[key].name,
                version: data[key].version
            }
            hits.push(hit);
        }
    });
    getResults(hits, searchTerm);
}

function getResults(hits, searchTerm) {
    if (hits.length > 0) {
        hits.forEach(function(hit){
            var hitURL = "/docs/" + unscope(hit.name) + "/" + hit.version + "/index.html";
            console.log(hitURL, searchTerm);
        })
    } else {
        console.log("SOL");
    }
}
