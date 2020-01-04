import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-info',
  templateUrl: './search-info.component.html',
  styleUrls: ['./search-info.component.css']
})
export class SearchInfoComponent implements OnInit {
  total: string;
  outof: string;
  searchkey: string;
  constructor() { }

  ngOnInit() {
  }
  populateSearchInfo(total, outof, searchkey) {
    this.total = total;
    this.outof = outof;
    this.searchkey = searchkey;
  }

}
