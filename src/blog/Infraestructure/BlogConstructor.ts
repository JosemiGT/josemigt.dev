export class BlogConstructor {

    private ribbonPath:string;
    private postsPath:string;

    constructor(
        ribbonPath:string,
        postsPath:string
    ){
        this.ribbonPath = ribbonPath;
        this.postsPath = postsPath;
    }
}