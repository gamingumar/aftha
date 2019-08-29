/*
 * File: App.js
 * Project: aftha
 * File Created: Thursday, 29th August 2019 6:28:45 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Friday, 30th August 2019 1:49:59 am
 * -----
 * Copyright 2019 - 2019 WhileGeek, https://umar.tech
 */
import React, { createContext, useState } from "react";
import logo from "./logo.svg";
import "antd/dist/antd.css";
import "./App.css";
import { One } from "./Components/One";
import { Two } from "./Components/Two";
import { Row, Col } from "antd";
function App() {
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState("");
  const [responseC1, setResponseC1] = useState("");

  const _updateUrl = data => {
    console.log("got in app: ", data);
    setUrl(data);
  };

  return (
    <Row>
      <Col span={12}>
        <One
          url={url}
          sendUrlToC2={_updateUrl}
          updateResponse={setResponse}
          response={responseC1}
        />
      </Col>
      <Col span={12}>
        <Two url={url} updateUrl={_updateUrl} response={response} updateResponse={setResponseC1} />
      </Col>
    </Row>
  );
}

export default App;
