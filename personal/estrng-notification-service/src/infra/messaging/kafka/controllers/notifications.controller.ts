import { SendNotificationUseCase } from '@app/use-cases/send-notification';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface SendNotificationEventData {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class NotificationsController {
  constructor(private sendNotificationUseCase: SendNotificationUseCase) {}

  @EventPattern('notifications.send-notification')
  async handleSendNotification(@Payload() data: SendNotificationEventData) {
    await this.sendNotificationUseCase.execute(data);
    /* Nesse caso aqui, se alguma aplicação consumidora do tópico "notifications.send-notification" 
    enviar um payload inválido, o NestJS vai lançar uma exceção e a mensagem não será consumida. 
    Para evitar isso, é necessário tratar a exceção e fazer com que a mensagem seja consumida mesmo assim.*/

    /**
     * Pensar se faz o envio das notificações pelo http ou pelo kafka
     */
  }
}
