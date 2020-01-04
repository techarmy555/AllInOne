import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-communites',
  templateUrl: './communites.component.html',
  styleUrls: ['./communites.component.css']
})
export class CommunitesComponent implements OnInit {
  @Input()commarr: any;

  constructor() { }

  ngOnInit() {
  }
  onNoClickfrall() {

  }
}
