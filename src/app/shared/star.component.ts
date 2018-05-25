import { Component, OnChanges, Input } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl : './star.component.html',
    styleUrls : ['./star.component.css']
})
export class StartComponent implements OnChanges{


    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }
    @Input() rating : number;
    starWidth : number;    
}