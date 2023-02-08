import { readJSONData } from "./readJSONData";

export async function generateRibbonHTMLfromJSON (ribbonPath, language) {
    const ribbonValues = await readJSONData(ribbonPath);
    const select = document.createElement("select");

    // Crea un elemento option por cada valor en la lista
    ribbonValues[language].forEach(value => {
        const option = document.createElement("option");
        option.value = value;
        option.text = value;
        select.appendChild(option);
    });

    // Agrega el elemento select al DOM
    const header = document.querySelector("header");
    header.appendChild(select);
}
