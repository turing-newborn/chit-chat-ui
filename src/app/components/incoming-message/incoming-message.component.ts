import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-incoming-message',
  templateUrl: './incoming-message.component.html',
  styleUrls: ['./incoming-message.component.scss'],
})
export class IncomingMessageComponent {
  @Input()
  messageContent: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ducimus
  quos voluptatum, sit quae a totam quibusdam minus porro tempora harum, illo
  maxime, nostrum nam similique quidem recusandae iusto corporis. Adipisci
  tempora quis, fugiat esse impedit, natus inventore ipsam veritatis facere
  beatae omnis? Dolorem perferendis quae, illum eos voluptatem delectus!`;
}
