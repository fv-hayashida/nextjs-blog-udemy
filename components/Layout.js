import Head from "next/head";
import styles from "./layout.module.css"
import utils from "../styles/utils.module.css"
import Image from "next/image";
import Link from "next/link";

const name ="hayashida prof"
export const siteTitle = "next.js blog"

function layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<meta name="description" content="Generetad by next app"/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className={styles.header}>
				{ home ? (
					<>
						<Image 
							className={`${utils.borderCircle} ${styles.headerHomeImage}`} 
							src="/images/icon_me.jpg " 
							alt="" width={100} height={100} 
						/>
						<h1 className={utils.heading2Xl}>{name}</h1>
					</>
				) : (
					<>
						<Image 
							className={`${utils.borderCircle} `} 
							src="/images/icon_me.jpg " 
							alt="" width={50} height={50} 
						/>
						<h1 className={utils.heading2Xl}>{name}</h1>
					</>
				)}

			</header>
			<main>{children}</main>
			{ !home && (
				<div>
					<Link href="/">戻るボタン</Link>
				</div>
			)}
		</div>
	);
}

export default layout;