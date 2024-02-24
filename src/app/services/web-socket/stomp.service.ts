import { Injectable } from '@angular/core';
import * as SockJs from 'sockjs-client';
import { environment } from 'src/environments/environment';
import * as Stomp from 'stompjs';

@Injectable({
  providedIn: 'root'
})
export class StompService {

  constructor() { }

  socket = new SockJs(environment.socketServer);
  stompClient = Stomp.over(this.socket);

  subscribe(topic: string, callback: any): void {
    const connected: boolean = this.stompClient.connected;
    if(connected) {
      this.subscribeToTopic(topic, callback);
      return;
    } 

    // Connect stomp client and subscribe to topic 
    this.stompClient.connect({}, (): any => {
      this.subscribeToTopic(topic, callback);
    })
  }

  private subscribeToTopic(topic: string, callback: any) : void {
    this.stompClient.subscribe(topic, (): any => {
      callback();
    });
  }
}
