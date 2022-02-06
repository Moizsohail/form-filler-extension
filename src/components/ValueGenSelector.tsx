import React from "react";
import { Dropdown } from "react-bootstrap";
import { ValueGenType } from "../types";
const ValueGenSelector = ({
  valueGen,
  updateValueGen,
  setShowFakerModal,
}: {
  valueGen: ValueGenType;
  updateValueGen: (func: (prev: ValueGenType) => ValueGenType) => void;
  setShowFakerModal: (status: boolean) => void;
}) => {
  const valueGenMap: any = {
    fixed: "Constant",
    faker: "Faker",
  };
  const updateValueGenType = (key: string) => {
    if (key === valueGen.type) return;

    updateValueGen((prev) => {
      const fakerGenDefaultData = key === "faker" && {
        category: "address",
        api: "cardinalDirection",
      };
      return { ...prev, type: key, ...fakerGenDefaultData } as ValueGenType;
    });
    if (key === "faker") {
      setShowFakerModal(true);
    }
  };
  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
        {valueGenMap[valueGen.type]}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {Object.keys(valueGenMap).map((key) => (
          <Dropdown.Item
            key={key}
            active={key === valueGen.type}
            onClick={() => updateValueGenType(key)}
          >
            {valueGenMap[key]}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default ValueGenSelector;
