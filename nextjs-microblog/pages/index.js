import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "@/components/Layout";

import utilStyle from "../styles/utils.module.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return <Layout>
    <section className={utilStyle.headingMd}>
      <p>
        私はフルスタックエンジニアです/Udemy講師として活動しています/好きな言語はJavaScriptです
      </p>
    </section>

    <section>
      <h2>📝エンジニアのブログ</h2>
      <div className={styles.grid}>
        <article>
          <Link href="/">
            <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage} />
          </Link>
          <Link href="/" className={utilStyle.boldText}>
            SSGとSSRの使い分けの場面はいつなのか？
          </Link>
          <br/>
          <small className={utilStyle.lightText}>February 23, 2023</small>
        </article>
        <article>
          <Link href="/">
            <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage} />
          </Link>
          <Link href="/" className={utilStyle.boldText}>
            SSGとSSRの使い分けの場面はいつなのか？
          </Link>
          <br/>
          <small className={utilStyle.lightText}>February 23, 2023</small>
        </article>
        <article>
          <Link href="/">
            <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage} />
          </Link>
          <Link href="/" className={utilStyle.boldText}>
            SSGとSSRの使い分けの場面はいつなのか？
          </Link>
          <br/>
          <small className={utilStyle.lightText}>February 23, 2023</small>
        </article>
        <article>
          <Link href="/">
            <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage} />
          </Link>
          <Link href="/" className={utilStyle.boldText}>
            SSGとSSRの使い分けの場面はいつなのか？
          </Link>
          <br/>
          <small className={utilStyle.lightText}>February 23, 2023</small>
        </article>
      </div>
    </section>
  </Layout>;
}
