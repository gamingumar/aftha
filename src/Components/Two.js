/*
 * File: Two.js
 * Project: aftha
 * File Created: Thursday, 29th August 2019 6:31:15 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Friday, 30th August 2019 12:04:21 am
 * -----
 * Copyright 2019 - 2019 WhileGeek, https://umar.tech
 */

import React from "react";
import { Button, Typography, Divider, Card, Row, Col, Input } from "antd";
import { Container } from "./Container";
const { Title, Text } = Typography;
export const Two = props => {
  return (
    <Container>
      <Title level={3}>Component 2</Title>
      <Divider />

      <Row gutter={30}>
        <Col>
          <Input placeholder="www.placeholder.com" />
        </Col>
      </Row>

      <Divider />

      <Title level={4} strong>
        Response
      </Title>

      <Text code>
        loremLorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. The standard chunk of Lorem Ipsum used since the 1500s
        is reproduced below for those interested. Sections 1.10.32 and 1.10.33
        from de Finibus Bonorum et Malorum by Cicero are also reproduced in
        their exact original form, accompanied by English versions from the 1914
        translation by H. Rackham.
      </Text>

      <Divider />
      <Row>
        <Col span={12}>
          <Button type="primary" size="large">
            Send To C1
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
