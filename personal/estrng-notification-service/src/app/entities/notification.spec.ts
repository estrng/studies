import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create Notification', () => {
    const notification = new Notification({
      content: new Content('Solicitação de amizade'),
      category: 'friendship',
      recipientId: 'teste',
    });

    expect(notification).toBeTruthy();
  });
});
