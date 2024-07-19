import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let jwtToken = sessionStorage.getItem("jwt");
    let myHeaders = new HttpHeaders().append("Athentication", `Bearer ${jwtToken}`)

    request = request.clone(
      {
        headers: myHeaders
      }
    )

    return next.handle(request);
  }
}
