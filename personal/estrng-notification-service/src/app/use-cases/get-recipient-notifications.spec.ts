import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { GetRecipientNotificationsUseCase } from './get-recipient-notifications';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotificationsUseCase =
      new GetRecipientNotificationsUseCase(notificationsRepository);

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

    const { notifications } = await getRecipientNotificationsUseCase.execute({
      recipientId: '123',
    });

    expect(notifications.length).toBe(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: '123' }),
        expect.objectContaining({ recipientId: '123' }),
      ]),
    );
  });
});
