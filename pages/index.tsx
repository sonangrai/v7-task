import Layout from "components/layout/Layout";
import Welcome from "components/page/home/Welcome";
import { connect } from "react-redux";

import { logout } from "../redux/actions/auth";

function Home({ auth, logout }) {
  return (
    <Layout title="V7 - Task" description="Test Task">
      <Welcome authState={auth} logoutDispatch={logout} />
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
