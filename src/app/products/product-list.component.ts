import {Component, OnInit} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./Product-list.component.css']
    
})
export class ProductListComponent implements OnInit{
    
    constructor( private _providerService : ProductService  ){ }
    
    ngOnInit(): void {
       this.products = this._providerService.getProducts();
       this.filteredProducts = this.products;
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
    products:IProduct[] = [];
    toggleImage(): void{
        this.showImage = !this.showImage;
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