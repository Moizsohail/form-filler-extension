import React from "react";
import { Form, FormControl } from "react-bootstrap";
import { ParamsInputType } from "../fakerData";
import { FakerParamsType } from "../types";

const ParamsInput = ({
  params,
  paramsMetadata,
  updateParamsValue,
}: {
  params: FakerParamsType[];
  paramsMetadata: ParamsInputType;
  updateParamsValue: (
    func: (prev: FakerParamsType[]) => FakerParamsType[]
  ) => void;
}) => {
  //TODO: ADD PARAMS SUPPORT
  return (
    <div>
      {paramsMetadata.args.map((p, i) => (
        <div key={`${p.name}`}>
          {p.type === "boolean" ? (
            <></>
          ) : (
            // <Form.Check type="checkbox" value={params[p.name]} label={p.name} />
            <></>
          )}
        </div>
      ))}
    </div>
  );
};
export default ParamsInput;
