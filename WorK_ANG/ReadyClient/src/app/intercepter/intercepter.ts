import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class I1 implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let sessionId='fake';
        if(localStorage.getItem('isLoggedin') != null){
            sessionId=JSON.parse(localStorage.getItem('isLoggedin').toString()).sessionid;
        }
        const modified = req.clone({setHeaders: {'sessionId': sessionId}});
        return next.handle(modified);
    }
}

@Injectable()
export class I2 implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modified = req.clone({setHeaders: {'Custom-Header-2': '2'}});
        return next.handle(modified);
    }
}
