import { Yarn } from './yarn.model';


export class YarnService {

    private yarn: Yarn[] = [

        new Yarn('https://cdn.shopify.com/s/files/1/0286/1504/9309/products/faye-224-604_800x.jpg?v=1596391400', '1 Superfine Yarn', 'Click to learn more about Superfine yarn & purchase!','https://www.lionbrand.com/collections/yarn-weight-1-superfine/products/faye-yarn?variant=32421732778077'),

        new Yarn('https://cdn.shopify.com/s/files/1/0286/1504/9309/products/dotted-line-223-602_132_rt_800x.jpg?v=1596391368', '2 Fine Yarn','Click to learn more about Fine yarn & purchase!', 'https://www.lionbrand.com/collections/yarn-weight-2-fine/products/dotted-line-yarn?variant=32421732581469'),

        new Yarn('https://cdn.shopify.com/s/files/1/0286/1504/9309/products/sk-837-130_800x.jpg?v=1596404353','3 Light', 'Click to learn more about Light yarn & purchase!', 'https://www.lionbrand.com/collections/yarn-weight-3-light/products/truboo-yarn?variant=32421798084701'),

        new Yarn('https://cdn.shopify.com/s/files/1/0286/1504/9309/products/SK-544-205_800x.jpg?v=1596399233', '4 Medium Yarn','Click to learn more about Medium yarn & purchase!', 'https://www.lionbrand.com/collections/yarn-weight-4-medium/products/landscapes-fusion-yarn?variant=32648126890077'),

        new Yarn('https://cdn.shopify.com/s/files/1/0286/1504/9309/products/669-174_800x.jpg?v=1608537901','5 Bulky','Click to learn more about Bulky yarn & purchase!', 'https://www.lionbrand.com/collections/yarn-weight-5-bulky/products/woolspun-yarn?variant=32961744437341'),

        new Yarn('https://cdn.shopify.com/s/files/1/0286/1504/9309/products/sk-912-206_800x.jpg?v=1596404930', '6 Super Bulky', 'Click to learn more about Super Bulky yarn & purchase!', 'https://www.lionbrand.com/collections/yarn-weight-6-super-bulky/products/ice-cream-deluxe-yarn?variant=32421776654429' ),

        new Yarn('https://cdn.shopify.com/s/files/1/0286/1504/9309/products/SK-537-156_800x.jpg?v=1605038194', '7 Jumbo','Click to learn more about Jumbo yarn & purchase!', 'https://www.lionbrand.com/collections/yarn-weight-7-jumbo/products/vel-luxe-jumbo-yarn')
        
    ]

    constructor() {}

    displayYarn() {
        return this.yarn.slice();
    }
}