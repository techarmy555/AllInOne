import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditEventComponent implements OnInit {
  
  inputdata: string;
  @Input() eventArr: any;
  public dateTime: Date;
  constructor() { }

  ngOnInit() {
    let title=this.eventArr.data.title;
    console.log("eventArr::::"+title);
  }
  onNoClickfrall (data){
    console.log(data)
  }
}
