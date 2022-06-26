import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";


const name = "ぞのりょー";
export const siteTitle = "Next.js blog"; 

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
          <img src="/images/zonoryo.jpg" className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}/>
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
          <img src="/images/zonoryo.jpg" className={`${utilStyles.borderCircle}`} width="100px" height="100px" />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">←　ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;