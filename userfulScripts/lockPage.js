export function lockPage(buttonSelector) {

    const win = window;
    const body = document.body;
    const button = document.querySelector(buttonSelector);
    let isLocked = false;
    let offset = false;

    button.addEventListener("click", e => {
        e.preventDefault();

        if (!isLocked) {

            body.classList.add("is-locked");
            offset = win.pageYOffset;
            console.log(offset);
            setStyles(offset);

        } else {

            body.classList.remove("is-locked");
            unsetStyles();
            win.scrollTo(0, offset);

        }

        isLocked = !isLocked;

    });

    function setStyles(offset) {
        Object.assign(body.style, {
            position: "fixed",
            top: -offset + "px",
            left: "0",
            width: "100%",
            height: "100%",
            overflow: "hidden"
        });
    }

    function unsetStyles() {
        Object.assign(body.style, {
            position: "",
            top: "",
            left: "",
            width: "",
            height: "",
            overflow: ""
        });
    }

}