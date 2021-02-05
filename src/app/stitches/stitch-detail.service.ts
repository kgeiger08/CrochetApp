import { Stitch } from './stitch.model';

export class StitchDetailService {

    private stitchDetail: Stitch[] = [
        new Stitch('Single Crochet (sc)', 'Step 1: Insert the hook into the work (second chain from hook on the starting chain)*.  Step 2: Yarn over and pull up a loop.  Step 3: Yarn over again and pull the yarn through both loops on the hook.  Step 4: 1 sc made.  Step 5: Insert hook into next stitch; repeat from * in Step 1.', 'https://i.pinimg.com/originals/30/c7/5e/30c75e5540f5066ca23bafbb898aa41b.jpg'),

        new Stitch('Half Double Crochet (hdc)', 'Step 1: Yarn over and insert the hook into the work (third chain from hook on the starting chain). Step 2: * Yarn over and draw through pulling up a loop. Step 3: Yarn over again and pull yarn through all three loops on the hook. Step 4: 1 hdc made. Yarn over, insert hook into next stitch; repeat from * in Step 2.', 'https://amigurumi.today/wp-content/uploads/2016/07/basic-crochet-stitches-tutorial-how-to-crochet-half-double-crochet-hdc.jpg'),

        new Stitch('Double Crochet (dc)', 'Step 1: Yarn over and insert the hook into the work (fourth chain from hook on starting chain). Step 2: * Yarn over and draw yarn through pulling up a loop. Step 3: Yarn over and pull yarn through the first two loops only on the hook. Step 4: Yarn over and pull yarn through the last two loops on the hook. Step 5: 1 dc made. Yarn over, insert hook into next stitch; repeat from * in Step 2.', 'https://amigurumi.today/wp-content/uploads/2016/07/basic-crochet-stitches-tutorial-how-to-crochet-double-crochet-dc.jpg')
    ]

    constructor() {}

    displayStitchDetail(index: number) {
        return this.stitchDetail[index];
    }
}