import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
    let {title,description,imageurl,newsUrl} = this.props;
    return (
        <div className="card my-3" style={{width: "18rem"}}>
            <img src={imageurl == null ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgoxqepc3XGcYC71Vo0jk-Y4YHpcC-BX2QlA&usqp=CAU" : imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
    )
  }
}

export default NewsItem