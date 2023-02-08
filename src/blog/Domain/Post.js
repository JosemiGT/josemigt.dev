export class Post {
    constructor (id, author, postState, postContent, labels, postParentId) {
        this.id = id;
        this.author = author;
        this.postState = postState;
        this.postContent = postContent;
        this.labels = labels;
        this.postParentId = postParentId;
    }
}
