import { Injectable } from '@angular/core';
import {
  HttpClientService,
  RequestMethod,
} from '../http-client/http-client.service';
import { ConfigService } from '../config/config.service';
import { User } from 'src/app/models/user.model';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClientService: HttpClientService,
    private configService: ConfigService
  ) {}

  public signUp(user: User): Observable<any> {
    return this.httpClientService
      .sendRequest(RequestMethod.POST, this.configService.getSignUpUrl(), user)
      .pipe(catchError((error) => this.handleError(error)));
  }

  public login(user: User): Observable<any> {
    return this.httpClientService
      .sendRequest(RequestMethod.POST, this.configService.getLoginUrl(), user)
      .pipe(catchError((error) => this.handleError(error)));
  }

  private handleError(error: any): Observable<any> {
    console.log('Error occured', error);
    return of({});
  }
}
