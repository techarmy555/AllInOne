import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MustMatch } from '../registration/helper';
import { SnotifyService, SnotifyPosition, SnotifyToastConfig } from '../../../../node_modules/ng-snotify';
import { LoginService } from '../../services/login/login.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  resp: any;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  hide = true;
  hide1 = true;
  isUserExist = false;
  isEmailExist = false;
  isMobileExist = false;
  userpassword: string;
  loginResonse: any;
  appVars: any;
  response: {
    code: string,
    description: string,
    datetime: string
  };
  fileSelectMsg = 'No file selected yet.';
  fileUploadMsg = 'No file uploaded yet.';
  disabled = false;
  constructor(private formBuilder: FormBuilder, private snotifyService: SnotifyService, private loginServ: LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.minLength(5), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      password: ['', [Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'), Validators.required]],
      retypepassword: ['', Validators.required]
    },
      {
        validators: MustMatch('password', 'retypepassword')
      }
    );

  }
  isUserExistDB() {
    try {
      this.loginServ.isUserExistDB(this.f.username.value).then(
        (isUserExistDBResponse) => {
          // console.log("isUserExistDB::::" + JSON.stringify(isUserExistDBResponse))
          if (isUserExistDBResponse.code == '200') {
            this.snotifyService.error('You cant use this User Name...');
          } else {
            this.isUserExist = !this.isUserExist;
            this.snotifyService.success('You can use this User Name.....');
          }
        });
    } catch (e) {
      this.isUserExist = false;
      this.snotifyService.error('Got Exception in isUserExistDB:::' + e);
    }

  }
  clearUserIcon() {
    this.isUserExist = false;
  }

  clearEmailIcon() {
    this.isEmailExist = false;
  }

  clearMobileIcon() {
    this.isMobileExist = false;
  }


  isMobileExistDB() {
    try {
      this.loginServ.isMobileExistDB(this.f.mobile.value).then(
        (isMobileExistDBResponse) => {
          // console.log("isUserExistDB::::" + JSON.stringify(isMobileExistDBResponse))
          if (isMobileExistDBResponse.code == '200') {
            this.snotifyService.error('You cant use this Mobile Number...');
          } else {
            this.isMobileExist = !this.isMobileExist;
            this.snotifyService.success('You can use this Mobile Number...');
          }
        });
    } catch (e) {
      this.isMobileExist = false;
      this.snotifyService.error('Got Exception in isMobileExistDB:::' + e);
    }
  }

  isEmailExistDB() {
    try {
      this.loginServ.isEmailExistDB(this.f.email.value).then(
        (isEmailExistDBResponse) => {
          // console.log("isUserExistDB::::" + JSON.stringify(isEmailExistDBResponse))
          if (isEmailExistDBResponse.code == '200') {
            this.snotifyService.error('You cant use this Email ID...');
          } else {
            this.isEmailExist = !this.isEmailExist;
            this.snotifyService.success('You can use this Email ID...');
          }
        });
    } catch (e) {
      this.isEmailExist = false;
      this.snotifyService.error('Got Exception in isEmailExistDB:::' + e);
    }
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    // console.log("this.f.password:::"+JSON.stringify(this.f.password.value));
    // if (this.f.password.value.errors.pattern) {
    //   // this.snotifyService.info("Hiiiiiiiiiiiiiiiii");

      this.snotifyService.warning('At least 8 characters in length \n Lowercase letters \n Uppercase letters \n Numbers \n Special characters', 'Password Must', {
        timeout: 10000,
        showProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        buttons: [
          { text: 'Close', action: (toast) => { console.log('Clicked: No'); this.snotifyService.remove(toast.id); }, bold: true },
        ]
      });
    // }
    // stop here if form is invalid

    try {
      this.loginServ.saveUserDetails(this.f.username.value, this.f.email.value, this.f.mobile.value, this.f.password.value).then(
        (saveUserDetailsResponse) => {
          // console.log("isUserExistDB::::" + JSON.stringify(isEmailExistDBResponse))
          if (saveUserDetailsResponse.code == '200') {
            this.loginForm.reset();
            this.snotifyService.success('Details Saved Succuessfully.........');
          } else {
            this.snotifyService.error('Details not Saved Succuessfully.........');
          }
        });
    } catch (e) {
      this.isEmailExist = false;
      this.snotifyService.error('Got Exception in onSubmit:::' + e);
    }


  }

  selectEvent(file: File): void {
    this.fileSelectMsg = file.name;
  }

  uploadEvent(file: File): void {
    this.fileUploadMsg = file.name;
  }

  cancelEvent(): void {
    this.fileSelectMsg = 'No file selected yet.';
    this.fileUploadMsg = 'No file uploaded yet.';
  }

  toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  get f() { return this.loginForm.controls; }

}

