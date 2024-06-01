import React from 'react';
import Script from 'next/script';

function Footer() {
  return (
    <footer id="footer">
    <div className="content wrapper">
      <section className="item">
        <h3 className="footer-title">About</h3>
        <p>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <ul className="about-list">
          <li><a href="#" className="arrow">プロフィール詳細</a></li>
          <li><a href="#" className="arrow">お仕事の依頼</a></li>
          <li><a href="#" className="arrow">お問い合わせ</a></li>
        </ul>
      </section>

      <section className="item">
        <h3 className="footer-title">Menu</h3>
        <ul className="menu-list">
          <li><a href="#">NEW</a></li>
          <li><a href="#">CATEGORY</a></li>
          <li><a href="#">COLUMN</a></li>
          <li><a href="#">SERIES</a></li>
          <li><a href="#">Q&A</a></li>
        </ul>
      </section>

      <section className="item">
        <h3 className="footer-title">Twitter</h3>
        <a className="twitter-timeline" data-height="315" href="https://twitter.com/X?ref_src=twsrc%5Etfw">Tweets by X</a>
        <Script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></Script>
      </section>
    </div>

    <p className="copyright">&copy; Travel &amp; Blog</p>
  </footer>
  );
}

export default Footer;
