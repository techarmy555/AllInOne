import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class componentshareservicets {
  searchkey: any;
  selectedValue: string;
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  changeMessage(message: string) {
    // this.messageSource.next(message)
  }
}
