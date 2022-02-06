import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { sendMessage } from "../messaging";
import { FieldType, MessageTypes, ProfileData } from "../types";
import InputField from "./InputField";
export type UpdateProfileDataFunc = (prevState: ProfileData) => ProfileData;
const ListProfiles = ({
  profile,
  updateProfileData,
}: {
  profile: ProfileData;
  updateProfileData: (func: UpdateProfileDataFunc) => void;
}) => {
  const [loading, setLoading] = useState(false);
  const autoFetchForms = () => {
    setLoading(true);
    sendMessage(
      MessageTypes.fetchAndOverwrite,
      null,
      (response: ProfileData) => {
        setLoading(false);
        updateProfileData(() => response);
      }
    );
  };

  const updateFieldData = (i: number, func: (prev: FieldType) => FieldType) => {
    updateProfileData((prevState) => {
      const newState: ProfileData = JSON.parse(JSON.stringify(prevState));
      const updatedField = func(newState.fields[i]);
      newState.fields[i] = updatedField;
      return newState;
    });
  };
  const removeField = (i: number) => {
    updateProfileData((prevState) => {
      return { fields: [...prevState.fields.filter((_, j) => i !== j)] };
    });
  };
  return (
    <div>
      <div className="w-100">
        <Button variant="primary" onClick={autoFetchForms}>
          Auto Fetch
        </Button>
        {loading && <Spinner animation="border" />}
      </div>

      {profile.fields.map((f, i) => (
        <InputField
          key={`inputfield-${i}`}
          field={f}
          updateFieldData={(func) => updateFieldData(i, func)}
          removeField={() => removeField(i)}
        />
      ))}
      {profile.fields.length > 0 && (
        <div className="d-flex mt-3 justify-content-end">
          <Button variant="danger">Delete</Button>
        </div>
      )}
    </div>
  );
};
export default ListProfiles;
