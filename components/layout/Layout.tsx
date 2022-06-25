import Head from "next/head";
import styled from "styled-components";

/**
 *
 * @param param
 * @returns layout with title
 */
const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description || "Sayathari"} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description || "Sayathari"} />
        <meta property="og:site_name" content={title} />
        <meta property="Twitter:title" content={title} />
        <meta property="Twitter:description" content={description} />
      </Head>
      {children}
      <CopyRight>
        Done by:
        <a href="https://sonahangrai.com.np" target="_blank" rel="noreferrer">
          Rai Sonahang
        </a>
      </CopyRight>
    </>
  );
};

export default Layout;

const CopyRight = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;
