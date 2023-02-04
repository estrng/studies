import { Content } from '@app/entities/content';
import {
  Notification,
  NotificationAttributes,
} from '@app/entities/notification';

type Override = Partial<NotificationAttributes>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    recipientId: '123',
    category: 'category',
    content: new Content('new content'),
    ...override,
  });
}
