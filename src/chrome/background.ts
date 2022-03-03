import { sendMessage } from "../messaging";
import { MessageTypes } from "../types";

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
} catch (e) {
  console.error(e);
}
export {};
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
