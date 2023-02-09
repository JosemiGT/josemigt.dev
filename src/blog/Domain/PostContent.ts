export class PostContent {

    public title : string;
    public description : string;
    public body : string;

    constructor (
        title : string, 
        description : string, 
        body : string) {
            
        this.title = title;
        this.description = description;
        this.body = body;
    }
}
