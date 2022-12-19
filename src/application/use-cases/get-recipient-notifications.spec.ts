import { makeNotification } from "@test/factories/notification-factory"
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repositories"
import { CountRecipientNotification } from "./count-recipient-notifications"
import { GetRecipientNotification } from "./get-recipient-notification"

describe('Count recipient notification', () => {
    it('should be able to get recipient notifications', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository()
        const getRecipientNotifications = new GetRecipientNotification(notificationsRepository)

        await notificationsRepository.create(makeNotification({ recipientId: 'recipient-1' }))

        await notificationsRepository.create(makeNotification({ recipientId: 'recipient-1' }))

        await notificationsRepository.create(makeNotification({ recipientId: 'recipient-2' }))

        const { notifications } = await getRecipientNotifications.execute({
            recipientId: "recipient-1"
        })

        expect(notifications).toHaveLength(2)
        expect(notifications).toEqual(expect.arrayContaining([
            expect.objectContaining({ recipientId: 'recipient-1' }),
            expect.objectContaining({ recipientId: 'recipient-1' })
        ]))
    })
})