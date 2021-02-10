import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable()
export class FetchImageService {

    private API_KEY: string = environment.PIXABAY_API_KEY;
    private API_URL: string = environment.PIXABAY_API_URL;
    private URL: string = this.API_URL + this.API_KEY + '&q=crochet+yarn&image_type=photo';

    constructor() {}

    getImage() {
        return fetch(this.URL);
    }
}