//-Create a JavaScript file in the root of your project called reddit.js. 
import fetch from "isomorphic-fetch";                                                   //-Install isomorphic-fetch from npm and save it to your package.json file. 
import fs from "fs";
import {Article} from "./utils.js";

fetch("https://reddit.com/r/popular.json")                                              //-Use isomorphic-fetch to retrieve articles from https://reddit.com/r/popular.json.
    .then ((res) => res.json())                                                         //-Extract from each article title, url, and author 
    .then (({data: {children} }) =>  
    {                                                   //data need to go to the children and in here we will find the title, url and author
        let articles = children.map(   
            ({data}) => new Article(data.title, data.author, data.url)                 //-Push each extracted article to an array.
        
        );
        fs.writeFile("popular-articles.json", JSON.stringify(articles), (error) =>      //-Write the array to a file in the root of your project called popular-articles.json
        {
            if(error) console.error(error);
            else console.log("this worked too");
        });    
})
.catch((error) => console.error(error));
