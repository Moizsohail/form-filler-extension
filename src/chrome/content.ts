import {
  ChromeMessage,
  ChromeMessageExecute,
  ChromeMessageSearchOn,
  FakerGenType,
  FieldType,
  FixedGenType,
  MessageTypes,
  ProfileData,
} from "../types";
import { getElementByXPath, getXPath } from "./utils";
import faker from "@faker-js/faker";
type MessageResponse = (response?: any) => void;
const overlayId = "quick-form-filler-overlay";
const mapTypes = (el: any) => {
  const type = el.getAttribute("type");
  const textTypes = ["email", "search", "text", "password"];
  return textTypes.includes(type) ? "text" : type;
};
const executeField = (field: FieldType) => {
  let value: any;
  switch (field.valueGen.type) {
    case "fixed":
      value = (field.valueGen as FixedGenType).value;
      break;
    case "faker":
      const { category, api } = field.valueGen;
      value = (faker as any)[category][api]();
      break;
  }
  if (value) {
    const element: any = getElementByXPath(field.xpath);
    element.value = value;
  }
};
const messagesFromReactAppListener = (
  message: ChromeMessage,
  sender: chrome.runtime.MessageSender,
  sendResponse: MessageResponse
) => {
  console.log("[content.ts] Received Message", message);

  switch (message.type) {
    case MessageTypes.fetchAndOverwrite:
      const fields = [...document.querySelectorAll("input")].filter((x) => {
        const { width, height } = x.getBoundingClientRect();
        return width > 0 && height > 0;
      });

      const fieldData = fields.map<any>((el) => ({
        name:
          !el.readOnly &&
          !el.disabled &&
          (el.placeholder || el.getAttribute("name")),
        xpath: getXPath(el as HTMLElement),
        type: mapTypes(el),
        valueGen: { type: "fixed", value: "" } as FixedGenType,
      }));
      console.log(fieldData);
      const formsData: ProfileData = {
        fields: fieldData.filter(({ type, name }) => name && type === "text"),
      };
      sendResponse(formsData);
      break;
    case MessageTypes.searchOn:
      const xpath = (message as ChromeMessageSearchOn).xpath;
      const node: any = getElementByXPath(xpath);

      if (!node) break;

      let { width, height, top, left } = node.getBoundingClientRect();
      top = top + window.scrollY;
      left = left + window.scrollX;
      var elem = document.createElement("div");
      elem.id = overlayId;
      elem.style.cssText = `position:absolute;width:${width}px;height:${height}px;opacity:0.4;z-index:100000;background:blue;top:${top}px;left:${left}px`;
      document.body.appendChild(elem);
      break;
    case MessageTypes.searchOff:
      const overlayEL = document.getElementById(overlayId);
      if (overlayEL) document.body.removeChild(overlayEL);
      break;
    case MessageTypes.execute:
      (message as ChromeMessageExecute).fields.forEach((f: FieldType) => {
        executeField(f);
      });

      break;
    default:
      console.error("Unrecognised message: ", message);
  }
  return true;
};

const main = () => {
  console.log("[content.ts] Running");
  /**
   * Fired when a message is sent from either an extension process or a content script.
   */
  chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
};

main();
