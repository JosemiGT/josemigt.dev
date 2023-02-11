import RibbonJsonRepository from "./RibbonJsonRepository";

export class BlogConstructor {

    private ribbonPath: string;
    private postsPath: string;
    private currentLabels: string[];
    private language: string;
    private ribbonJsonRepository: RibbonJsonRepository;

    constructor(
        ribbonPath:string,
        postsPath:string,
        currentLabels:string[],
        language:string
    ){
        this.ribbonPath = ribbonPath;
        this.postsPath = postsPath;
        this.currentLabels = currentLabels;
        this.language = language;
        this.ribbonJsonRepository = new RibbonJsonRepository(ribbonPath);
    }

    initBlog () {

        //TODO: Configuración de idioma.
        //TODO: Modo oscuro / modo claro

        //TODO: Obtiene datos Ribbon
        RibbonJsonRepository
        //TODO: Obtiene datos posts

        //TODO: Construir Ribbon.
        //TODO: Construir vista de posts
    }

    readPost (id:number) {
        //TODO: Borra vista de posts.
        //Crea
    }
}