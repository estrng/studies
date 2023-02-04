import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CancelNotificationUseCase } from './cancel-notification';

describe('Cancel Notification use case', () => {
  fit('should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotificationUseCase = new CancelNotificationUseCase(
      notificationsRepository,
    );

    const notification = makeNotification();

    await notificationsRepository.create(notification);

    await cancelNotificationUseCase.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a notification that does not exist', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotificationUseCase = new CancelNotificationUseCase(
      notificationsRepository,
    );

    await expect(
      cancelNotificationUseCase.execute({
        notificationId: 'notification-id',
      }),
    ).rejects.toThrowError('Notification not found');
  });
});
