import { Component, OnChanges, OnInit, OnDestroy, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnInit, OnChanges, OnDestroy {
    
    @Input() rating;
    starWidth: number;
    @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();
    constructor()    {
        console.log(">> At constructor");
    }

    ngOnChanges(): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        console.log(">> At OnChange");
        this.starWidth = this.rating * 85 / 6;

    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log(">> At OnInit");
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        console.log(">> At OnDestory");
    }
}
