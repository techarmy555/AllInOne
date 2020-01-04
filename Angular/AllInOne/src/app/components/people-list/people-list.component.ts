import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  peoples: [];
  constructor() { }

  ngOnInit() {
  }
  populatePeopleListInfo(lisrarr: []) {
    this.peoples = lisrarr;
  }

  populatePeopleListscrollInfo(listarr: []) {
    this.peoples.push.apply(this.peoples, listarr);
  }
}
