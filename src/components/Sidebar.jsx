import React from 'react';
import author from '../assets/img/author.jpg';
import ranking1 from '../assets/img/ranking1.jpg';
import ranking2 from '../assets/img/ranking2.jpg';
import ranking3 from '../assets/img/ranking3.jpg';
import Image from 'next/image';

function Sidebar() {
  return (
<aside id="sidebar">
        <section className="author">
          <Image src={ author } alt="テキストテキストテキスト"/>
          <h3 className="side-title">Name Name</h3>
          <p className="profile">
            プロフィールテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </section>

        <section className="ranking">
          <h3 className="side-title">Ranking</h3>
          <article>
            <a href="#">
              <Image src={ ranking1 } alt="テキストテキストテキスト"/>
              <h4 className="article-title">タイトルテキストテキストテキストテキストテキストテキスト</h4>
            </a>
          </article>

          <article>
            <a href="#">
              <Image src={ ranking2 } alt="テキストテキストテキスト"/>
              <h4 className="article-title">タイトルテキストテキストテキストテキストテキストテキスト</h4>
            </a>
          </article>

          <article>
            <a href="#">
              <Image src={ ranking3 } alt="テキストテキストテキスト"/>
              <h4 className="article-title">タイトルテキストテキストテキストテキストテキストテキスト</h4>
            </a>
          </article>
        </section>

        <section className="archive">
          <h3 className="side-title">Archive</h3>
          <ul>
            <li><a href="#">XXXX年XX月</a>(XX)</li>
            <li><a href="#">XXXX年XX月</a>(XX)</li>
            <li><a href="#">XXXX年XX月</a>(XX)</li>
            <li><a href="#">XXXX年XX月</a>(XX)</li>
            <li><a href="#">XXXX年XX月</a>(XX)</li>
            <li><a href="#">XXXX年XX月</a>(XX)</li>
            <li><a href="#">XXXX年XX月</a>(XX)</li>
            <li><a href="#">XXXX年XX月</a>(XX)</li>
            <li><a href="#">XXXX年XX月</a>(XX)</li>
            <li><a href="#">XXXX年XX月</a>(XX)</li>
            <li><a href="#">XXXX年XX月</a>(XX)</li>
            <li><a href="#">XXXX年XX月</a>(XX)</li>
            <li><a href="#">XXXX年XX月</a>(XX)</li>
            <li><a href="#">XXXX年XX月</a>(XX)</li>
            <li><a href="#">XXXX年XX月</a>(XX)</li>
          </ul>
        </section>
      </aside>
  );
}

export default Sidebar;