export class Yarn {
    public imagePath: string;
    public name: string;
    public description: string;
    public url: string;
    

    constructor (imagePath: string, name: string, description: string, url: string) {
        this.imagePath = imagePath;
        this.name = name;
        this.description = description;
        this.url = url;
    }
}