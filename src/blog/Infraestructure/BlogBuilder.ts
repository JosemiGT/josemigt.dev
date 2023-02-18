import { RibbonRepository } from "../Domain/RibbonRepository";
import { PostRepository } from "../Domain/PostRepository";
import { Ribbon } from "../Domain/Ribbon";
import { Post } from "../Domain/Post";

export class BlogBuilder {

    private currentLabels: string[];
    private language: string;
    private ribbonRepository: RibbonRepository;
    private postRepository: PostRepository;

    constructor(
        language:string,
        currentLabels:string[],
        ribbonRepository:RibbonRepository,
        postRepository:PostRepository
    ){
        this.language = language;
        this.currentLabels = currentLabels;
        this.ribbonRepository = ribbonRepository;
        this.postRepository = postRepository;
    }

    async initBlog () {

        //TODO: Configuración de idioma.
        //TODO: Modo oscuro / modo claro

        const [ribbon, posts] = await Promise.all([
            this.ribbonRepository.get(this.language), 
            this.postRepository.get(this.language, this.currentLabels)
        ])

        await Promise.all([
            this.ribbonViewBuilder(ribbon),
            this.postsViewBuilder(posts)
        ])
    }

    async readPost (id:number) {
        //TODO: Borra vista de posts.
        //Crea
    }

    async ribbonViewBuilder(ribbon:Ribbon) {

        const select = document.createElement("select");

        ribbon.labels.forEach(label => {
            const option = document.createElement("option");
            option.value = label;
            option.text = label;
            select.appendChild(option);
        })

        const header = document.querySelector("header");
        header.appendChild(select);
    }

    async postsViewBuilder(posts:Post[]) {
        //TODO: Lógica para pintar la vista de posts.
        return
    }
}