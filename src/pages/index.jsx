import React from 'react';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import pickup1 from '../assets/img/pickup1.jpg';
import pickup2 from '../assets/img/pickup2.jpg';
import pickup3 from '../assets/img/pickup3.jpg';
import main1 from '../assets/img/main1.jpg';
import main2 from '../assets/img/main2.jpg';
import main3 from '../assets/img/main3.jpg';
import Link from 'next/link';

const Index = ({ data }) => {
  return (
      <div>
        <div id="content">
        <div id="pickup" className="wrapper">
          <article>
            <Image src={pickup1} alt="テキストテキストテキスト" />
            <h2 className="article-title">タイトルテキストテキストテキストテキストテキストテキストテキスト</h2>
            <div className="readmore"><Link href="/company">READ MORE</Link></div>
          </article>
          <article>
            <Image src={pickup2} alt="テキストテキストテキスト" />
            <h2 className="article-title">タイトルテキストテキストテキストテキストテキストテキストテキスト</h2>
            <div className="readmore"><Link href="/company">READ MORE</Link></div>
          </article>
          <article>
            <Image src={pickup3} alt="テキストテキストテキスト" />
            <h2 className="article-title">タイトルテキストテキストテキストテキストテキストテキストテキスト</h2>
            <div className="readmore"><Link href="/company">READ MORE</Link></div>
          </article>
        </div>

        <div id="container" className="wrapper">
        <main>
          <article>
            <h2 className="article-title"><Link href="/company">タイトルテキストテキストテキストテキストテキスト</Link></h2>
            <ul className="meta">
              <li><Link href="/company">2020/01/01</Link></li>
              <li><Link href="/company">カテゴリ1</Link></li>
            </ul>
            <Link href="/company"><Image src={ main1 } alt="テキストテキストテキスト"/></Link>
            <p className="text">
              本文テキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <div className="readmore"><Link href="/company">READ MORE</Link></div>
          </article>

          <article>
            <h2 className="article-title"><Link href="/company">タイトルテキストテキストテキストテキストテキスト</Link></h2>
            <ul className="meta">
            <li><Link href="/company">2020/01/01</Link></li>
              <li><Link href="/company">カテゴリ1</Link></li>
            </ul>
            <Link href="/company"><Image src={ main2 } alt="テキストテキストテキスト"/></Link>
            <p className="text">
              本文テキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <div className="readmore"><Link href="/company">READ MORE</Link></div>
          </article>

          <article>
            <h2 className="article-title"><Link href="/company">タイトルテキストテキストテキストテキストテキスト</Link></h2>
            <ul className="meta">
            <li><Link href="/company">2020/01/01</Link></li>
              <li><Link href="/company">カテゴリ1</Link></li>
            </ul>
            <Link href="/company"><Image src={ main3 } alt="テキストテキストテキスト"/></Link>
            <p className="text">
              本文テキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <div className="readmore"><Link href="/company">READ MORE</Link></div>
          </article>
        </main>

        <Sidebar />
        </div>
        </div>
      </div>
  );
}

export const getStaticProps = async () => {
  // 必要なデータを取得する
  const data = {}; // ダミーデータとして使用
  return {
    props: {
      data,
    },
  };
};

export default Index;