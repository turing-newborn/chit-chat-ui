import { Component, Input } from '@angular/core';

export enum MessageStatus {
  SENT,
  DELIVERED,
  READ,
  SENDING,
  NOT_SENT,
}
@Component({
  selector: 'app-outgoing-message',
  templateUrl: './outgoing-message.component.html',
  styleUrls: ['./outgoing-message.component.scss'],
})
export class OutgoingMessageComponent {
  @Input()
  messageContent: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ducimus
  quos voluptatum, sit quae a totam quibusdam minus porro tempora harum, illo
  maxime, nostrum nam similique quidem recusandae iusto corporis. Adipisci
  tempora quis, fugiat esse impedit, natus inventore ipsam veritatis facere
  beatae omnis? Dolorem perferendis quae, illum eos voluptatem delectus!`;
  @Input() messageStatus: MessageStatus = MessageStatus.NOT_SENT;
}
