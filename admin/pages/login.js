// import React, { Component } from "react";
import { Row, Col, Form, Icon, Input, Button, Checkbox } from "antd";
const { getFieldDecorator } = Form;


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  //   handleSubmit(e) {
  //     e.preventDefault();
  //     form.validateFields((err, values) => {
  //       if (!err) {
  //         console.log("Received values of form: ", values);
  //       }
  //     });
  //   }

  render() {
    return (
      <div style={{ marginTop:200}}>
        <Row>
          <Col span={6} offset={9}>
            <Form className="login-form">
              <Form.Item>
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item>
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Login;
