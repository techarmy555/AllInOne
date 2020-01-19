import { Injectable } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private isActiveSerice: LoginService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let isactiveResponse = false;
        const userInfo = JSON.parse(localStorage.getItem('isLoggedin').toString());
        console.log(JSON.stringify(userInfo));
        this.isActiveSerice.isUserActive1(Date.now(), userInfo.sessionid, userInfo.uid).then(
            (response) => {
                console.log('canActivate isUserActive Response::::' + JSON.stringify(response));
                if (response.code == '200') {
                    console.log('response.code::::' + response.code);
                    // this.router.navigate(['/myprofile']);
                    isactiveResponse = true;
                    return true;
                } else {
                    this.router.navigate(['/login']);
                    localStorage.clear();
                    isactiveResponse = false;
                    return false;
                }
            }
        );
        return isactiveResponse;
    }

    CanActivateChild1(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isactiveResponse = false;
        const userInfo = JSON.parse(localStorage.getItem('isLoggedin').toString());
        console.log(JSON.stringify(userInfo));
        // this.isActiveSerice.isUserActive(Date.now(), userInfo.sessionid, userInfo.uid).subscribe(response => {
        //     isactiveResponse = true;
        //     if(response.code="200"){
        //         console.log("Success response::::" + JSON.stringify(response));
        //         return true;
        //     }


        // });

        // return this.isActiveSerice.isUserActive(Date.now(), userInfo.sessionid, userInfo.uid).pipe(map(e => {
        //     if (e.ok) {
        //         return true;
        //     }
        // }).catch(() => {
        //     this.router.navigate(['/login']);
        //     return Observable.of(false);
        // });
        return isactiveResponse;
    }
}
