import { makeNotification } from "@test/factories/notification-factory"
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repositories"
import { CancelNotification } from "./cancel-notification"
import { CountRecipientNotification } from "./count-recipient-notifications"

describe('Count recipient notification', () => {
    it('should be able to count recipient notifications', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository()
        const countRecipientNotifications = new CountRecipientNotification(notificationsRepository)

        await notificationsRepository.create(makeNotification({ recipientId: 'recipient-1' }))

        await notificationsRepository.create(makeNotification({ recipientId: 'recipient-1' }))

        await notificationsRepository.create(makeNotification({ recipientId: 'recipient-2' }))

        const { count } = await countRecipientNotifications.execute({
            recipientId: "recipient-1"
        })

        expect(count).toEqual(2)
    })
})