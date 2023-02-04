import { Controller, Body } from '@nestjs/common';
import { Param, Patch, Post, Get } from '@nestjs/common/decorators';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { SendNotificationUseCase } from 'src/app/use-cases/send-notification';
import { NotificationViewModel } from '../view-models/notification-view-model';
import { CancelNotificationUseCase } from '@app/use-cases/cancel-notification';
import { ReadNotificationUseCase } from '@app/use-cases/read-notification';
import { UnreadNotificationUseCase } from '@app/use-cases/unread-notification';
import { GetRecipientNotificationsUseCase } from '@app/use-cases/get-recipient-notifications';
import { CountRecipientNotificationsUseCase } from '@app/use-cases/count-recipient-notifications';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private sendNotificationUseCase: SendNotificationUseCase,
    private cancelNotificationUseCase: CancelNotificationUseCase,
    private readNotificationUseCase: ReadNotificationUseCase,
    private unreadNotificationUseCase: UnreadNotificationUseCase,
    private getRecipientNotificationsUseCase: GetRecipientNotificationsUseCase,
    private countRecipientNotificationsUseCase: CountRecipientNotificationsUseCase,
  ) {}
  @Get('health')
  health() {
    return { status: 'ok' };
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;

    const { notification } = await this.sendNotificationUseCase.execute({
      content,
      category,
      recipientId,
    });

    return { notification: NotificationViewModel.toHTTP(notification) };
  }

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotificationUseCase.execute({ notificationId: id });
  }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotificationUseCase.execute({ notificationId: id });
  }

  @Patch(':id/unread')
  async unRead(@Param('id') id: string) {
    await this.unreadNotificationUseCase.execute({ notificationId: id });
  }

  @Get(':recipientId/count')
  async count(@Param('recipientId') recipientId: string) {
    const { count } = await this.countRecipientNotificationsUseCase.execute({
      recipientId,
    });

    return { count };
  }

  @Get('from/:recipientId')
  async list(@Param('recipientId') recipientId: string) {
    const { notifications } =
      await this.getRecipientNotificationsUseCase.execute({
        recipientId,
      });

    return {
      notifications: notifications.map(NotificationViewModel.toHTTP),
    };
  }
}
