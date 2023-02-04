import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CancelNotificationUseCase } from './cancel-notification';
import { ReadNotificationUseCase } from './read-notification';

describe('Cancel Notification use case', () => {
  it('should be able to cancle a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotificationUseCase = new ReadNotificationUseCase(
      notificationsRepository,
    );

    const notification = makeNotification();

    await notificationsRepository.create(notification);

    await readNotificationUseCase.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a notification that does not exist', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotificationUseCase = new ReadNotificationUseCase(
      notificationsRepository,
    );

    await expect(
      readNotificationUseCase.execute({
        notificationId: 'notification-id',
      }),
    ).rejects.toThrowError('Notification not found');
  });
});
