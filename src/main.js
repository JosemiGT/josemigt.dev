import { generateRibbonHTMLfromJSON } from "../blog/Infraestructure/generateRibbonHTMLfromJSON";

window.onload = function () {
    generateRibbonHTMLfromJSON("./assets/ribbon.json", "esp");
};
