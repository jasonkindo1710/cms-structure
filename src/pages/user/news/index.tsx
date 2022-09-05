import React from "react";
import { fetchApi, baseUrl } from "../../../utils/fetchApi";
import Link from "next/link";

export async function getStaticProps() {
  const allNewsCurrent = await fetchApi(`${baseUrl}/news`);
  return {
    props: {
      allNewsCurrent: allNewsCurrent?.news,
    },
  };
}

const News = ({ allNewsCurrent } : any) => {
  
  return (
    <div>
      <h1 className="news-title">News</h1>

      <div className="news-item">
        {allNewsCurrent.splice(0, 3).map((news: any) => (
          <Link href={"/news/" + news.source.id} key={news.title}>
            <div className="news-item-detail">
              <img src={news.urlToImage} width={350} height={280} />
              <h2>{news?.title}</h2>
              <p>{news?.description}</p>
              <p>{news?.publishedAt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default News;
