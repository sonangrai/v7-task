import Layout from "components/layout/Layout";
import Welcome from "components/page/home/Welcome";
import { connect } from "react-redux";

function Home({ auth }) {
  return (
    <Layout title="V7 - Task" description="Test Task">
      <Welcome authState={auth} />
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Home);
