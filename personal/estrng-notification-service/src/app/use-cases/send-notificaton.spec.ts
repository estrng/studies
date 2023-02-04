import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { Notification } from '../entities/notification';
import { SendNotificationUseCase } from './send-notification';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const useCase = new SendNotificationUseCase(notificationsRepository);

    const { notification } = await useCase.execute({
      recipientId: 'teste',
      content: 'Solicitação de amizade',
      category: 'friendship',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
    expect(notification).toBeInstanceOf(Notification);
  });
});
