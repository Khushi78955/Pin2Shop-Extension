import { MESSAGE_TYPES } from "../constants/messages.js";
import { buildAmazonSearchUrl } from "../providers/amazonProvider.js";


console.log("Pin2Shop Background Service Worker Started");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    switch (message.type) {
        case MESSAGE_TYPES.PIN_METADATA:
            const amazonSearchUrl = buildAmazonSearchUrl(message.payload.query);
            console.log("Amazon Search URL:");
            console.log(amazonSearchUrl);
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