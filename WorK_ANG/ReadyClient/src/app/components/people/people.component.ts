import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { RefinedByComponent } from '../refined-by/refined-by.component';
import { SearchInfoComponent } from '../search-info/search-info.component';
import { PeopleListComponent } from '../people-list/people-list.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { PeopleService } from '../../services/people/people.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SnotifyService, SnotifyPosition, SnotifyToastConfig } from '../../../../node_modules/ng-snotify';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  name: string;
  currentsize: number;
  searchSelect: string;
  aggs: any;
  Ipeople: any = {
    data: {
      aggregations: {
        LocationCount: { buckets: [] },
        empjobfunctionCount: { buckets: [] },
        empservicelinecount: { buckets: [] },
        empjobsubfuncioncount: { buckets: [] }
      },
      hits: {
        hits: [],
      },
    }, success: []
  };
  @ViewChild(SearchInfoComponent) SearchInfoComponent: SearchInfoComponent;
  @ViewChild(RefinedByComponent) refinedByComponent: RefinedByComponent;
  @ViewChild(PeopleListComponent) peopleListComponent: PeopleListComponent;

  constructor(public peopleservice: PeopleService, private router: Router, private route: ActivatedRoute, private spinner: NgxSpinnerService, private snotifyService: SnotifyService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.spinner.show();
        this.name = params.name;
        this.currentsize = 0;
        this.searchSelect = params.searchSelect;
        this.getPeoplewithadv(this.currentsize, this.name, this.searchSelect);
      });
  }
  getPeoplewithadv(from, keyword, searchselect): void {
    this.peopleservice.getuserwithadv(from, keyword, searchselect).then(
      (Ipeople) => {
        this.currentsize = Ipeople.data.hits.total < 10 ? Ipeople.data.hits.total : 10;
        this.SearchInfoComponent.populateSearchInfo(Ipeople.data.hits.total, this.currentsize, keyword);
        this.refinedByComponent.populateRefinedByInfo(Ipeople.data.aggregations),
          this.peopleListComponent.populatePeopleListInfo(Ipeople.data.hits.hits);
      }
    );
  }
  getscrollPeopleadv(fromcnt, keyword, searchslect): void {
    this.peopleservice.getuserwithadv(fromcnt, keyword, searchslect).then(

      (Ipeople) => {
        console.log(this.currentsize <= Ipeople.data.hits.total);
        if (this.currentsize <=  Ipeople.data.hits.total) {
          console.log('Ipeople.data.hits.hits.length' + Ipeople.data.hits.hits.length);
          this.currentsize = this.currentsize + Ipeople.data.hits.hits.length;
          this.SearchInfoComponent.populateSearchInfo(Ipeople.data.hits.total, this.currentsize, keyword);
          this.refinedByComponent.populateRefinedByInfo(Ipeople.data.aggregations),
            this.peopleListComponent.populatePeopleListscrollInfo(Ipeople.data.hits.hits);
        }

      }

      // Ipeople => this.Ipeople.data.hits.hits.push.apply(this.Ipeople.data.hits.hits, Ipeople.data.hits.hits)
    );
  }
  @HostListener('window:scroll', ['$event'])
  scrollHandler(event, htmlcomp) {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      console.log(event.target.offsetHeight + event.target.scrollTop + ' >= ' + event.target.scrollHeight);
      this.currentsize += this.Ipeople.data.hits.hits.length;
      this.getscrollPeopleadv(this.currentsize, this.name, this.searchSelect);
    }
  }

}
