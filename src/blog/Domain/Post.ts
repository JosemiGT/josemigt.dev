import { PostContent } from "./PostContent";
import { PostState } from "./PostState";

export class Post {

    public id : number;
    public author : string;
    public postState : PostState;
    public postContent : PostContent;
    public labels : string[];
    public postParentId : number | null;

    constructor (
        id: number, 
        author: string, 
        postState: PostState, 
        postContent: PostContent, 
        labels: string[], 
        postParentId: number | null = null) {

        this.id = id;
        this.author = author;
        this.postState = postState;
        this.postContent = postContent;
        this.labels = labels;
        this.postParentId = postParentId;
    }
}
