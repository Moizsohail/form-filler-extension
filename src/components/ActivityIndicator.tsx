import { Spinner } from "react-bootstrap";
import React from "react";
const ActivityIndicator = () => {
  return (
    <div className="container d-flex h-100 justify-content-center">
      <Spinner className="row  align-self-center" animation="border" />
    </div>
  );
};
export default ActivityIndicator;
