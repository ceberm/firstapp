import React from "react"

import NewsItem from "./news_list_item";

const NewsList = props =>{
    console.log(props);
    const news = props.news.map((item,i) => (
        <NewsItem item={item} key={i}></NewsItem>
    ));

    return (
        <>
            <div>{props.message}</div>
            <div>{news}</div>
        </>
    )
}

export default NewsList
