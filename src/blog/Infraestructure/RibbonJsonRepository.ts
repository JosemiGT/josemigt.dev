import { Ribbon } from "../Domain/Ribbon";
import { RibbonRepository } from "../Domain/RibbonRepository"
import { readJSONData } from "./readJSONData";


export default class RibbonJsonRepository implements RibbonRepository  {

    public ribbonPath: string

    constructor(ribbonPath:string) {
        
        this.ribbonPath = ribbonPath
    }

    async get(language: string): Promise<Ribbon> {
       
        const ribbonValues = await readJSONData(this.ribbonPath)

        return new Ribbon(language, ribbonValues[language])
    }

}