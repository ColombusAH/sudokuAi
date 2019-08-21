import { Component, OnInit } from '@angular/core';
import { NumberService } from './number.service';
import { Observable } from 'rxjs/';
import { delay } from 'q';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sudoku';
  data: Observable<number[]>;
  numberList: number[] = [1, 2, 3, 4];
  intervalID;
  constructor() {}
  ngOnInit(): void {
    this.data = new Observable(subscriber => {
      this.intervalID = setInterval(() => {
        fetch('assets/generation.json').then(res => {
          const data = res.json().then(val => subscriber.next(val.genome));
          delay(400);
        });
      }, 1300);
    });

    this.data.subscribe(value => {
      this.numberList = [...value];
    });
  }
}
