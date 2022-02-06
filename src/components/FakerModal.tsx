import React, { useMemo, useState } from "react";
import {
  Modal,
  Button,
  InputGroup,
  Dropdown,
  FormControl,
} from "react-bootstrap";
import faker from "@faker-js/faker";
import { FakerGenType, ValueGenType } from "../types";
import fakerData, { getApis } from "../fakerData";
const FakerModal = ({
  valueGen,
  updateValueGen,
  handleClose,
}: {
  valueGen: ValueGenType;
  updateValueGen: (func: (prev: ValueGenType) => ValueGenType) => void;
  handleClose: () => void;
}) => {
  const category = (valueGen as FakerGenType).category;
  const api = (valueGen as FakerGenType).api;

  const handleUpdate = ({
    category,
    api,
  }: {
    category?: string;
    api?: string;
  }) => {
    updateValueGen((prev) => {
      const newState: FakerGenType = JSON.parse(JSON.stringify(prev));
      if (category) {
        (newState.category as string) = category;
      }
      if (api) {
        newState.api = api;
      }

      const availableApis = getApis(newState.category);
      if (!availableApis.includes(newState.api)) {
        newState.api = availableApis[0];
      }

      return newState;
    });
  };

  const demoResult = category && api && (faker as any)[category][api]();
  return (
    <>
      <Modal show={true}>
        <Modal.Header closeButton onHide={handleClose}>
          <Modal.Title>Faker</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="my-3">
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                {category}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {Object.keys(fakerData).map((x) => (
                  <Dropdown.Item
                    key={`main-${x}`}
                    onClick={() => handleUpdate({ category: x })}
                  >
                    {x}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            {category && (
              <Dropdown>
                <Dropdown.Toggle
                  variant="outline-secondary"
                  id="dropdown-basic"
                >
                  {api}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {getApis(category).map((x: string) => (
                    <Dropdown.Item
                      key={`sub-${x}`}
                      onClick={(e) => handleUpdate({ api: x })}
                    >
                      {x}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            )}
          </InputGroup>
          <FormControl
            type="text"
            readOnly
            value={demoResult}
            placeholder={`Demo Result`}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default FakerModal;