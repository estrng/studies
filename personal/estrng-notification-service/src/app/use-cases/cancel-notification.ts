import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface CancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotificationUseCase {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: CancelNotificationRequest,
  ): Promise<CancelNotificationResponse> {
    const { notificationId } = request;
    console.log('notificationId: ', notificationId);

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );
    console.log('notification canceledAt ANTES: ', notification);

    if (!notification) throw new NotificationNotFound();

    await notification.cancel();
    console.log('notification canceledAt DEPOIS: ', notification.canceledAt);

    await this.notificationsRepository.update(notification);
  }
}
