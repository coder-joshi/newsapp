import React from 'react'
import NewsItem from './NewsItem'
import data from "../../sampleOutput.json"

function News() {
  
  return (
    <>
    <div className='grid grid-cols-3 p-5'>
        {data.articles.map((item)=>{
          return (<NewsItem key={item.url} imgUrl={item.urlToImage} title={item.title.slice(0,45)} desc={item.description.slice(0,88)} url={item.url}/>)
        })}
    </div>
    </>
  )
}

export default News