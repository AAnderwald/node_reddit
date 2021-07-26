//create this file to hold what want from article. with use reddit to get this info. on reddit line 4 infor is imported

export  class Article 
{
    constructor(title, author, url, id)                     //added id for the advanced part
    {
        this.title = title;
        this.author = author;
        this.url = url;
        this.id = id;
    }
}