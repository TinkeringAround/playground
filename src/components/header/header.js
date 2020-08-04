import {addStylesheet} from "../../utility.js";

// Path to Headline Mapping
const HEADLINES = {
    "icons": "Icon Collection",
    "": ""
}

//==========================================================
const pathName = window.location.pathname.replace("/", "");

const header = document.getElementsByTagName("header")[0];
header.innerHTML = `
    <h1 class="logo withGradient">ThomasMaier.</h1>
   ${pathName !== "" ? 
    `<h2 class="subpage">${HEADLINES[pathName]}.</h2>` : ""}
`;


//==========================================================
addStylesheet("./components/header/header.css");
