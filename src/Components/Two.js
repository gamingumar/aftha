/*
 * File: Two.js
 * Project: aftha
 * File Created: Thursday, 29th August 2019 6:31:15 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Friday, 30th August 2019 1:49:59 am
 * -----
 * Copyright 2019 - 2019 WhileGeek, https://umar.tech
 */

import React, { useState, useEffect } from "react";
import { Button, Typography, Divider, Card, Row, Col, Input } from "antd";
import { Container } from "./Container";
const { Title, Text } = Typography;
export const Two = props => {

  const {url, updateUrl, response, updateResponse} = props;

  const _updateUrl = (val) => {
    if (url !== "") {
      updateUrl(val);
    } else {
      alert("please send text from c1 first.")
    }
  }

  

  return (
    <Container>
      <Title level={3}>Component 2</Title>
      <Divider />

      <Row gutter={30}>
        <Col>
          <Input
            value={url}
            onChange={t => _updateUrl(t.target.value)}
            placeholder="www.placeholder.com"
          />
        </Col>
      </Row>

      <Divider />

      <Title level={4} strong>
        Response
      </Title>

      <Text code>{response}</Text>

      <Divider />
      <Row>
        <Col span={12}>
          <Button
          onClick={() => updateResponse(response)}
          type="primary" size="large">
            Send To C1
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
