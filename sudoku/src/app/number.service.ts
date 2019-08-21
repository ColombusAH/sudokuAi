import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class NumberService implements OnDestroy, OnInit {
  intervalID;
  observable;
  constructor() {}

  ngOnInit(): void {
    this.observable = new Observable(subscriber => {
      this.intervalID = setInterval(() => {
        console.log('subscribe');
        subscriber.next([1, 2, 3, 4]);
      }, 10000);
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalID);
  }
}
