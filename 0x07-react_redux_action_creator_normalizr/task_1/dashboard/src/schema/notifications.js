import * as notificationData from "../../../../../../alx-react/0x07-react_redux_action_creator_normalizr/notifications.json";
import { normalize, schema } from "normalizr";

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notification", {
  author: user,
  context: message,
});

const normalized = normalize(notificationData, [notification]);

export default function getAllNotificationsByUser(userId) {
  return notificationData
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}

export { normalized };
