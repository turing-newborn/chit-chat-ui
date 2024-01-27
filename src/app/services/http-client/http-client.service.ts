import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export enum RequestMethod {
  GET,
  POST,
  PUT,
  DELETE,
}
@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private http: HttpClient) {}

  sendRequest(
    requestMethod: RequestMethod,
    baseUrl: string,
    requestBody?: any,
    queryParams?: any
  ): Observable<any> {
    let url = baseUrl;
    if (queryParams) {
      if (url.endsWith('/')) url = url.substring(0, url.length - 1);
      Object.keys(queryParams).forEach((key: string) => {
        url += `?${key}=${queryParams[key]}`;
      });
    }
    if (requestMethod === RequestMethod.GET) {
      return this.http.get(url);
    } else if (requestMethod === RequestMethod.POST) {
      return this.http.post(url, requestBody);
    } else if (requestBody === RequestMethod.PUT) {
      return this.http.put(url, requestBody);
    } else {
      return this.http.delete(url);
    }
  }
}
