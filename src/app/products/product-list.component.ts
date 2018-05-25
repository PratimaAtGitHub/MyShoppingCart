import {Component, OnInit} from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./Product-list.component.css']
    
})
export class ProductListComponent implements OnInit{
    ngOnInit(): void {
       console.log('InOnInit');
    }
    pageTitle: string = 'Product List';
    imageWidth: number = 250;
   // imageMargin: number = 2;
    showImage : boolean = false;
    _listFilter: string;
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    

    filteredProducts: IProduct[];
    products:IProduct[] =
    [
        {
            "productId": 1,
            "productName": "2018 Porsche Macan",
            "productCode": "Macan",
            "releaseDate": "March 19, 2016",
            "description": "2018 Porsche Macan",
            "price": 100219.95,
            "starRating": 4.5,
            "imageUrl": "assets/images/Car1.jpg"
            //"imageUrl": "AC.png"
            
        },
        {
            "productId": 2,
            "productName": "Tata H5X Images",
            "productCode": "H5X",
            "releaseDate": "March 18, 2016",
            "description": "Tata H5X Images",
            "price": 62132.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/Car2.jpg"
        },
        {
            "productId": 5,
            "productName": "WagonR",
            "productCode": "WagonR",
            "releaseDate": "May 21, 2016",
            "description": "WagonR",
            "price": 65128.9,
            "starRating": 4.8,
            "imageUrl": "assets/images/Car3.jpg"
        },
        {
            "productId": 8,
            "productName": "BMW",
            "productCode": "GPC15H",
            "releaseDate": "May 15, 2016",
            "description": "BMW",
            "price": 99999.55,
            "starRating": 3.7,
            "imageUrl": "assets/images/Car4.jpg"
        },
    ];
    toggleImage(): void{
        this.showImage = !this.showImage;
    }
    constructor(){
        this.filteredProducts = this.products;
        this.listFilter = '';
    }
    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
                product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
        }

        onRatingClicked(message:string) :void{
            this.pageTitle = "Product List : " + message ;
        }
}