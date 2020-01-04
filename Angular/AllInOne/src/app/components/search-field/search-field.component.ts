
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnotifyService, SnotifyPosition, SnotifyToastConfig } from '../../../../node_modules/ng-snotify';
// import { Picker } from 'emoji-mart'
// import { SnotifyService, SnotifyPosition, SnotifyToastConfig } from 'ng-snotify';
import { PeopleService } from '../../services/people/people.service';
@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
  selectedValue: string;
  searchkey: any;
  myId = '02034027';
  inputparam: any;
  isShowTopSearchbar: boolean;
  removedquotes: string;
  removedquotesarr = [];
  loggedinuser: string;
  message: any;
  shareparam: any;
  selected: string;
  id: string;
  username = localStorage.getItem('isLoggedin');
  constructor(public peopleService: PeopleService, private router: Router, private snotifyService: SnotifyService) { }

  ngOnInit() {
    // this.selectedValue="Advance Search";
    this.selectedValue = 'readyclient';
  }
  PlaceEmojis(event){
    console.log("event::"+JSON.stringify(event));
    console.log(event.emoji.native);
    this.searchkey=this.searchkey === undefined ? ''+event.emoji.native:this.searchkey +event.emoji.native;
  }

  searchPeople() {
    // console.log("Hiiii");
    try {

      if (this.searchkey === undefined || this.searchkey === '') {
        console.log('empty true');
        this.snotifyService.info('Please Enter something to search...');
        return false;
      }
      if (this.searchkey.includes('"')) {
        console.log('include "');
        if (this.searchkey.includes(',')) {
          if (this.selectedValue === 'readyclient') {
            this.snotifyService.error('You cant search multiple people from basic search');
            return false;
          }
          console.log('include " and ,');
          const newStr = this.searchkey.substring(0, this.searchkey.length - 1);
          this.router.navigate(['/people/'], { queryParams: { name: '"' + newStr.slice(1).replace('"', '').replace('"', '').replace(',', '","') + '"', searchSelect: this.selectedValue } });
        } else {
          console.log('include " and not ,');
          const newStr = this.searchkey.substring(0, this.searchkey.length - 1);
          this.router.navigate(['/people/'], { queryParams: { name: '"' + newStr.slice(1) + '"', searchSelect: this.selectedValue } });
        }
      } else {
        console.log('include not "');
        if (this.searchkey.includes(',')) {
          console.log('include not " and ,');
          this.router.navigate(['/people/'], { queryParams: { name: this.searchkey, searchSelect: this.selectedValue } });
        } else {
          console.log('include not " and not ,');
          this.router.navigate(['/people/'], { queryParams: { name: this.searchkey, searchSelect: this.selectedValue } });
        }
      }
    } catch (e) {
      console.log('Header Component getdetailsof():::' + e);
    }
  }

}
