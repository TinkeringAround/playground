export const addStylesheet = (stylesheet) => {
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement("link");

    style.rel = "stylesheet";
    style.type = "text/css";
    style.href = stylesheet;

    head.appendChild(style);
}
