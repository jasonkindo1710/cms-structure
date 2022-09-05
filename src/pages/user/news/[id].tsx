
import React from "react";
import { fetchApi, baseUrl } from "../../utils/fetchApi";

export async function getServerSideProps({params: {id},}) {
    const data = await fetchApi(`${baseUrl}/news/${id}`);
    return{
        props: {
            NewsDetails: data,
        }
    }
}

const NewsDetail = ({NewsDetails}) => {
    console.log(NewsDetails);
  
  return (
    <div>
        <h1>Page Detail</h1>
        <p>{NewsDetails?.message}</p>
    </div>
  )
};

export default NewsDetail;
