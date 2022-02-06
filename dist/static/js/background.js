(function () {
    'use strict';

    try {
        chrome.commands.onCommand.addListener((command) => {
            console.log(`Command: ${command}`);
        });
        console.log("background runnings");
        chrome.runtime.onInstalled.addListener((reason) => {
            console.log(reason, chrome.runtime.OnInstalledReason.INSTALL);
            if (reason.reason === chrome.runtime.OnInstalledReason.UPDATE) {
                // checkCommandShortcuts();
            }
        });
    }
    catch (e) {
        console.error(e);
    }
    // // Only use this function during the initial install phase. After
    // // installation the user may have intentionally unassigned commands.
    // function checkCommandShortcuts() {
    //   console.log("CHECKING");
    //   chrome.commands.getAll((commands) => {
    //     let missingShortcuts = [];
    //     console.log(commands);
    //     for (let { name, shortcut } of commands) {
    //       if (shortcut === "") {
    //         missingShortcuts.push(name);
    //       }
    //     }
    //     if (missingShortcuts.length > 0) {
    //       console.log("damn", missingShortcuts);
    //     }
    //   });
    // }

})();
