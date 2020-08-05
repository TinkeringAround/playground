import {addStylesheet} from "../../utility.js";

// Path to Headline Mapping
const HEADLINES = {
    "icons": "Icon Collection",
    "designs": "Designs"
}

//==========================================================
const pathName = window.location.pathname.replace("/", "");
const subpage = pathName !== "" ? `<h2 class="subpage">${HEADLINES[pathName]}.</h2>` : "";

const header = document.createElement("header");
header.innerHTML = `<h1 class="logo withGradient">ThomasMaier.</h1>${subpage}`;

//==========================================================
addStylesheet("./components/header/header.css");
document.body.prepend(header);
