import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ipeople } from '../people/people';
import { environment } from '../../../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
// import 'rxjs/add/operator/map'
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  peoples: Ipeople[];
  globvarsearchselect: string;
  globvarsearchkey: string;
  serachpageval: string;

  getserachpageval() {
    return this.serachpageval;
  }
  setserachpageval(serachpageval) {
    this.serachpageval = serachpageval;
  }

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) { }

  setglobalvar(globvarsearchselect, globvarsearchkey) {
    this.globvarsearchkey = globvarsearchkey;
    this.globvarsearchselect = globvarsearchselect;
  }
  getglobvar() {
    return this.globvarsearchselect + '~' + this.globvarsearchkey;
  }

  public getuser1(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/users/serach').subscribe((response) => {
        // console.log(JSON.stringify(response));
        resolve(response);
      }, (err) => {
        reject(err);
      });
    })
      .catch((err) => {
        throw err;
      });
  }
  public getProfile(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(environment.NodeUrl + '/people/searchempinfo', {
        from: 0,
        searchSelect: 'readyclient',
        // search_string: "'"+JSON.parse(localStorage.getItem('isLoggedin').toString()).emp_name+"'"
        search_string: 'Tapan'
        // search_string: 'Tapan Avasthi'
        // user: localStorage.getItem('isLoggedin')

      }).subscribe((response) => {
        this.spinner.hide();
        resolve(response);
      }, (err) => {
        this.spinner.hide();
        reject(err);
      });
    })
      .catch((err) => {
        this.spinner.hide();
        throw err;
      });
  }

  public getuserwithadv(from, keyword, searchselect): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(environment.NodeUrl + '/people/searchempinfo', {
        search_string: keyword,
        searchSelect: searchselect,
        from: from,
        // search_term: keyword,
        user: localStorage.getItem('isLoggedin')
      }).subscribe((response) => {
        this.spinner.hide();
        // console.log(JSON.stringify(response));
        resolve(response);
      }, (err) => {
        this.spinner.hide();
        reject(err);
      });
    })
      .catch((err) => {
        this.spinner.hide();
        throw err;
      });
  }



  public getrefineduser(from, keyword, searchselect, filter): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(environment.NodeUrl + '/people/searchempinfo', {
        searchSelect: searchselect,
        from: from,
        search_string: keyword,
        user: localStorage.getItem('isLoggedin'),
        filter
      }).subscribe((response) => {
        this.spinner.hide();
        // console.log(JSON.stringify(response));
        resolve(response);
      }, (err) => {
        this.spinner.hide();
        reject(err);
      });
    })
      .catch((err) => {
        this.spinner.hide();
        throw err;
      });
  }

  public getuser(from, keyword): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(environment.NodeUrl + '/people/searchempinfo', {
        // search_keyword: keyword,
        searchSelect: 'readyclient',
        from: from,
        search_string: keyword,
        user: localStorage.getItem('isLoggedin')
      }).subscribe((response) => {
        this.spinner.hide();
        // console.log(JSON.stringify(response));
        resolve(response);
      }, (err) => {
        this.spinner.hide();
        reject(err);
      });
    })
      .catch((err) => {
        this.spinner.hide();
        throw err;
      });
  }
  public getprofile(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/users/myprofile').subscribe((response) => {
        // console.log(JSON.stringify(response));
        resolve(response);
      }, (err) => {
        reject(err);
      });
    })
      .catch((err) => {
        throw err;
      });
  }

}
