/* eslint-disable react-hooks/exhaustive-deps */
import Signupform from "components/page/signup/Signupform";
import Layout from "../components/layout/Layout";
import { connect } from "react-redux";
import { useEffect } from "react";

import { signup } from "../redux/actions/auth";
import { useRouter } from "next/router";

function Login({ auth, signup }) {
  const router = useRouter();

  //Redirecting if user is authenticated
  useEffect(() => {
    if (auth.isAuthenticated) {
      router.push("/");
    }
    return () => {};
  }, [auth]);

  return (
    <Layout title="Sign Up" description="Sign Up Page">
      <Signupform signupDispatch={signup} authStore={auth} />
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { signup };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
