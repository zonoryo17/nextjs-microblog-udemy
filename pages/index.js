import styles from '../styles/Home.module.css'
import Layout, { siteTitle } from '../components/layout'

import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import { getPostsData } from '../lib/post';
import Head from 'next/head'
import Image from 'next/image';

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData(); //mdファイルのid,title,dataなどが格納されるy

  return {
    props: {
      allPostsData,
      //コンポーネントに渡すためのprops
    },
  };
}

// //SSRの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {

//     }
//   }
// }

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>現在はリハビリ職をしていて，エンジニアとして転職を目指してプログラミングを学習しています。</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({id, title, date, thumbnail}) => (
            <article key={id}>
            <Link href={`/posts/${id}`}>
              <Image src={`${thumbnail}`}
                className={styles.thumbnailImage}/>
            </Link>
            <Link href={`/posts/${id}`}>
              <a className={utilStyles.boldText}>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>{date}</small>
          </article>
          ))}
        </div>
      </section>

    </Layout>
  )
}
