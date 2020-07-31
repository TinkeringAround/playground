import {addStylesheet} from "../../utility.js";

//==========================================================
const header = document.getElementsByTagName("header")[0];
header.innerHTML = `<h1 class="logo withGradient">ThomasMaier.</h1>`;

//==========================================================
addStylesheet("./components/header/header.css");
