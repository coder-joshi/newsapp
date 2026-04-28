import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
// import data from "../../sampleOutput.json";

function News() {
  const [data, setData] = useState(null);

  async function getData() {
    let res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=735a26f2a35145d583ec98b0a0177b51",
    );
    let parsedData = await res.json();
    setData(parsedData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 p-5">
        {data &&
          data.articles.map((item) => {
            return (
              <NewsItem
                key={item.url}
                imgUrl={item.urlToImage}
                title={item.title}
                desc={
                  item.description
                    ? item.description.slice(0, 88)
                    : "No Description available"
                }
                url={item.url}
              />
            );
          })}
      </div>
    </>
  );
}

export default News;
