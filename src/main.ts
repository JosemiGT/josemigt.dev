import { BlogBuilder } from "./blog/Infraestructure/BlogBuilder";
import PostsMarkdawnRepository from "./blog/Infraestructure/PostsMarkdawnRepository";
import RibbonJsonRepository from "./blog/Infraestructure/RibbonJsonRepository";
import "./main.css";

window.onload = function () {

    const blogBuilder = new BlogBuilder(
        "esp", 
        [""], 
        new RibbonJsonRepository("./posts/ribbon.json"),
        new PostsMarkdawnRepository(""))
};
