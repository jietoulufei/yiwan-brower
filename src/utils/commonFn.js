import PubSub from "pubsub-js";

const PubSubObj = PubSub;

// PubSub.publish("频道","频道发布的消息")
/**
 * PubSub.subscribe("频道", (msg,data)=> {
    console.log(msg,data)
    })
   Pubsub.unsubscribe(pubsub)
 */
//发布
export function sendFn(pubsubID, sendMs) {
  console.log("发布", pubsubID, sendMs);
  PubSubObj.publish(pubsubID, sendMs);
}

export function getFn() {
  return PubSubObj;
}
