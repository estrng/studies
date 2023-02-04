import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { UnreadNotificationUseCase } from './unread-notification';

describe('Cancel Notification use case', () => {
  it('should be able to cancle a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unReadNotificationUseCase = new UnreadNotificationUseCase(
      notificationsRepository,
    );

    const notification = makeNotification({
      readAt: new Date(),
    });

    await notificationsRepository.create(notification);

    await unReadNotificationUseCase.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toBeNull();
  });

  it('should not be able to cancel a notification that does not exist', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unReadNotificationUseCase = new UnreadNotificationUseCase(
      notificationsRepository,
    );

    await expect(
      unReadNotificationUseCase.execute({
        notificationId: 'notification-id',
      }),
    ).rejects.toThrowError('Notification not found');
  });
});
