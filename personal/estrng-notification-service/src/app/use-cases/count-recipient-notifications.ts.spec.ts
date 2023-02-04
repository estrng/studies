import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CountRecipientNotificationsUseCase } from './count-recipient-notifications';
CountRecipientNotificationsUseCase;

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotificationsUseCase =
      new CountRecipientNotificationsUseCase(notificationsRepository);

    await notificationsRepository.create(
      makeNotification({
        recipientId: '123',
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: '123',
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: '456',
      }),
    );

    const { count } = await countRecipientNotificationsUseCase.execute({
      recipientId: '123',
    });

    expect(count).toBe(2);
  });
});
