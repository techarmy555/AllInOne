import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { first, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import * as CryptoJS from 'crypto-js';
import { LoginService } from '../../services/login/login.service';
import { SnotifyService, SnotifyPosition, SnotifyToastConfig } from '../../../../node_modules/ng-snotify';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { post } from 'selenium-webdriver/http';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  resp: any;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  hide = true;
  userpassword: string;
  loginResonse: any;
  appVars: any;
  response: {
    code: string,
    description: string,
    datetime: string
  };

  constructor(
    private spinner: NgxSpinnerService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snotifyService: SnotifyService,
    private http: HttpClient,
    private loginServ: LoginService,
    
    // private authenticationService: UsersService
  ) { }

  ngOnInit() {
    // this.snotifyService.info("Hiiiiiiiiiiiiiiiii");
    // this.spinner.show();
    // setTimeout(() => {
    //     /** spinner ends after 5 seconds */
    //     this.spinner.hide();
    // }, 5000);
    // this.snotifyService.info("Hiiiiiiiiiiiiiiiii");
    this.appVars = {
      logincount: 0
    };
    localStorage.setItem('AppVars', JSON.stringify(this.appVars));
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log(document.cookie);
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)) {
      console.log(navigator.platform);
    }

    this.isUserActive().subscribe(response => {
      this.response = response;
      console.log('response::::' + JSON.stringify(this.response));
    } );

    console.log('response1::::' + this.response);
    // console.log("response::::"+JSON.stringify(kk));





  }



  // public isUserActive:Observable()
  public isUserActive(): Observable<any> {
    // let getObservable = this.http.post(environment.ServerUrl + '/isuserloggedin', {
    //   "SESSIONID": "sessionid",
    //   "UID": 3,
    //   "DATE": new Date()
    // }).subscribe((res: any[]) => {
    //   console.log(res);
    //   this.response = res;
    //   // return getObservable;
    // });
    // return getObservable;


    return this.http.post(environment.ServerUrl + '/isuserloggedin', {
      'SESSIONID': 'sessionid',
      'UID': '3',
      'DATE': new Date()
    })
      .pipe(

      );
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  passwordEncryption(pwdmsg) {
    let key = environment.enkey;
    let iv = environment.eniv;
    key = CryptoJS.enc.Utf8.parse(key);
    iv = CryptoJS.enc.Utf8.parse(iv);
    const cipherData = CryptoJS.AES.encrypt(pwdmsg, key, { iv: iv });
    console.log(cipherData.toString());
    const data = CryptoJS.AES.decrypt(cipherData, key, { iv: iv });
    // console.log("Original String:::"+data.toString(CryptoJS.enc.Utf8));
    this.loading = true;
    //  console.log(this.f.username.value, this.f.password.value);
    return cipherData.toString();
  }



  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.spinner.show();
    // localStorage.setItem('AppVars', this.appVars);
    localStorage.removeItem('isLoggedin');
    this.appVars = JSON.parse(localStorage.getItem('AppVars'));
    console.log('Appvars::::' + JSON.stringify(this.appVars));
    const pass = this.passwordEncryption(this.f.password.value);
    this.loginServ.loginService(this.f.username.value, pass, this.appVars.logincount).then(
      (LoginResponse) => {
        if (LoginResponse.code == 200) {
          console.log('LoginResponse::::' + JSON.stringify(LoginResponse));
          localStorage.setItem('isLoggedin', JSON.stringify(LoginResponse));
          this.snotifyService.success(LoginResponse.description);
          console.log('Success before Response...............');
          this.router.navigate(['landing']);
          console.log('Success after Response...............');
          this.spinner.hide();
        } else {
          // console.log("LoginResponse::::" + JSON.stringify(LoginResponse))
          this.appVars.logincount += 1;
          this.loading = false;
          this.resp = {
            result: 'Something Went Wrong'
          };
          this.snotifyService.error(this.resp.result);
          localStorage.setItem('AppVars', JSON.stringify(this.appVars));
          this.spinner.hide();
          // this.error = 'Something Went Wrong';
        }
      })
      .catch((err) => {
        this.spinner.hide();
        console.log('Error:::' + JSON.stringify(err));
        throw err;
      });

  }
}


