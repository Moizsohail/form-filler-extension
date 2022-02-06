import React, { useState } from "react";
import { Accordion, Card, useAccordionButton } from "react-bootstrap";
import { sendMessage } from "../messaging";
import { MessageTypes, URLData } from "../types";
import { ChevronDown, ChevronUp, Pencil, Play, Remove } from "./Icons";
import SingleProfile, { UpdateProfileDataFunc } from "./SingleProfile";

const CustomToggle = ({ children, eventKey }: any) => {
  const decoratedOnClick = useAccordionButton(eventKey);
  return (
    <Card.Header onClick={decoratedOnClick} style={{ cursor: "pointer" }}>
      {children}
    </Card.Header>
  );
};
const ListProfiles = ({
  urlData,
  updateURLData,
  editMode,
}: {
  urlData: URLData;
  updateURLData: (func: (prevState: URLData) => URLData) => void;
  editMode: boolean;
}) => {
  const updateProfileData = (i: number, func: UpdateProfileDataFunc) => {
    updateURLData((prevState) => {
      const newState: URLData = JSON.parse(JSON.stringify(prevState));
      const updatedProfile = func(newState.profiles[i]);
      newState.profiles[i] = updatedProfile;
      return newState;
    });
  };
  const moveProfileData = (
    e: any,
    index: number,

    moveDown: boolean
  ) => {
    e.stopPropagation();
    updateURLData((prevState) => {
      if (
        (index === 0 && !moveDown) ||
        (index === prevState.profiles.length - 1 && moveDown)
      )
        return prevState;
      const newState: URLData = JSON.parse(JSON.stringify(prevState));
      const newIndex: number = moveDown ? index + 1 : index - 1;
      const temp = newState.profiles[index];
      newState.profiles[index] = newState.profiles[newIndex];
      newState.profiles[newIndex] = temp;
      return newState;
    });
  };
  const removeProfileData = (e: any, i: number) => {
    e.stopPropagation();
    updateURLData((prevState) => {
      const newState: URLData = JSON.parse(JSON.stringify(prevState));
      newState.profiles = newState.profiles.filter((profile, j) => j === i);
      return newState;
    });
  };
  const executeForm = (e: any, profile: any) => {
    e.stopPropagation();
    sendMessage(MessageTypes.execute, profile);
  };
  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
      {urlData.profiles.map((profile, i) => (
        <Accordion.Item eventKey={`${i}`} key={`profile-${i}`}>
          <CustomToggle eventKey={`${i}`}>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                {editMode && (
                  <div
                    className="flat-btn icon"
                    onClick={(e) => removeProfileData(e, i)}
                  >
                    <Remove />
                  </div>
                )}
                <h6 className="m-0">Profile #{i + 1}</h6>
              </div>
              {editMode ? (
                <div className="d-flex">
                  <div
                    className="flat-btn icon"
                    onClick={(e) => moveProfileData(e, i, true)}
                  >
                    <ChevronDown />
                  </div>
                  <div
                    className="flat-btn icon"
                    onClick={(e) => moveProfileData(e, i, false)}
                  >
                    <ChevronUp />
                  </div>
                </div>
              ) : (
                <div
                  className="flat-btn icon"
                  onClick={(e) => executeForm(e, profile)}
                >
                  <Play />
                </div>
              )}
            </div>
          </CustomToggle>
          <Accordion.Body>
            <SingleProfile
              profile={profile}
              updateProfileData={(func: UpdateProfileDataFunc) =>
                updateProfileData(i, func)
              }
            />
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
export default ListProfiles;
