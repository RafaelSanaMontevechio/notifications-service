import { Notification as RawNotification } from '@prisma/client';
import { Notification } from '@application/entities/notification/Notification';
import { Content } from '@application/entities/notification/Content';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createAt: notification.createAt,
    };
  }

  static toDomain(raw: RawNotification): Notification {
    return new Notification(
      {
        category: raw.category,
        content: new Content(raw.content),
        recipientId: raw.recipientId,
        readAt: raw.readAt,
        createAt: raw.createAt,
        cancelAt: raw.cancelAt,
      },
      raw.id,
    );
  }
}
