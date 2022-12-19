import { Content } from "@application/entitites/content"
import { Notification } from "@application/entitites/notification"
import { makeNotification } from "@test/factories/notification-factory"
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repositories"
import { CancelNotification } from "./cancel-notification"
import { NotificationNotFound } from "./errors/notifications-not-found"

describe('Cancel notification', () => {
    it('should be able to cancel a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository()
        const cancelNotification = new CancelNotification(notificationsRepository)

        const notification =  makeNotification()

        await notificationsRepository.create(notification)

        await cancelNotification.execute({
            notificationId: notification.id,
        })

        expect(notificationsRepository.notifications[0].cancelAt).toEqual(
            expect.any(Date)
        )
    })

    it('should not be able to cancel a notification when it does not exist',async () => {
        const notificationsRepository = new InMemoryNotificationsRepository()
        const cancelNotification = new CancelNotification(notificationsRepository)


        expect(() => {
            return cancelNotification.execute({
                notificationId: 'fake-notification-id',
            })
        }).rejects.toThrow(NotificationNotFound)
    })
})