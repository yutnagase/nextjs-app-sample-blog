import { Inter } from "next/font/google";
import Layout from "../components/Layout";
import Link from "next/link";
import utilStyle from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import { getPostsData } from "@/lib/post";

// SSGの場合 Next.js用意のfunction
export async function getStaticProps() {
  const allPostsData = await getPostsData();
  console.log(allPostsData);
  return {
    props: {
      allPostsData, //これをHomeに渡す
    },
  };
}

// //SSRの場合 contextにはユーザーからのリクエストが含まれる
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // コンポーネントに渡すためのprops

//     }
//   }

// }

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section className={utilStyle.headingMd}>
        <p>This page was created with Next.</p>
        <p>修正してみました。如何でしょうか</p>
      </section>
      <section>
        <h2>エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img
                  src={`${thumbnail}`}
                  className={styles.thumbnailImage}
                ></img>
              </Link>
              <Link href={`/posts/${id}`}>
                <p className={utilStyle.boldText}>{title}</p>
              </Link>
              <br />
              <small className={utilStyle.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
