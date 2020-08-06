export const addStylesheet = (stylesheet) => {
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement("link");

    style.rel = "stylesheet";
    style.type = "text/css";
    style.href = stylesheet;

    head.appendChild(style);
}

export const scrollTop = (timeout = 100) => {
    setTimeout(() =>
        window.scrollTo({top: 0, left: 0, behavior: "smooth"}), timeout);
}
