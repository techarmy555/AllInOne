import { Component, OnInit, Inject, ViewChild, ViewChildren, ContentChild, TemplateRef, Input } from '@angular/core';
import { PeopleService } from '../../services/people/people.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
// import { SnotifyService, SnotifyPosition, SnotifyToastConfig } from '../../../../node_modules/ng-snotify';
import { SnotifyService, SnotifyPosition, SnotifyToastConfig } from 'ng-snotify';
import { NgxSpinnerService } from 'ngx-spinner';
import { ExperianceComponent } from '../myprofilepopus/experiance/experiance.component';
import { SpLangComponent } from '../myprofilepopus/sp-lang/sp-lang.component';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id: string;
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
  experiance: any;
  spokenlang: any;
  network: any;
  hobbies: any;
  education: any;
  countries: any;
  certification: any;
  trade: any;
  comm: any;
  hobbaaarr: any;

  @ViewChild(ExperianceComponent) ExperianceComponent: ExperianceComponent;
  @ViewChild(SpLangComponent) SpLangComponent: SpLangComponent;


  constructor(public dialog: MatDialog, private router: Router, private peopleservice: PeopleService, private route: ActivatedRoute, private snotifyService: SnotifyService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    console.log('hello from profile Component........');
    // this.route.queryParams
      // .subscribe(params => {
        // this.spinner.show();
        // console.log(params); // {order: "popular"}
        // this.id = params.id;
        // console.log(this.name); // popular
        // console.log("Param Name:::" + params.searchSelect);
        // if (params.searchSelect === undefined) {
        //   console.log("in if");
        //   this.getPeople(this.currentsize, this.name);
        //   // this.searchkey =this.name;
        // } else {
        //   console.log("in else");
        //   this.searchSelect = params.searchSelect;
        //   this.getPeoplewithadv(this.currentsize, this.name, this.searchSelect);
        // }
        // this.getProfile();
      // });
  }

  getSpokenLangarry() {
    return this.spokenlang;
  }
  getExperianceArray() {
    return this.experiance;
  }
  getNetworkArray() {
    return this.network;
  }
  getHobbiesArray() {
    this.hobbaaarr = this.hobbies;
    // console.log("getHobbiesArray::::"+JSON.stringify(this.hobbaaarr));
    return this.hobbaaarr;

  }
  getEducationArray() {
    return this.education;
  }
  getCoutriesArray() {
    return this.countries;
  }
  getCertificateArray() {
    return this.certification;
  }
  getTradeArray() {
    return this.trade;
  }
  getCommunityArray() {
    return this.comm;
  }
  getProfile() {
    this.peopleservice.getProfile().then(
      (Ipeople) => {
        this.Ipeople = Ipeople,
          this.experiance = Ipeople.data.hits.hits[0]._source.empexperiences,
          this.spokenlang = Ipeople.data.hits.hits[0]._source.empsplanguage,
          this.network = Ipeople.data.hits.hits[0]._source.empexperiences, // need to change
          this.hobbies = Ipeople.data.hits.hits[0]._source.empinteresthobbies,
          this.education = Ipeople.data.hits.hits[0]._source.empeducation,
          this.countries = Ipeople.data.hits.hits[0]._source.empcountriesworked,
          this.certification = Ipeople.data.hits.hits[0]._source.empcertification,
          this.trade = Ipeople.data.hits.hits[0]._source.emptradesassociation,
          this.comm = Ipeople.data.hits.hits[0]._source.empcommunities;

          // this.ExperianceComponent.populateexp();
          // this.ExperianceComponent.populateexp(this.experiance)
          // this.SpLangComponent.populateSpLang(Ipeople.data.hits.hits[0]._source.empexperiences)
      }
    );
  }

  onNoClickfrall(): void {
    const dialogRef = this.dialog.closeAll();
  }

  openDialogfrspklang(myspoklangtemplate): void {
    const dialogRef = this.dialog.open(myspoklangtemplate, {
      width: '550px',
      data: {name: 'Vinayak', animal: 'Human'}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  openDialogfrcommunity(community): void {
    const dialogRef = this.dialog.open(community, {
      width: '550px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  openDialogfrnw(nw): void {
    const dialogRef = this.dialog.open(nw, {
      width: '550px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  openDialogfrggl(ggl): void {
    const dialogRef = this.dialog.open(ggl, {
      width: '550px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  openDialogfrexp(exp): void {

    const dialogRef = this.dialog.open(exp, {
      width: '550px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });

  }
  openDialogfrinhobb(inhobb): void {
    const dialogRef = this.dialog.open(inhobb, {
      width: '550px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  openDialogfredu(edu): void {
    const dialogRef = this.dialog.open(edu, {
      width: '550px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  openDialogfrcntrwrk(cntr): void {
    const dialogRef = this.dialog.open(cntr, {
      width: '550px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  openDialogfrcert(cert): void {
    const dialogRef = this.dialog.open(cert, {
      width: '550px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }


  openDialogfrtrade(trade): void {
    const dialogRef = this.dialog.open(trade, {
      width: '550px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
