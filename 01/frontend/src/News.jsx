import axios from 'axios'
import React, { useEffect, useState } from 'react'

const News = () => {
    const[news,setNews]=useState([])

    useEffect(()=>{
        axios.get('/api/helper')
        .then((res)=>{
            setNews(res.data)
        })
    })
  return (
    <div>News {news.length}
    {
    news.map((i)=><div>
        <h3>{i.id}</h3>
        <h1>{i.name}</h1>
    </div>)

}</div>
  )
}

export default News