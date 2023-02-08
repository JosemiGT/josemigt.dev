export class PostState {
    constructor (blogId, version, state, publicationDate, modificationDate) {
        this.blogId = blogId;
        this.version = version;
        this.state = state;
        this.publicationDate = publicationDate;
        this.modificationDate = modificationDate;
    }
}
