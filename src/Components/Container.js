/*
 * File: Container.js
 * Project: aftha
 * File Created: Thursday, 29th August 2019 11:17:14 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Thursday, 29th August 2019 11:40:49 pm
 * -----
 * Copyright 2019 - 2019 WhileGeek, https://umar.tech
 */

import React from "react";
import { Button, Input, Typography, Row, Col, Card } from "antd";

const { Title } = Typography;

export const Container = props => {
  return (
    // <div
    //   style={{
    //     // backgroundColor: "white",
    //     // border: "1px solid black",
    //     padding: "20px",
    //     // margin: "10px",
    //     height: "100vh"
    //     // minWidth: "400px",
    //   }}
    // >
    <Card>
    {props.children}
      
    </Card>
    // </div> 
  );
};
