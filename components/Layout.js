import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Fox Next JS";
export const siteTitle = "Fox Blog";
const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/fabicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img
              src="/images/profile.png"
              alt=""
              className={`${styles.headerImage} ${utilStyles.borderCircle}`}
            />
            <h2 className={utilStyles.headingLg}>{name}</h2>
          </>
        )}

        <main>{children}</main>
        {!home && (
          <div>
            <Link href="/">← ホームへ戻る</Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Layout;
