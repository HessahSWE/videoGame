
import { Injectable } from "@angular/core";
import { catchError} from "rxjs/operators";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() { }

  
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req :req.clone({
      setHeaders :
      {
        'X-RapidAPI-Key': '42ffb7a928msh63b5ee5c858c1d2p1addb1jsn21528ffce09d',
        'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
      },
      setParams:{
        key:'e40e743af2c94b0c9161fb4473'
      }
    });
    return next.handle(req);
  }
}