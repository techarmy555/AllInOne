import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {

  @Input()tradearr: any;
  constructor() { }

  ngOnInit() {
    console.log('TRade arr:::' + JSON.stringify(this.tradearr));
    if (this.tradearr.length < 3) {
      for (let i = 0; i <= 3 - this.tradearr.length; i++) {
        // console.log("inputdata::::::" + JSON.stringify(this.spklangarr.length));
        // console.log("inputdata::::::" + JSON.stringify(this.spklangarr));
        this.tradearr.push({ 'tradesassociation': '', 'id': '', 'tradesassociationhasorder': '' });
      }
    }
  }
  onNoClickfrall() {

  }
}
