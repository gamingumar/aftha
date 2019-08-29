/*
 * File: App.js
 * Project: aftha
 * File Created: Thursday, 29th August 2019 6:28:45 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Thursday, 29th August 2019 11:37:03 pm
 * -----
 * Copyright 2019 - 2019 WhileGeek, https://umar.tech
 */
import React from "react";
import logo from "./logo.svg";
import "antd/dist/antd.css";
import "./App.css";
import { One } from "./Components/One";
import { Two } from "./Components/Two";
import { Row, Col } from "antd";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
        <Row>
          <Col span={12} >
            <One />
          </Col>
          <Col span={12}>
            <Two />
          </Col>
        </Row>
    //   </header>
    // </div>
  );
}

export default App;
