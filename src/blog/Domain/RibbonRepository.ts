import { Ribbon } from "./Ribbon";

export interface RibbonRepository {

    get(language:string) : Promise<Ribbon>;
}