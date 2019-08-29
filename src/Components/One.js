/*
 * File: One.js
 * Project: aftha
 * File Created: Thursday, 29th August 2019 6:31:10 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Thursday, 29th August 2019 11:49:56 pm
 * -----
 * Copyright 2019 - 2019 WhileGeek, https://umar.tech
 */

import React from "react";
import { Button, Input, Typography, Row, Col, Divider, Card } from "antd";
import { Container } from "./Container";

const { Title } = Typography;

export const One = props => {
  return (
    <Container>
      <Title level={3}>Component 1</Title>
      <Divider />

      <Row gutter={30}>
        <Col>
          <Input disabled placeholder="www.placeholder.com" />
        </Col>
      </Row>

      <Divider />
      
      <Row>
        <Col span={6}>
          <Button type="primary" size="large">
            Send Text
          </Button>
        </Col>

        <Col span={6}>
          <Button type="danger" size="large">
            Call API
          </Button>
        </Col>
      </Row>

      <Divider/>
      <Row>
      <Title level={4}>Data from C2</Title>

      </Row>

      
    </Container>
  );
};
