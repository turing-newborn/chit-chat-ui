import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'src/app/models/config.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: AppConfig = {};

  constructor(private http: HttpClient) {}

  loadConfig(): Promise<void> {
    let configUrl = 'assets/config/development.json';
    if (environment.production) configUrl = 'assets/config/production.json';
    return this.http
      .get(configUrl)
      .toPromise()
      .then((config) => {
        this.config = config as AppConfig;
        console.log(this.config);
      });
  }

  getSignUpUrl() {
    return this.config.authServiceUrl + '/signUp';
  }

  getLoginUrl() {
    return this.config.authServiceUrl + '/login';
  }
}
