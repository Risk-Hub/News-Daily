import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      pageSize: 12,
      totalResults: -1
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=34100b693d8344bab8487b8284ffdfc3";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults})
  }

  pages = ()=>{
    const pagers = Array.from({length: Math.ceil(this.totalResults/this.pageSize)},(index)=>{
      return <li className="page-item active"><a className="page-link" href="/">1</a></li>
    })
  }
  render() {
    return (
      <>
      <div className="container my-3" style={{maxWidth: "73rem"}}>
        <h2>News Daily - Top Headlines</h2>
        <div className="d-flex justify-content-between flex-wrap" >
          {this.state.articles.map((element)=>{
            return <NewsItem key={element.url} title={element.title} description={element.description == null ? "No description" : element.description.slice(0,90)} imageurl={element.urlToImage} newsUrl={element.url}/>
          })}
        </div>
      </div>
      <div className="d-flex justify-content-center">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="/" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              {/* <li className="page-item active"><a className="page-link" href="/">1</a></li>
              <li className="page-item"><a className="page-link" href="/">2</a></li>
              <li className="page-item"><a className="page-link" href="/">3</a></li> */}
              
              <li className="page-item">
                <a className="page-link" href="/" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
      </div>
      </>
    );
  }
}

export default News;