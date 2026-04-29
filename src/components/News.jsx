import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

// import data from "../../sampleOutput.json";

function News({ category }) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const [loading, setLoading] = useState(false);
  const pageSize = 6;

  async function getData(pageNo) {
    setLoading(true);
    let res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=735a26f2a35145d583ec98b0a0177b51&page=${pageNo}&pageSize=${pageSize * 2}`,
    );
    let parsedData = await res.json();

    setLoading(false);
    const validArticles = (parsedData.articles || [])
      .filter(
        (item) =>
          item.title !== "Removed" && item.url !== "https://removed.com",
      )
      .slice(0, pageSize);

    setArticles(validArticles);
    console.log(validArticles.length);
    setHasNext(validArticles.length >= pageSize);

    // console.log(parsedData);
  }

  useEffect(() => {
    getData(page); // runs when EITHER page or category changes
  }, [page, category]);

  // In News.jsx, reset page when category prop changes
  useEffect(() => {
    setPage(1);
  }, [category]);

  function handleNextClick() {
    if (hasNext) setPage((prev) => prev + 1);
  }

  function handlePrevClick() {
    if (page > 1) setPage((prev) => prev - 1);
  }

  return (
    <>
      <div className="news">
        <div className="flex text-center justify-center text-4xl p-5">
          NewsMonkey - Top Headlines
        </div>
        {loading && <Spinner />}
        {!loading && (
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
        )}
        <div className="flex flex-wrap items-center justify-around gap-5 md:gap-12 m-5">
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
        </div>
      </div>
    </>
  );
}

export default News;
