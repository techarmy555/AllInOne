import { Component } from '@angular/core';
import { UserIdleService } from 'angular-user-idle';
import { SpinnerArr } from './spinnerArr';
import { from } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userIdle: UserIdleService,private translate: TranslateService) {
    translate.setDefaultLang('mr');
   }
  RandomSpinnerVar:string;
  SpinnerArr: any[];

  readonly googlePlayLink: string;
  readonly appStoreLink: string;



  ngOnInit() {
    this.RandomSpinnerVar=this.RandomSpinnerMethod(SpinnerArr)
    // console.log(this.getRandom(SpinnerArr,53))
    // Start watching for user inactivity.
    console.log("this.RandomSpinnerVar::::"+this.RandomSpinnerVar)
    this.userIdle.startWatching();

    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe(count => console.log(count));

    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => console.log('Time is up!'));
    console.log("environment.NodeUrl"+environment.NodeUrl);
  }

  stop() {
    this.userIdle.stopTimer();
  }

  stopWatching() {
    this.userIdle.stopWatching();
  }

  startWatching() {
    this.userIdle.startWatching();
  }

  restart() {
    this.userIdle.resetTimer();
  }

  getRandom(SpinnerArr, n) {
    var result = new Array(n),
      len = SpinnerArr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = SpinnerArr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }
  RandomSpinnerMethod(SpinnerArr){
    return SpinnerArr[Math.floor(Math.random()*SpinnerArr.length)];
  }
}

