export default function (condition: boolean) {
    if (condition) {
        document.body.style.overflow = "hidden";
    }
    else {
        document.body.style.overflow = "";
    }
}