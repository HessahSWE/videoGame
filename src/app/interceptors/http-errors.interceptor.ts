import { Injectable } from "@angular/core";
import { catchError, observable, throwError as observableThrowError } from "rxjs";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
@Injectable()
export class HttpErrorsInjectable implements HttpInterceptor {
  constructor() { }

  
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ):observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err) => {
        console.log(err);
        return observableThrowError(err);
      }));
  }
}