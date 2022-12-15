import { Content } from '@application/entities/notification/Content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification/Notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('Nova solicitação 2'),
    category: 'social',
    recipientId: 'recipient_id',
    ...override,
  });
}
