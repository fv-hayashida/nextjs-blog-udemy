import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link'
import Layout, { siteTitle } from '../components/Layout'
import utils from '../styles/utils.module.css'
import { getPostsData } from '../lib/post'


// SSGの場合　最初の一度だけ処理すればいい場合に使用する
//next.jsの固定関数
// eslint-disable-next-line @next/next/no-typos
export async function getStaticProps() {
  const allPostsData = getPostsData()

  return {
    props: {
      allPostsData
    }
  }
}

// SSR リクエストごとに更新する場合に使用する
//next.jsの固定関数
// contextにはユーザーが入力した情報が入る
// export async function getServerSideProps(context){
//   return{
//     props:{
//       //コンポーネントに渡すためのprops 
//     }
//   }
// }

export default function Home({allPostsData}) {
  return (
    // homeは画像のサイズ切り分けに使用している
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <section className={utils.headingMd}>
          <p>ブログを新規作成しました。</p>
        </section>

        <section>
          <div className={utils.boldText}>エンジニアのブログ</div>

          <div className={styles.grid}>
            {allPostsData.map(({id, title, date, thumbnail}) => (

              <article key={id}>
                <Link href={`/posts/${id}`}>
                  <img  className={styles.thumbnailImage} src={`${thumbnail}`} alt="" />
                </Link>
                <Link href={`/posts/${id}`}>
                  <a className={utils.boldText}>{title}</a>
                </Link>
                <br />
                <small className={utils.lightText}>{date}</small>
              </article>
            ))}
          </div>

        </section>
    </Layout>
  )
}
