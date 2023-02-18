import { Post } from "../Domain/Post";
import { PostRepository } from "../Domain/PostRepository";


export default class PostsMarkdownRepository implements PostRepository {

    public postsPath: string

    constructor(postsPath:string) {
        
        this.postsPath = postsPath
    }


    get(language: string, labels: string[]): Promise<Post[]> {
        this.getMarkdawnFiles();

        return null
    }
    async getMarkdawnFiles() {
        const response = await fetch(this.postsPath);
        console.log(response);
        // const markdownFilenames = filenames.filter((f) => f.endsWith(".md"));
      
        // await Promise.all(markdownFilenames.map(updateFrontMatter));
      }
}