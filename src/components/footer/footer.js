import { addStylesheet } from "../../utility.js";

//==========================================================
const footer = document.createElement("footer");
footer.innerHTML = `<a class="reference" aria-label="Go to Thomas Maier Website" href="https://thomasmaier.netlify.app/">
    Made with Love by <strong>Thomas Maier.</strong>
</a>`;

//==========================================================
addStylesheet("./components/footer/footer.css");
document.body.appendChild(footer);
