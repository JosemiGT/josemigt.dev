import { Post } from "./Post";
import { Ribbon } from "./Ribbon";

export class Blog {

    public title : string;
    public ribbon : Ribbon;
    public posts : Post[];

    constructor (
        title : string, 
        menu: Ribbon, 
        posts: Post[]) {
            
        this.title = title;
        this.ribbon = menu;
        this.posts = posts;
    }
}
