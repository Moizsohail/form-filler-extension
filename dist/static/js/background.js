(function () {
    'use strict';

    const sendMessage = (messageType, payload, callback) => {
        if (!payload)
            payload = {};
        chrome.windows.getCurrent((w) => {
            chrome.tabs &&
                chrome.tabs.query({ active: true, windowId: w.id }, (tabs) => {
                    if (tabs.length === 0) {
                        return;
                    }
                    chrome.tabs.sendMessage(tabs[0].id, Object.assign({ type: messageType }, payload), callback);
                });
        });
    };

    var MessageTypes;
    (function (MessageTypes) {
        MessageTypes[MessageTypes["fetchAndOverwrite"] = 0] = "fetchAndOverwrite";
        MessageTypes[MessageTypes["searchOn"] = 1] = "searchOn";
        MessageTypes[MessageTypes["searchOff"] = 2] = "searchOff";
        MessageTypes[MessageTypes["execute"] = 3] = "execute";
        MessageTypes[MessageTypes["shortcutExecute"] = 4] = "shortcutExecute";
    })(MessageTypes || (MessageTypes = {}));

    try {
        chrome.commands.onCommand.addListener((command) => {
            if (command === "run-profile-1") {
                sendMessage(MessageTypes.shortcutExecute);
            }
        });
        chrome.runtime.onInstalled.addListener((reason) => {
            console.log(reason, chrome.runtime.OnInstalledReason.INSTALL);
            if (reason.reason === chrome.runtime.OnInstalledReason.UPDATE) {
                checkCommandShortcuts();
            }
        });
    }
    catch (e) {
        console.error(e);
    }
    // // Only use this function during the initial install phase. After
    // // installation the user may have intentionally unassigned commands.
    function checkCommandShortcuts() {
        chrome.commands.getAll((commands) => {
            let missingShortcuts = [];
            console.log(commands);
            for (let { name, shortcut } of commands) {
                if (shortcut === "") {
                    missingShortcuts.push(name);
                }
            }
            if (missingShortcuts.length > 0) {
                console.log("damn", missingShortcuts);
            }
        });
    }

})();
