import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-networks',
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.css']
})
export class NetworksComponent implements OnInit {

  @Input()nwarr: any;
  constructor() { }

  ngOnInit() {
  }
  onNoClickfrall() {

  }
}
