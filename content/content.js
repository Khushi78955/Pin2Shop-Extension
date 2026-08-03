import { extractPinData } from "./extractPin.js";
import { MESSAGE_TYPES } from "../constants/messages.js";
import { buildSearchQuery } from "./buildSearchQuery.js";

console.log("Pin2Shop Content Script Loaded");

function isPinPage() {
    return window.location.pathname.includes("/pin/");
}

if (isPinPage()) {
    console.log("Pinterest Pin Detected")
    const pinData = extractPinData()
    const query = buildSearchQuery(pinData)
    console.log("Search Query:")
    console.log(query)
    chrome.runtime.sendMessage(
        {
            type: MESSAGE_TYPES.PIN_METADATA,
            payload: {
                query
            }
        },
        (response) => {
            console.log(response);
        }
    );
} else {
    console.log("Not a Pin Page");
}