export async function readJSONData (path : string) {
    const response = await fetch(path);
    const data = await response.json();
    return data;
}
