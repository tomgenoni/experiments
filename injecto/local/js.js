console.log("injecto: js loaded");

const body = document.querySelector("body");
const content = document.querySelector("[data-algolia='content");
const aria = document.querySelectorAll("[aria-hidden='true");
const h1 = document.querySelector("h1");
const footer = document.createElement("footer");

footer.innerHTML = `
<div class="mt5 bt b-gray-300 pt3">
    <div>
        <a class="black-300 underline" href="https://thumbprint.design">thumbprint.design</a>
    </div>
    <div>
        <a class="black-300 underline" href="https://teamsanfrancisco.slack.com/messages/C0GKYQVTR">#design-systems</a>
    </div>
    <div>
        <a class="black-300 underline" href="${window.location}">View online</a>
    </div>
</div>`;

// Remove aria labels and the H1
aria.forEach(function(el) {
    el.remove();
});
h1.remove();

// Replace body with content
body.innerHTML = content.innerHTML;

// Remove all classes on all elements
const els = document.querySelectorAll("*");
els.forEach(function(el) {
    el.classList = "";
});

// Add the footer html
body.appendChild(footer);

console.log("injecto: js complete");
