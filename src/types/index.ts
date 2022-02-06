export * from "./DOMMessages";
export enum MessageTypes {
  fetchAndOverwrite,
  searchOn,
  searchOff,
  execute,
}

export interface ChromeMessageDefault {
  type: MessageTypes;
}
export interface ChromeMessageSearchOn {
  type: MessageTypes.searchOn;
  xpath: string;
}
export interface ChromeMessageExecute {
  type: MessageTypes.execute;
  fields: FieldType[];
}
export type ChromeMessage =
  | ChromeMessageDefault
  | ChromeMessageSearchOn
  | ChromeMessageExecute;

export interface URLData {
  profiles: ProfileData[];
}
export interface ProfileData {
  fields: FieldType[];
}

export interface FixedGenType {
  type: "fixed";
  value: string;
}
export interface RegexGenType {
  type: "reg";
  regex: string;
}
export type FakerParamsType = { [key: string]: string | boolean };
export interface FakerGenType {
  type: "faker";
  category: string;
  api: string;
  params?: FakerParamsType[];
  suffix?: string;
  prefix: string;
}
export type ValueGenType = FixedGenType | RegexGenType | FakerGenType;

export interface FieldType {
  name: string | null;
  xpath: string;
  type: "text";
  valueGen: ValueGenType;
}
