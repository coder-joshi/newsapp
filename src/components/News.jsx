import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
// import data from "../../sampleOutput.json";

function News() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const pageSize = 20;

  async function getData(pageNo) {
    let res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=735a26f2a35145d583ec98b0a0177b51&page=${pageNo}&pageSize=${pageSize}`,
    );
    let parsedData = await res.json();

    setData(parsedData);
    setTotalResults(parsedData.totalResults);
    // console.log(parsedData);
  }

  useEffect(() => {
    getData(page);
  }, []);

  function handleNextClick() {
    if (page < Math.ceil(totalResults / pageSize)) {
      getData(page + 1);
      setPage(page + 1);
    }
  }

  function handlePrevClick() {
    if(page>1){
      getData(page-1);
      setPage(page-1);
    }
  }

  return (
    <>
      <div className="grid grid-cols-3 p-5">
        {data &&
          data.articles.map((item) => {
            return (
              <NewsItem
                key={item.url}
                imgUrl={item.urlToImage}
                title={
                  item.title ? item.title.slice(0, 15) : "No title available"
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
      <div className="flex flex-wrap items-center justify-around gap-5 md:gap-12 m-5">
        <button
          disabled={page<=1}
          type="button"
          className="px-6 py-2 active:scale-95 transition bg-blue-500/20 rounded text-blue-500 text-sm font-medium cursor-pointer"
          onClick={handlePrevClick}
        >
          ⏮️Previous
        </button>
        <button
          disabled={page>=Math.ceil(totalResults/pageSize)}
          type="button"
          className="px-6 py-2 active:scale-95 transition bg-blue-500/20 rounded text-blue-500 text-sm font-medium cursor-pointer"
          onClick={handleNextClick}
        >
          Next⏭️
        </button>
      </div>
    </>
  );
}

export default News;
