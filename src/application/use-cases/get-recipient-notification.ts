import { Notification } from "@application/entitites/notification";
import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notifications-repositories";

interface GetRecipientNotificationRequest {
    recipientId: string
}

interface GetRecipientNotificationResponse {
    notifications: Notification[]
}

@Injectable()
export class GetRecipientNotification {
    constructor(private notificationsRepository: NotificationsRepository) {

    }

    async execute(request: GetRecipientNotificationRequest): Promise<GetRecipientNotificationResponse> {
        const { recipientId } = request
        const notifications = await this.notificationsRepository.findManyByRecipientId(recipientId)

        return {
            notifications,
        }
    }
}