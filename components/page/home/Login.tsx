import styled from "styled-components";
import { Row, Col, Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import Link from "next/link";

const Login = () => {
  return (
    <LoginBox>
      <Row>
        <Col span={12}>
          <Link href="/login">
            <a>
              <Button type="primary" icon={<LoginOutlined />}>
                Log In
              </Button>
            </a>
          </Link>
        </Col>
        <Col span={12}>
          <Link href="/signup">
            <a>
              <Button icon={<LoginOutlined />}>Sign Up</Button>
            </a>
          </Link>
        </Col>
      </Row>
    </LoginBox>
  );
};

export default Login;

//Styles
const LoginBox = styled.div``;
