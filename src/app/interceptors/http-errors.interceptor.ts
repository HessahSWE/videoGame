import { Injectable } from "@angular/core";
import { catchError, throwError as observableThrowError } from "rxjs";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable()
export class HttpErrorsInjectable implements HttpInterceptor {
  constructor() { }

  
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ):Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err) => {
        console.log(err);
        return observableThrowError(err);
      }));
  }
}