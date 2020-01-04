import { Component, OnInit } from '@angular/core';
import { MatCheckbox } from '@angular/material';
import { isJsObject } from '@angular/core/src/change_detection/change_detection_util';

@Component({
  selector: 'app-refined-by',
  templateUrl: './refined-by.component.html',
  styleUrls: ['./refined-by.component.css']
})
export class RefinedByComponent implements OnInit {

  jobarr: [];
  subjobarr: [];
  locaarr: [];
  aggarrrr: [];
  distejfunc = [];
  empsubfunction = [];
  empserfunction = [];
  emplocation: any;
  emplocation1 = [];
  filter: any = { operator: 'and', empcity: [], empcountry: [] };
  finalrequest: any = {
    empjobfunction: [],
    empjobsubfuncion: [],
    empserviceline: [],
    filter: {},
  };

  constructor() { }

  ngOnInit() {

  }

  populateRefinedByInfo(aggsdetails) {
    // console.log(aggsdetails)

    this.jobarr = aggsdetails.empjobfunctionCount.buckets;
    this.subjobarr = aggsdetails.empjobsubfuncioncount.buckets;
    this.locaarr = aggsdetails.LocationCount.buckets;

  }

  changechkfunction(arrtype, option, event) {

    console.log('option:::' + event);

    if (arrtype === 'empjobfunction') {
      if (event.checked) {
        this.distejfunc.push(option);
      } else {
        for (let i = this.distejfunc.length - 1; i >= 0; i--) {
          if (this.distejfunc[i] === option) {
            this.distejfunc.splice(i, 1);
            break;       // <-- Uncomment  if only the first term has to be removed
          }
        }
      }
    } else if (arrtype === 'empjobsubfuncion') {
      if (event.checked) {
        this.empsubfunction.push(option);
      } else {
        for (let i = this.empsubfunction.length - 1; i >= 0; i--) {
          if (this.empsubfunction[i] === option) {
            this.empsubfunction.splice(i, 1);
            break;       // <-- Uncomment  if only the first term has to be removed
          }
        }
      }
    } else if (arrtype === 'location') {
      console.log('Val:::' + option.toString().split('-')[0]);

      if (event.checked) {


        if (option.toString().split('-')[0] === '') {

        } else {
          this.filter.empcity.push(option.toString().split('-')[0]);
        }
        if (option.toString().split('-')[1] === '') {

        } else {
          this.filter.empcountry.push(option.toString().split('-')[1]);
        }


      } else {
        console.log('UnChecked :::' + this.filter.empcity);

        for (let i = this.filter.empcity.length - 1; i >= 0; i--) {
          if (this.filter.empcity[i] === option.toString().split('-')[0]) {
            console.log('city poped:::' + this.filter.empcity);

            this.filter.empcity.splice(i, 1);
            break;

          }
        }
        for (let i = this.filter.empcountry.length - 1; i >= 0; i--) {


          if (this.filter.empcountry[i] === option.toString().split('-')[1]) {
            console.log('empcountry poped:::' + this.filter.empcountry);
            this.filter.empcountry.splice(i, 1);
            break;

          }
        }

        // this.emplocation = this.filter;
        console.log('Poped::::' + JSON.stringify(this.filter));
      }
    } else if (arrtype === 'empserviceline') {
      if (event.checked) {
        this.empserfunction.push(option);
      } else {
        for (let i = this.empserfunction.length - 1; i >= 0; i--) {
          if (this.empserfunction[i] === option) {
            this.empserfunction.splice(i, 1);

            break;       // <-- Uncomment  if only the first term has to be removed
          }
        }
      }
    }

    console.log('this.filter:::' + JSON.stringify(this.filter));


    this.finalrequest = {
      empjobfunction: this.distejfunc.length > 0 ? this.distejfunc : null,
      empjobsubfuncion: this.empsubfunction.length > 0 ? this.empsubfunction : null,
      empserviceline: this.empserfunction.length > 0 ? this.empserfunction : null,
      filter: this.filter.empcity.length > 0 && this.filter.empcountry.length > 0 ? this.filter : null,
      // filter: this.filter1
    };

    if (this.finalrequest.empjobfunction == null) {
      delete this.finalrequest.empjobfunction;
    } if (this.finalrequest.empjobsubfuncion == null) {
      delete this.finalrequest.empjobsubfuncion;
    } if (this.finalrequest.empserviceline == null) {
      delete this.finalrequest.empserviceline;
    } if (this.finalrequest.filter == null) {
      delete this.finalrequest.filter;
    }

    console.log(this.filter.empcity.length <= 0);
    console.log('finalrequest::' + JSON.stringify(this.finalrequest));
  }

}

