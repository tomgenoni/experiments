console.log("injecto: js loaded");

const body = document.querySelector("body");
const content = document.querySelector("[data-algolia='content");
const aria = document.querySelectorAll("[aria-hidden='true");
const h1 = document.querySelector("h1");
const footer = document.createElement("footer");
footer.innerHTML = `
<div class="mt3 tp-body-3">
    <div>
        <a class="black-300 underline" href="https://thumbprint.design">thumbprint.design</a>
    </div>
    <div>
        <a class="black-300 underline" href="https://teamsanfrancisco.slack.com/messages/C0GKYQVTR">#design-systems</a>
    </div>
    <div>
        <a class="black-300 underline" href="https://thumbprint.design/notes/2018-11-06/">View online</a>
    </div>
</div>`;

// Remove things
aria.forEach(function(el) {
    el.remove();
});
h1.remove();

// Replace body with content
body.innerHTML = content.innerHTML;

// Remove all classes on elements
const els = document.querySelectorAll("*");
els.forEach(function(el) {
    el.classList = "";
});

body.appendChild(footer);

console.log("injecto: js complete");
