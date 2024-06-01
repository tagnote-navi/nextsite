import React from 'react';
import Sidebar from '../components/Sidebar';
import company from '../assets/img/company.jpg';
import Link from 'next/link';
import Image from 'next/image';

const Company = () => {
  return (
      <div>
        <div id="content">
        <div id="pickup" className="wrapper">
          <article>
            <Image src={ company } alt="テキストテキストテキスト"/>
            <h2 className="article-title">タイトルテキストテキストテキストテキストテキストテキストテキスト</h2>
            <div className="readmore"><Link href="/">READ MORE</Link></div>
          </article>

          <article>
            <Image src={ company } alt="テキストテキストテキスト"/>
            <h2 className="article-title">タイトルテキストテキストテキストテキストテキストテキストテキスト</h2>
            <div className="readmore"><Link href="/">READ MORE</Link></div>
          </article>

          <article>
            <Image src={ company } alt="テキストテキストテキスト"/>
            <h2 className="article-title">タイトルテキストテキストテキストテキストテキストテキストテキスト</h2>
            <div className="readmore"><Link href="/">READ MORE</Link></div>
          </article>
        </div>

        <div id="container" className="wrapper">
        <main>
          <article>
            <h2 className="article-title"><Link href="/">タイトルテキストテキストテキストテキストテキスト</Link></h2>
            <ul className="meta">
              <li><Link href="/">2020/01/01</Link></li>
              <li><Link href="/">カテゴリ1</Link></li>
            </ul>
            <Link href="/"><Image src={ company } alt="テキストテキストテキスト"/></Link>
            <p className="text">
              本文テキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <div className="readmore"><Link href="/">READ MORE</Link></div>
          </article>

          <article>
            <h2 className="article-title"><Link href="/">タイトルテキストテキストテキストテキストテキスト</Link></h2>
            <ul className="meta">
            <li><Link href="/">2020/01/01</Link></li>
              <li><Link href="/">カテゴリ1</Link></li>
            </ul>
            <Link href="/"><Image src={ company } alt="テキストテキストテキスト"/></Link>
            <p className="text">
              本文テキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <div className="readmore"><Link href="/">READ MORE</Link></div>
          </article>

          <article>
            <h2 className="article-title"><Link href="/">タイトルテキストテキストテキストテキストテキスト</Link></h2>
            <ul className="meta">
            <li><Link href="/">2020/01/01</Link></li>
              <li><Link href="/">カテゴリ1</Link></li>
            </ul>
            <Link href="/"><Image src={ company } alt="テキストテキストテキスト"/></Link>
            <p className="text">
              本文テキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <div className="readmore"><Link href="/">READ MORE</Link></div>
          </article>
        </main>

        <Sidebar />
        </div>
        </div>
      </div>
  );
}

export async function getStaticProps() {
  // 必要なデータを取得するロジックをここに記述
  const data = {}; // 例として空のオブジェクトを渡す
  return {
    props: {
      data,
    },
  };
}

export default Company;