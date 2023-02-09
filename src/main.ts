import { generateRibbonHTMLfromJSON } from "./blog/Infraestructure/generateRibbonHTMLfromJSON";
import "./main.css";

window.onload = function () {
    generateRibbonHTMLfromJSON("./posts/ribbon.json", "esp");
};
