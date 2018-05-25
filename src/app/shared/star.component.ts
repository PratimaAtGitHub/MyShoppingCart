import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl : './star.component.html',
    styleUrls : ['./star.component.css']
})
export class StartComponent implements OnChanges{


    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }
    onClick(): void {
        console.log(`Passed nested Child event to parent container : The Ratig ${this.rating} was clicked!`)
        this.ratingClicked.emit(`The Ratig ${this.rating} was clicked!`)
    }
    @Input() rating : number;
    starWidth : number;    
    @Output() ratingClicked : EventEmitter<string> =
    new EventEmitter<string>();
}