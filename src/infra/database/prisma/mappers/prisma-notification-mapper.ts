import { Content } from "@application/entitites/content";
import { Notification } from "@application/entitites/notification";
import { Notification as RawNotification } from '@prisma/client'

export class    PrismaNotificationMapper {
    static toPrisma(notification: Notification) {
        return {
            id: notification.id,
            content: notification.content.value,
            category: notification.category,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAt: notification.createdAt,
        }
    }

    static toDomain(raw: RawNotification): Notification {
        return new Notification({
                category: raw.category,
                content: new Content(raw.content),
                recipientId: raw.recipientId,
                readAt: raw.readAt,
                cancelAt: raw.cancelAt,
                createdAt: raw.createdAt,
            },
            raw.id, 
        )
    }
}