import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  @Input()eduarr: any;
  constructor() { }

  ngOnInit() {
    console.log(JSON.stringify(this.eduarr));
    if (this.eduarr.length < 3) {
      for (let i = 0; i <= 3 - this.eduarr.length; i++) {
        // console.log("inputdata::::::" + JSON.stringify(this.spklangarr.length));
        // console.log("inputdata::::::" + JSON.stringify(this.spklangarr));
        this.eduarr.push({ 'education': '', 'id': '', 'educationhasorder': '' });
      }
    }
  }
  onNoClickfrall() {

  }
}
