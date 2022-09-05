import type { NextPage } from "next";
import LandingPage from "./admin/landingpage/Index";

import React from "react";
import { fetchApi, baseUrl } from "../utils/fetchApi";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  const allNewsCurrent = await fetchApi(`${baseUrl}/news`);
  return {
    props: {
      allNewsCurrent: allNewsCurrent?.news,
    },
  };
}


const Home: NextPage = ({ allNewsCurrent }:any) => {
  
  return (
    <div>
      <h1 className="news-title">Home</h1>

      <div className="main-news">
        <div className="headlight">
        {allNewsCurrent?.splice(0, 1).map((news: any) => (
          <Link href={"/news/" + news.source.id} key={news.title}>
            <div className="headlight-details">
              <img src={news.urlToImage} width={520} height={320} />
              <h2>{news?.title}</h2>
              <p>{news?.description}</p>
              <div className="headlight-details-desc">
              <p> {news?.author}</p>
              <p>{news?.publishedAt}</p>
              </div>
              
            </div>
          </Link>
        ))}
        </div>
        <div className="slash"></div>
        <div className="side-news">
        {allNewsCurrent?.splice(0, 4).map((news: any) => (
          <Link href={"/news/" + news.source.id} key={news.title}>
            <div className="side-news-details">
              <img src={news.urlToImage} width={200} height={150} />
              <h3>{news?.title.substring(0, 50).concat('...')}</h3>
              <p>{news?.author}</p>
            </div>
          </Link>
        ))}
        </div>
      </div>
      <div className="related-news">
          <h1 className="news-title">Related News</h1>
          <div className="related-news-item">
        {allNewsCurrent?.splice(0, 5).map((news: any) => (
          <Link href={"/news/" + news.source.id} key={news.title}>
            <div className="side-news-details">
              <img src={news.urlToImage} width={200} height={150} />
              <h3>{news?.title.substring(0, 50).concat('...')}</h3>
              <p>{news?.author}</p>
            </div>
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
