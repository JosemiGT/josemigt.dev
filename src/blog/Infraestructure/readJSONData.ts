import { Ribbon } from "../Domain/Ribbon";

export async function readJSONData<T> (path : string) {
    const response = await fetch(path);
    const data : T = await response.json();
    return data;
}
