import { Injectable, HttpException } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface ReadNotificationRequest {
  notificationId: string;
}

type ReadNotificationResponse = void;

@Injectable()
export class ReadNotificationUseCase {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: ReadNotificationRequest,
  ): Promise<ReadNotificationResponse> {
    const { notificationId } = request;

    try {
      const notification = await this.notificationsRepository.findById(
        notificationId,
      );

      if (!notification) {
        throw new HttpException('Notification not found', 404);
      }

      notification.read();

      await this.notificationsRepository.update(notification);
    } catch (error: unknown) {
      throw new HttpException('error.message', 500);
    }
  }
}
