import fs from "fs";                                                //In server.js Import (require) path and fs. 
import path from "path";
import faker from "faker";                                          //added faker so it will provide information and we dont' have to make it up. change data to have this



class Chirp                                                         //create an array of chirp objects
{
    constructor (author, content)
    {
        this.author = author;
        this.content = content;
        this.characters = content.length;
    }
}

const arr =
[
    new Chirp 
    (
        faker.name.findName(),
        faker.random.words(parseInt(Math.random() *30))
    ),
    new Chirp 
    (
        faker.name.findName(),
        faker.random.words(parseInt(Math.random() *30))
    ),
    new Chirp 
    (
        faker.name.findName(),
        faker.random.words(parseInt(Math.random() *30))
    ),
    new Chirp 
    (
        faker.name.findName(),
        faker.random.words(parseInt(Math.random() *30))
    ),
    new Chirp 
    (
        faker.name.findName(),
        faker.random.words(parseInt(Math.random() *30))
    ),
]

fs.writeFile ("chirps.json", JSON.stringify(arr), (error) =>           //Write the array to a file in the root of the project called chirps.json
{
    if (error)
    {
      console.error(error);  
    } else console.log("this worked");
});