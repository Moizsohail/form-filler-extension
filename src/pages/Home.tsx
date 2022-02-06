import React, { useEffect, useState } from "react";
import { Container, Form, Nav, Navbar, Button } from "react-bootstrap";
import ListProfiles from "../components/ListProfiles";
import { Add, Pencil, Done } from "../components/Icons";
import FullActivityIndicator from "../components/ActivityIndicator";
import { URLData } from "../types";

const Home = () => {
  const [urlData, setURLData] = useState<URLData>({ profiles: [] });
  const [currentUrl, setCurrentUrl] = useState("");
  const [ready, setReady] = useState(false);
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    const queryInfo: chrome.tabs.QueryInfo = {
      active: true,
      currentWindow: true,
    };
    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        if (!tabs.length) {
          setReady(true);
          return;
        }
        const currentTabUrl: string | undefined = tabs[0]?.url;
        if (!currentTabUrl) {
          setReady(true);
          return;
        }
        setCurrentUrl(currentTabUrl);
        chrome.storage.sync.get([currentTabUrl]).then((obj) => {
          setReady(true);

          const v = Object.values(obj)[0];
          if (v) setURLData(v);
        });
      });
  }, []);
  useEffect(() => {
    if (urlData && currentUrl)
      chrome.storage.sync.set({ [currentUrl]: urlData });
  }, [urlData, currentUrl]);

  const addNewProfile = () => {
    return setURLData((prevState) => ({
      profiles: [...prevState.profiles, { fields: [] }],
    }));
  };
  const updateURLData = (func: (prevState: URLData) => URLData) => {
    setURLData(func);
  };

  return (
    <div className="App">
      <Navbar bg="primary" className="px-3" expand="lg" variant="dark">
        <Navbar.Brand>Form Filler For Developers</Navbar.Brand>
        <Nav.Item className="ml-auto">
          <Nav.Link className="nav-button" onClick={addNewProfile}>
            <Add />
          </Nav.Link>
        </Nav.Item>
      </Navbar>
      <Container className="w-100 h-100 p-3 ">
        {ready ? (
          urlData.profiles.length > 0 ? (
            <>
              <div className="d-flex w-100 justify-content-end">
                <Button
                  variant={editMode ? "outline-primary" : "outline-secondary"}
                  className="mb-3 ml-auto"
                  onClick={() => setEditMode((prev) => !prev)}
                >
                  {!editMode ? (
                    <>
                      <Pencil /> Edit Profiles
                    </>
                  ) : (
                    <>
                      <Done />
                      Done
                    </>
                  )}
                </Button>
              </div>
              <Form>
                <div>
                  <ListProfiles
                    urlData={urlData}
                    updateURLData={updateURLData}
                    editMode={editMode}
                  />
                </div>
              </Form>
            </>
          ) : (
            <p>
              <em>No Profiles.</em>{" "}
              <Button
                variant={"link"}
                className="p-0 pb-1"
                onClick={addNewProfile}
              >
                <em>Add New Profile</em>
              </Button>
            </p>
          )
        ) : (
          <FullActivityIndicator />
        )}
      </Container>
    </div>
  );
};
export default Home;
