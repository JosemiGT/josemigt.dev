import { BlogBuilder } from "./blog/Infraestructure/BlogBuilder";
import PostsMarkdownRepository from "./blog/Infraestructure/PostsMarkdownRepository";
import RibbonJsonRepository from "./blog/Infraestructure/RibbonJsonRepository";
import "./main.css";

window.onload = function () {

    const blogBuilder = new BlogBuilder(
        "esp", 
        [""], 
        new RibbonJsonRepository("./data/ribbon.json"),
        new PostsMarkdownRepository("./data/posts"))

    blogBuilder.initBlog();
};
