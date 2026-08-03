import { MESSAGE_TYPES } from "../constants/messages.js";

console.log("Pin2Shop Background Service Worker Started");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    switch (message.type) {
        case MESSAGE_TYPES.PIN_METADATA:
            console.log("Search Query:")
            console.log(message.payload.query)
            sendResponse({
                success: true
            })
            break;
        default:
            console.warn("Unknown message");
            sendResponse({
                success: false
            });
    }
    return true;
})