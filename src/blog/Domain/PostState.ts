export class PostState {

    public blogId : number;
    public version : number;
    public state : State;
    public publicationDate : Date;
    public modificationDate : Date;


    constructor (
        blogId : number, 
        version : number, 
        state : State, 
        publicationDate: Date, 
        modificationDate : Date) {
            
        this.blogId = blogId;
        this.version = version;
        this.state = state;
        this.publicationDate = publicationDate;
        this.modificationDate = modificationDate;
    }
}
