/*
 * File: One.js
 * Project: aftha
 * File Created: Thursday, 29th August 2019 6:31:10 pm
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Friday, 30th August 2019 2:00:04 am
 * -----
 * Copyright 2019 - 2019 WhileGeek, https://umar.tech
 */

import React, { useState, useEffect } from "react";
import { Button, Input, Typography, Row, Col, Divider, Card } from "antd";
import { Container } from "./Container";
import Axios from "axios";

const { Title, Text } = Typography;

export const One = props => {
  const [text, setText] = useState("https://www.placeholder.com");

  const {url, response, sendUrlToC2, updateResponse} = props;

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (url !== "") {
      setText(url);
    }
  }, [url]);

  const _fetchData = async () => {
    setLoading(true);
    let urlText = `${text}`;
    try {
      let response = await Axios.get(urlText);
      let data = JSON.stringify(response.data);
  
      console.log('got data: ',  data)
      
      updateResponse(data);
    } catch (e) {
      alert(e.message)
    }

    setLoading(false);
    
  };

  return (
    <Container>
      <Title level={3}>Component 1</Title>
      <Divider />

      <Row gutter={30}>
        <Col>
          <Input
            value={text}
            disabled
            onChange={t => setText(t.target.value)}
            placeholder="www.placeholder.com"
          />
        </Col>
      </Row>

      <Divider />

      <Row>
        <Col span={6}>
          <Button
            type="primary"
            size="large"
            onClick={() => sendUrlToC2(text)}
          >
            Send Text to C2
          </Button>
        </Col>

        <Col span={6}>
          <Button type="danger" size="large"
          loading={loading}
          onClick={_fetchData}
          >
            Call API
          </Button>
        </Col>
      </Row>

      <Divider />
      <Row>
        <Title level={4}>Data from C2</Title>
      </Row>

      <Divider />

      <Text code>{response}</Text>

    </Container>
  );
};
