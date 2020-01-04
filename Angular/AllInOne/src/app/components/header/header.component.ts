import { Component, OnInit } from '@angular/core';
import { SnotifyService, SnotifyPosition, SnotifyToastConfig } from '../../../../node_modules/ng-snotify';
import { PeopleService } from '../../services/people/people.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchkey: any;
  selectedValue: string;
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
  routerUrl;
  username;
  constructor(
    public peopleService: PeopleService,
    private router: Router,
    private snotifyService: SnotifyService,
    private logoutServ: LoginService,
    private translate: TranslateService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit() {
    this.routerUrl = this.router.url;
    this.routerUrl = this.routerUrl.trim();
    const loggedinUserinfo = localStorage.getItem('isLoggedin');

    if (typeof loggedinUserinfo !== 'undefined' && loggedinUserinfo !== null) {
      this.username = JSON.parse(loggedinUserinfo.toString()).username;
    }
    console.log(this.routerUrl.trim() + '!==' + '/landing');
    console.log(this.routerUrl.trim() !== '/landing');
    console.log(this.routerUrl.trim() + '!==' + '/landing');
    console.log(this.routerUrl.trim() !== '/login');
  }
  selectLanguage(event){
    console.log("event:::"+JSON.stringify(event));
    this.translate.setDefaultLang(event);
  }

  dologout() {
    try {
      localStorage.removeItem('isLoggedin');
      this.router.navigate(['/login']);
    } catch (e) {
      console.log('Header Component logout():::' + e);
    }

  }
  changetext() {
    console.log('Hello bro');
    console.log(this.selectedValue, this.searchkey);
    this.peopleService.setglobalvar(this.selectedValue, this.searchkey);
  }
  changeadvsearch() {
    console.log(this.selectedValue, this.searchkey);
    this.peopleService.setglobalvar(this.selectedValue, this.searchkey);
    console.log('this.selectedValue::' + this.selectedValue);
  }
  gotomyprofile() {
    console.log('myprofile  Before  Navigation.............');
    this.router.navigate(['/myprofile']);
    console.log('myprofile  after Navigation.............');
    // this.router.navigate(['/myprofile/']);
  }

  gotoRegistration() {
    console.log('myprofile  Before  Navigation.............');
    this.router.navigate(['/registration']);
    console.log('myprofile  after Navigation.............');
    // this.router.navigate(['/myprofile/']);
  }


  logout() {
    const userInfo = JSON.parse(localStorage.getItem('isLoggedin').toString());
    this.logoutServ.logoutService(Date.now(), userInfo.sessionid).then(
      (LogoutResponse) => {
        console.log('LoginResponse::::' + JSON.stringify(LogoutResponse));
        if (LogoutResponse.code == 200) {
          localStorage.clear();
        } else {
          console.log('something Went Wrong');
        }
        this.router.navigate(['/login']);
      }
    );
  }
  advsearch() {
    // this.router.navigate(['/people/']);
    try {

      if (this.searchkey === undefined || this.searchkey === '') {
        console.log('true');
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
  gotoHome() {
    console.log("Hiiiiiiiiiiiiiiiii");
    this.router.navigate(['/landing']);
  }
}
