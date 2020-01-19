import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
  @Input()certarr: any;
  constructor() { }

  ngOnInit() {
    console.log('certarr:::' + JSON.stringify(this.certarr));
    if (this.certarr.length < 3) {
      for (let i = 0; i <= 3 - this.certarr.length; i++) {
        // console.log("inputdata::::::" + JSON.stringify(this.spklangarr.length));
        // console.log("inputdata::::::" + JSON.stringify(this.spklangarr));
        this.certarr.push({ 'certification': '', 'id': '', 'certificationhasorder': '' });
      }
    }
  }

  onNoClickfrall() {

  }
}
