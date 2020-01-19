import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { AxiomSchedulerAnimation, AxiomSchedulerComponent, AxiomSchedulerEvent } from 'axiom-scheduler';
import { SnotifyService, SnotifyPosition, SnotifyToastConfig } from '../../../../node_modules/ng-snotify';
import { SAMPLE_EVENTS } from './sample-events';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditEventComponent } from './edit-event/edit-event.component';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {

  eventArr:any;
  events = [...SAMPLE_EVENTS];
  public model: any = {};
  public themes = ['dark', 'light'];
  public animations = Object.values(AxiomSchedulerAnimation);
  @ViewChild(AxiomSchedulerComponent) scheduler: AxiomSchedulerComponent;
  @ViewChild(EditEventComponent) editEventComponent: EditEventComponent;
  constructor(private snotifyService: SnotifyService,public dialog: MatDialog) {
    // super(injector);
  }

  ngOnInit() {
    this.model.step = 5;
    this.model.toolbar = true;
    this.model.eventTemplate = true;
    this.model.theme = 'dark';
    this.model.locale = true;
    this.model.animation = AxiomSchedulerAnimation.Default;
  }
  refreshView(): void {
    this.scheduler.refreshScheduler();
  }

  public editEvent($event: AxiomSchedulerEvent = null,edit): void {
    this.eventArr=$event;
    console.log("event:::" + JSON.stringify($event));
    const dialogRef = this.dialog.open(edit, {
      width: '550px',
      data: $event
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
    
    // var instance = this._modalService.open(EventWindowComponent, { size: 'sm', centered: true });
    // if ($event) {
    //     instance.componentInstance.model = { ...$event }
    // }
    // instance.result.then((model) => {
    //     if (model) {
    //         if ($event) {
    //             var index = this.events.findIndex(e => e._id === $event._id);
    //             if (index > -1) {
    //                 this.events[index] = model;
    //                 this.refreshView();
    //             }
    //         }
    //         else {
    //             this.events.push(model);
    //             this.refreshView();
    //         }
    //     }
    // });
  }

  getEventArray(){
    return this.eventArr;
  }
  public removeEvent($event: AxiomSchedulerEvent): void {
    var index = this.events.findIndex(e => e._id === $event._id);
    if (index > -1) {
      this.events.splice(index, 1);
      this.refreshView();
    }
  }


  
  public clickEvent($event: AxiomSchedulerEvent): void {
    this.snotifyService.info($event.title);
    // console.log(JSON.stringify($event));
  }
  
}
