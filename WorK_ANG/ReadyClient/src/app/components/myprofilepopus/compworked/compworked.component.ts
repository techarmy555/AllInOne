import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compworked',
  templateUrl: './compworked.component.html',
  styleUrls: ['./compworked.component.css']
})
export class CompworkedComponent implements OnInit {

  @Input()cntryarr: any;
  constructor() { }

  ngOnInit() {
    console.log(JSON.stringify(this.cntryarr));
    if (this.cntryarr.length < 3) {
      for (let i = 0; i <= 3 - this.cntryarr.length; i++) {
        // console.log("inputdata::::::" + JSON.stringify(this.spklangarr.length));
        // console.log("inputdata::::::" + JSON.stringify(this.spklangarr));
        this.cntryarr.push({ 'countriesworked': '', 'id': '', 'countriesworkedhasorder': '' });
      }
    }
  }
  onNoClickfrall() {

  }
}
