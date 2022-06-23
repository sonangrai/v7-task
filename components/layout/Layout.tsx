import Head from "next/head";

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
    </>
  );
};

export default Layout;
