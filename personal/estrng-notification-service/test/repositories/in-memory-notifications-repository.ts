import { Notification } from '@app/entities/notification';
import { NotificationsRepository } from '@app/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      (n) => n.id === notificationId,
    );

    return Promise.resolve(notification || null);
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const notifications = this.notifications.filter(
      (n) => n.recipientId === recipientId,
    );

    return Promise.resolve(notifications);
  }

  async update(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id === notification.id,
    );

    if (notificationIndex >= 0)
      this.notifications[notificationIndex] = notification;
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    const count = this.notifications.filter(
      (n) => n.recipientId === recipientId,
    ).length;

    return Promise.resolve(count);
  }
}
