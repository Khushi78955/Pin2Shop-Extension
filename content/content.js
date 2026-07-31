import { extractPinData } from "./extractPin.js";
import { MESSAGE_TYPES } from "../constants/messages.js";


console.log("Pin2Shop Content Script Loaded");

function isPinPage() {
    return window.location.pathname.includes("/pin/");
}

if (isPinPage()) {
    console.log("Pinterest Pin Detected");
    const pinData = extractPinData();
    chrome.runtime.sendMessage(
        {
            type: MESSAGE_TYPES.PIN_METADATA,
            payload: pinData
        },
        (response) => {
            console.log(response);
        }
    );
} else {
    console.log("Not a Pin Page");
}