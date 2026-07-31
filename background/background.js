import { MESSAGE_TYPES } from "../constants/messages.js";



console.log("Pin2Shop Background Service Worker Started");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Message Received");
    switch (message.type) {
        case MESSAGE_TYPES.PIN_METADATA:
            console.log(message.payload);
            break;
        default:
            console.warn("Unknown message");
    }
    sendResponse({
        success: true
    })
    return true;
});