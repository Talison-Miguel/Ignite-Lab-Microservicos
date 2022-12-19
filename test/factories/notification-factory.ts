import { Content } from "@application/entitites/content";
import { Notification, NotificationProps } from "@application/entitites/notification";

type Override = Partial<NotificationProps>

export function makeNotification(override: Override = {}) {
    return new Notification({
        category: 'social',
        content: new Content('Nova solicitaçao de amizade'),
        recipientId: 'recipientId-1',
        ...override
    })
}