import { Stitch } from './stitch.model';

export class StitchService {

    private stitches: Stitch[] = [
        new Stitch('Single Crochet', 'Learn how to do a Single Crochet', 'https://www.thesprucecrafts.com/thmb/Fd_tzbSowLBSMjBZvwJEPvUPI38=/2800x1867/filters:fill(auto,1)/SingleCrochet1-5b2a82a504d1cf00361532e8.jpg'),

        new Stitch('Half Double Crochet', 'Learn how to do a Half Double Crochet', 'https://www.thesprucecrafts.com/thmb/rheMns3rOabkXJNOBEOjzgPcM1Y=/2800x1867/filters:fill(auto,1)/HalfDoubleCrochet1-5c5f21c046e0fb0001587590.jpg'),

        new Stitch('Double Crochet', 'Learn how to do a Double Crochet', 'https://www.sigonimacaroni.com/wp-content/uploads/2017/07/dc13.jpg')
    ]

    constructor() {}

    displayStitches() {
        return this.stitches.slice();
    }
}