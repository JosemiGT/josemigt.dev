import { Post } from "./Post";

export interface PostRepository {
    get(language:string, labels:string[]) : Promise<Post[]>;
}