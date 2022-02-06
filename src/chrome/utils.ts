export const getCurrentTabUrl = (
  callback: (url: string | undefined) => void
): void => {
  const queryInfo = { active: true, lastFocusedWindow: true };

  chrome.tabs &&
    chrome.tabs.query(queryInfo, (tabs) => {
      callback(tabs[0].url);
    });
};

export const getCurrentTabUId = (
  callback: (url: number | undefined) => void
): void => {
  const queryInfo = { active: true, lastFocusedWindow: true };

  chrome.tabs &&
    chrome.tabs.query(queryInfo, (tabs) => {
      callback(tabs[0].id);
    });
};
const getXPathHelper: (
  element: HTMLElement,
  i?: number
) => string | undefined = (element, i = 5) => {
  const getName = (el: any) =>
    el.id ? `${el.tagName}[@id="${el.id}"]` : el.tagName;
  if (i === 0 || element.tagName === "BODY") return getName(element);
  if (element === document.body) return getName(element);

  var ix = 0;
  var siblings = element?.parentNode?.childNodes;
  if (!element?.parentNode || !siblings) return getName(element);
  for (let x = 0; x < siblings.length; x++) {
    let sibling: HTMLElement = siblings[x] as HTMLElement;
    if (sibling === element)
      return `${getXPathHelper(element?.parentNode as HTMLElement, i - 1)}/${
        element.id ? getName(element) : element.tagName + "[" + (ix + 1) + "]"
      }`;
    if (sibling.nodeType === 1 && sibling.tagName === element.tagName) ix++;
  }
};
export const getXPath: (
  element: HTMLElement,
  i?: number
) => string | undefined = (element, i = 5) => {
  return `//${getXPathHelper(element, i)}`;
};
export const getElementByXPath = (xpath: any) => {
  let query = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null
  );

  return query.snapshotItem(0);
};
