import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ipeople } from '../people/people';
import { environment } from '../../../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';
import { map } from 'rxjs/operators';

// import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginResponse: any;
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {

  }

  public loginService(username, password, logincount): Promise<any> {
    let isMobile = false;
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
    ) {
      isMobile = true;
      console.log('Result:::' + true);
    } else {
      isMobile = false;
      console.log('Result:::' + false);
    }
    return new Promise((resolve, reject) => {
      this.http.post(environment.ServerUrl + '/login', {
        'USERNAME': username,
        'PASSWORD': password,
        'ISMOBILE': isMobile,
        'LOGINCOUNT': logincount
      }).subscribe((response) => {
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
  public logoutService(date, sessionid): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(environment.ServerUrl + '/logout', {
        'SESSIONID': sessionid,
        'LOGGED_OUT_TIME': date
      }).subscribe((response) => {
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

  public isUserActive1(currentdatetime, sessionid, uid): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(environment.ServerUrl + '/isuserloggedin', {
        'SESSIONID': sessionid,
        'UID': uid.toString(),
        'DATE': currentdatetime
      }).subscribe((response) => {
        resolve(response);
        console.log(JSON.stringify('Login Service isUserActive::::' + response));
      }, (err) => {
        reject(err);
      });
    })
      .catch((err) => {
        throw err;
      });
  }

  // public isUserActive(currentdatetime, sessionid, uid) {
  // let getUserObservable = this.http.get(environment.ServerUrl + '/isuserloggedin')
  //         .map((res: any) => res.json())
  //         .share()

  //     //Get the result for the cache
  //     getUserObservable.subscribe(
  //         r => {
  //             if (r.code == "200") {
  //                 // this.authenticatedUser = r.result.user;
  //                 return true;
  //             }
  //         });

  //     //return the observable
  //     return getUserObservable;
  // }



  public isUserActive(currentdatetime, sessionid, uid): Observable<Object> {
    return this.http.post(environment.ServerUrl + '/isuserloggedin', {
      'SESSIONID': sessionid,
      'UID': uid,
      'DATE': currentdatetime
    }).pipe(map(response => response));
  }



  public isUserExistDB(userName): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.ServerUrl + '/isUserNameExist/' + userName, {
      }).subscribe((response) => {
        resolve(response);
        console.log(JSON.stringify('Login Service isUserNameExist::::' + response));
      }, (err) => {
        reject(err);
      });
    })
      .catch((err) => {
        throw err;
      });
  }


  public isMobileExistDB(mobile): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.ServerUrl + '/isMobileExist/' + mobile, {
      }).subscribe((response) => {
        resolve(response);
        console.log(JSON.stringify('Login Service isMobileExist::::' + response));
      }, (err) => {
        reject(err);
      });
    })
      .catch((err) => {
        throw err;
      });
  }

  public isEmailExistDB(email): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.ServerUrl + '/isEmailExist/' + email + '/', {
      }).subscribe((response) => {
        resolve(response);
        console.log(JSON.stringify('Login Service isEmailExist::::' + response));
      }, (err) => {
        reject(err);
      });
    })
      .catch((err) => {
        throw err;
      });
  }

  public saveUserDetails(username, email, mobile, password): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(environment.ServerUrl + '/signedUpUser/', {
        'username': username,
        'email': email,
        'mobile': mobile,
        'password': this.passwordEncryption(password)
      }).subscribe((response) => {
        resolve(response);
        console.log(JSON.stringify('Login Service saveUserDetails::::' + JSON.stringify(response)));
      }, (err) => {
        reject(err);
      });
    })
      .catch((err) => {
        throw err;
      });
  }

  passwordEncryption(pwdmsg) {
    let key = environment.enkey;
    let iv = environment.eniv;
    key = CryptoJS.enc.Utf8.parse(key);
    iv = CryptoJS.enc.Utf8.parse(iv);
    const cipherData = CryptoJS.AES.encrypt(pwdmsg, key, { iv: iv });
    console.log(cipherData.toString());
    const data = CryptoJS.AES.decrypt(cipherData, key, { iv: iv });
    // console.log("Original String:::"+data.toString(CryptoJS.enc.Utf8));
    //  console.log(this.f.username.value, this.f.password.value);
    return cipherData.toString();
  }
}
