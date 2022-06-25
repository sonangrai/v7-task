/* eslint-disable react-hooks/exhaustive-deps */
import Loginform from "components/page/login/Loginform";
import Layout from "../components/layout/Layout";
import { connect } from "react-redux";
import { useEffect } from "react";

import { login } from "../redux/actions/auth";
import { useRouter } from "next/router";

function Login({ auth, login }) {
  const router = useRouter();

  //Redirecting if user is authenticated
  useEffect(() => {
    if (auth.isAuthenticated) {
      router.push("/");
    }
    return () => {};
  }, [auth]);

  return (
    <Layout title="Login" description="Login Page">
      <Loginform loginDispatch={login} authStore={auth} />
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
