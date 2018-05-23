import {Component} from '@angular/core';


@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
    
})
export class ProductListComponent{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage : boolean = false;
    listFilter: string ='cart';
    
    products:any[] =
    [
        {
            "productId": 1,
            "productName": "Air Conditioners",
            "productCode": "GSXC18/DSXC18",
            "releaseDate": "March 19, 2016",
            "description": "Air Conditioners",
            "price": 219.95,
            "starRating": 4.5,
            "imageUrl": "assets/images/AC.png"
            //"imageUrl": "AC.png"
            
        },
        {
            "productId": 2,
            "productName": "Heat Pumps",
            "productCode": "GSZC18/DSZC18",
            "releaseDate": "March 18, 2016",
            "description": "Heat Pumps",
            "price": 132.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/HP.png"
        },
        {
            "productId": 5,
            "productName": "gas-furnaces",
            "productCode": "GMVM97",
            "releaseDate": "May 21, 2016",
            "description": "gas-furnaces",
            "price": 128.9,
            "starRating": 4.8,
            "imageUrl": "assets/images/GasFurnance.png"
        },
        {
            "productId": 8,
            "productName": "Packaged Units",
            "productCode": "GPC15H",
            "releaseDate": "May 15, 2016",
            "description": "Packaged Units",
            "price": 211.55,
            "starRating": 3.7,
            "imageUrl": "assets/images/PC.png"
        },
        // {
        //     "productId": 10,
        //     "productName": "Video Game Controller",
        //     "productCode": "GMG-0042",
        //     "releaseDate": "October 15, 2015",
        //     "description": "Standard two-button video game controller",
        //     "price": 35.95,
        //     "starRating": 4.6,
        //     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
        // }
    ];
    toggleImage(): void{
        this.showImage = !this.showImage;
    }


    

}