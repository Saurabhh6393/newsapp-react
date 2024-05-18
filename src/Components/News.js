import PropTypes from 'prop-types';
import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';


export class News extends Component {
  static defaultProps = {
    country:"in",
    pageSize:15,
    category : "general"
  }
   static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }

  
  capitalizeFirstletter = (string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
        

    constructor(props){
      super(props);
      console.log("this is a news item")
      this.state = {
        articles: [],
        loader:false, 
        page :1  
       }
       document.title= `${this.capitalizeFirstletter(this.props.category)} - NewsApp`;
    }

    async updateNews(){
      console.log("updateNews",this.props.category)
     if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
        console.log("updateNews",this.props.category)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4e96e30995d14956ae69e48f7c816e3c&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loader:true});
        let data =await fetch(url);
        let parsedData = await data.json()
        this.setState({
         page : this.state.page+1,
         articles: parsedData.articles,
         loader: false
        })
       }
      }

     async componentDidMount(){
      this.updateNews();
      }

      handleNextClick = async ()=>{
       this.setState({page:this.state.page+1})
       console.log("next ")
       this.updateNews();
      }
       
      handlePreviousClick =async ()=>{
        this.setState({page:this.state.page-1})
        console.log("previous")
        this.updateNews();
      }
       

  render() {
    return (
      <div className='container my-4 '>
        <h1 className='text-center' style={{marginTop:'90px'}}>NewsApp - Top {this.capitalizeFirstletter(this.props.category)} Headlines </h1>
        {this.state.loader && <Spinner/>}
        
        <div className=" row my-4 ">
        
        { this.state.articles.map((element)=>{
          return <div className="col-md-4 my-4" key={element.url}>
           <NewsItem  title = {element.title ? element.title.slice(0,45):""} description = {element.description ? element.description.slice(0,88):""}
           imageUrl = {element.urlToImage} newsUrl = {element.url} />
         </div>

        })}
         </div>
        
       
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1}type="button" className="btn btn-primary" onClick={this.handlePreviousClick}> &larr; Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        
      </div>
    )
  }
}

export default News

