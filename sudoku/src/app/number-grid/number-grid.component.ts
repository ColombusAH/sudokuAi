import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-number-grid',
  templateUrl: './number-grid.component.html',
  styleUrls: ['./number-grid.component.css']
})
export class NumberGridComponent implements OnChanges {
  @Input() numberList: number[];
  constructor() {}

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    console.log(this.numberList);
    
  }
}
