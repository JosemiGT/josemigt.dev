import { readJSONData } from "./readJSONData";

export async function generateBlogHTML(
    ribbonPath:string, 
    postsPath:string) {

        const ribbonData = readJSONData(ribbonPath);
        const postData = readJSONData(postsPath);
    
}