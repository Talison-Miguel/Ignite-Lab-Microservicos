import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notifications-repositories";
import { NotificationNotFound } from "./errors/notifications-not-found";

interface unreadNotificationRequest {
    notificationId: string
}
type unreadNotificationResponse = void

@Injectable()
export class UnreadNotification {
    constructor(private notificationsRepository: NotificationsRepository) {

    }

    async execute(request: unreadNotificationRequest): Promise<unreadNotificationResponse> {
        const { notificationId } = request
    
        const notification = await this.notificationsRepository.findById(notificationId)

        
        if(!notification) {
            throw new NotificationNotFound()
        }

        notification.unread()

        await this.notificationsRepository.save(notification)
    }
}
