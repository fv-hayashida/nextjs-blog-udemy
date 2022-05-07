import Head from "next/head";
import Layout, { siteTitle } from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";
import utils from "../../styles/utils.module.css"

//next.jsの固定関数
export async function getStaticPaths(){
	const paths = getAllPostIds()

	return{
		paths,
		/**
		 * fallback
		 * 
		 * falseだと、pathに含まれていないpathにアクセスすると400を返す
		 * trueだとpathが解決できずにエラー画面が表示される
		 */
		fallback: false 
	}
}

export async function getStaticProps({ params }){
	const postData = await getPostData(params.id)

	return{
		props: {
			postData,
		}
	}
}

export default function Post({ postData }) {
	return (
		<Layout>
			<Head>
				<title>{ postData.title }</title>
			</Head>
			<article>
				<h1 className={utils.hedingX1}>{postData.title}</h1>
				<div className={utils.liteText}>{postData.date}</div>
				{/* dangerouslySetInnerHTMLはサニタイズしてから使用する XSS対策を行うこと　*/}
				<div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML}}/>
			</article>
		</Layout>
	);
}