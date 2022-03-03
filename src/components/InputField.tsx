import React, { useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { sendMessage } from "../messaging";
import { FieldType, MessageTypes, ValueGenType } from "../types";
import FakerModal from "./FakerModal";
import { Remove } from "./Icons";
import ValueGenSelector from "./ValueGenSelector";

const Field = ({
  field,
  updateFieldData,
  removeField,
}: {
  field: FieldType;
  updateFieldData: (func: (prevState: FieldType) => FieldType) => void;
  removeField: () => void;
}) => {
  const [showFakerModal, setShowFakerModal] = useState(false);
  const updateValue = (e: any) => {
    updateFieldData((prev: FieldType) => {
      const newState: FieldType = JSON.parse(JSON.stringify(prev));
      if (newState.valueGen.type === "fixed")
        newState.valueGen.value = e.target.value;

      return newState;
    });
  };
  const updateValueGen = (func: (prev: ValueGenType) => ValueGenType) => {
    updateFieldData((prev: FieldType) => {
      const newState: FieldType = JSON.parse(JSON.stringify(prev));
      newState.valueGen = func(newState.valueGen);

      return newState;
    });
  };
  const getValue = () => {
    switch (field.valueGen.type) {
      case "fixed":
        return field.valueGen.value;
      case "faker":
        return `${field.valueGen.category}::${field.valueGen.api}`;
    }
  };
  const handleFormClick = () => {
    if (field.valueGen.type === "faker") setShowFakerModal(true);
  };
  return (
    <Form.Group className="mt-3">
      <Form.Label className="fw-bold">{field.name}</Form.Label>
      <InputGroup>
        <ValueGenSelector
          valueGen={field.valueGen}
          updateValueGen={updateValueGen}
          setShowFakerModal={(value: boolean) => setShowFakerModal(value)}
        />
        <FormControl
          type="text"
          onChange={updateValue}
          readOnly={field.valueGen.type !== "fixed"}
          value={getValue()}
          onClick={handleFormClick}
          onMouseEnter={() =>
            sendMessage(MessageTypes.searchOn, { xpath: field.xpath }, () => {})
          }
          onMouseLeave={() => sendMessage(MessageTypes.searchOff, () => {})}
          placeholder={`Enter ${field.name}`}
        />
        <Button variant="primary" className="mr-1" onClick={removeField}>
          <Remove />
        </Button>
      </InputGroup>
      {showFakerModal && (
        <FakerModal
          valueGen={field.valueGen}
          updateValueGen={updateValueGen}
          handleClose={() => setShowFakerModal(false)}
        />
      )}
    </Form.Group>
  );
};
export default Field;
