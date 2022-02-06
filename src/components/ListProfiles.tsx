import React from "react";
import { Accordion, Card, useAccordionButton, Button } from "react-bootstrap";
import { sendMessage } from "../messaging";
import { MessageTypes, URLData } from "../types";
import { Play } from "./Icons";
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
}: {
  urlData: URLData;
  updateURLData: (func: (prevState: URLData) => URLData) => void;
}) => {
  const updateProfileData = (i: number, func: UpdateProfileDataFunc) => {
    updateURLData((prevState) => {
      const newState: URLData = JSON.parse(JSON.stringify(prevState));
      const updatedProfile = func(newState.profiles[i]);
      newState.profiles[i] = updatedProfile;
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
            <div className="d-flex">
              <h6 className="m-0">Profile #{i + 1}</h6>

              <div
                className="flat-btn icon"
                onClick={(e) => executeForm(e, profile)}
              >
                <Play />
              </div>
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
