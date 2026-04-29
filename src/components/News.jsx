import React, { useEffect, useState, useRef } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
const apiKey = import.meta.env.VITE_API_KEY;

// import data from "../../sampleOutput.json";

function News({ category }) {
  const [articles, setArticles] = useState([]);
  // const [page, setPage] = useState(1);
  const pageRef = useRef(1);

  const [hasNext, setHasNext] = useState(true);
  const [loading, setLoading] = useState(false);
  const pageSize = 6;

  // Change getData to accept page and append
  async function getData(pageNo) {
    setLoading(true);
    let res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&page=${pageNo}&pageSize=${pageSize}`,
    );
    let parsedData = await res.json();
    setLoading(false);

    const validArticles = (parsedData.articles || []).filter(
      (item) => item.title !== "Removed" && item.url !== "https://removed.com",
    );
    //Code for loading more articles
    setArticles((prev) => [...prev, ...validArticles]); // APPEND, don't replace
    setHasNext(pageNo * pageSize < parsedData.totalResults);
  }

  // useEffect(() => {
  //   getData(page); // runs when EITHER page or category changes
  // }, [page, category]);

  // // In News.jsx, reset page when category prop changes
  // useEffect(() => {
  //   setPage(1);
  // }, [category]);

  useEffect(() => {
    setArticles([]);
    pageRef.current = 1; // reset ref instead of state
    setHasNext(true);
    getData(1);
  }, [category]);

  function fetchMore() {
    pageRef.current += 1; // ✅ always the latest value
    getData(pageRef.current);
  }

  // function handleNextClick() {
  //   if (hasNext) setPage((prev) => prev + 1);
  // }

  // function handlePrevClick() {
  //   if (page > 1) setPage((prev) => prev - 1);
  // }

  return (
    <>
      <div className="news">
        <div className="flex text-center justify-center text-4xl p-5">
          NewsMonkey - Top Headlines
        </div>
        {/* {loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMore}
          hasMore={hasNext}
          loader={<Spinner />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 max-w-7xl mx-auto justify-items-center">
            {articles &&
              articles.map((item) => {
                return (
                  <NewsItem
                    key={item.url}
                    imgUrl={item.urlToImage}
                    title={
                      item.title
                        ? item.title.slice(0, 15)
                        : "No title available"
                    }
                    desc={
                      item.description
                        ? item.description.slice(0, 100)
                        : "No Description available"
                    }
                    url={item.url}
                  />
                );
              })}
          </div>
          {/* {console.log(hasNext)} */}
        </InfiniteScroll>
        {/* <div className="flex flex-wrap items-center justify-around gap-5 md:gap-12 m-5">
          <button
            disabled={page <= 1}
            type="button"
            className="px-6 py-2 active:scale-95 transition bg-blue-500/20 rounded text-blue-500 text-sm font-medium cursor-pointer"
            onClick={handlePrevClick}
          >
            ⏮️Previous
          </button>
          <div className="page-numbering">{page}</div>
          <button
            disabled={!hasNext}
            type="button"
            className="px-6 py-2 active:scale-95 transition bg-blue-500/20 rounded text-blue-500 text-sm font-medium cursor-pointer"
            onClick={handleNextClick}
          >
            Next⏭️
          </button>
        </div> */}
      </div>
    </>
  );
}

export default News;
