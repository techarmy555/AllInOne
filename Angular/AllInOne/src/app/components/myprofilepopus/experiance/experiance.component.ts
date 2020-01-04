import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experiance',
  templateUrl: './experiance.component.html',
  styleUrls: ['./experiance.component.css']
})
export class ExperianceComponent implements OnInit {

  @Input() exparr: any;
  constructor() { }

  ngOnInit() {
    // console.log(JSON.stringify('Hii from populateexp' + JSON.stringify(this.exparr)));
    if (this.exparr.length < 3) {
      for (let i = 0; i <= 3 - this.exparr.length; i++) {
        // this.exparr.push({ 'experiences': '', 'id': '', 'experienceshasorder': '' });
        this.exparr.push({ 'experiences': '', 'id': Math.max.apply(Math, this.exparr.map(function(o) { return o.id; })) + 1, 'experienceshasorder': '' });
      }
    }
    console.log(JSON.stringify('Hii from populateexp' + JSON.stringify(this.exparr)));
  }
  populateexp(aaa) {
    console.log(JSON.stringify('Hii from populateexp' + JSON.stringify(this.exparr)));
    if (this.exparr.length < 3) {
      for (let i = 0; i <= 3 - this.exparr.length; i++) {
        // console.log("inputdata::::::" + JSON.stringify(this.spklangarr.length));
        // console.log("inputdata::::::" + JSON.stringify(this.spklangarr));
        // this.exparr.push({ 'experiences': '', 'id': '', 'experienceshasorder': '' });
        this.exparr.push({ 'experiences': '', 'id': Math.max.apply(Math, this.exparr.map(function(o) { return o.id; })) + 1, 'experienceshasorder': '' });
      }
    }
  }
  onNoClickfrall() {

  }
}
