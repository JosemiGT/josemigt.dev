import { Post } from "../Domain/Post";
import { PostRepository } from "../Domain/PostRepository";


export default class PostsMarkdawnRepository implements PostRepository {

    public postsPath: string

    constructor(postsPath:string) {
        
        this.postsPath = postsPath
    }


    get(language: string, labels: string[]): Promise<Post[]> {
        throw new Error("Method not implemented.");
    }

}