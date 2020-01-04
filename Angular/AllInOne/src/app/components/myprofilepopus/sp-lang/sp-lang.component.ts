import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-sp-lang',
  templateUrl: './sp-lang.component.html',
  styleUrls: ['./sp-lang.component.css']
})
export class SpLangComponent implements OnInit {
  inputdata: string;
  @Input() spklangarr: any;

  constructor() {

  }

  ngOnInit() {
    console.log('this.spklangarr.length::::' + this.spklangarr.length);
    if (this.spklangarr.length < 3) {
      for (let i = 0; i <= 4 - this.spklangarr.length ; i++) {
        // console.log("inputdata::::::" + JSON.stringify(this.spklangarr.length));
        // console.log("inputdata::::::" + JSON.stringify(this.spklangarr));
      this.spklangarr.push({ 'splanguage': '', 'id': '', 'splanguagehasorder': '' });
    }
      // '{"splanguage":"","id":"","splanguagehasorder":""},{"splanguage":"lang1","id":"0203402711","splanguagehasorder":"1"}'
      console.log('finalinputdata::::::' + JSON.stringify(this.spklangarr));
    }
  }
  onNoClickfrall() {

  }
}

