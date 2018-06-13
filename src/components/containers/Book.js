import React, { Component } from 'react';
import BookList from '../presentational/BookList';
import ToggleDetail from '../presentational/ToggleDetail'

class Book extends Component {
  constructor(props){
    super(props);
    this.state={
      books: [],
    }
  }

  // calls on componentDidMount in order to load the book array, re-render,
  // and push the information to the BookList.js child, which displays the information
  componentDidMount(){
    fetch(`https://s3.amazonaws.com/api-fun/books.json`)
    .then(data => data.json())
    .then(data=> {
      this.setState({
        books: data.data.books
      })
    })
  }

  // toggleAlpha is the method used to filter the book arry in alphabetical order
  // using the compare method written within toggleAlpha. it is called on by the onClick
  // event in the toggleDetail child component

  // it changes the state containing the original book array, force a re-render, push the new book array to the child
  // component, and display the new book list

  // although forcing a rerender is not best practice, for a simple single-application, it seems
  // to be the easiest method, especially since setting the state would not cause a re-render, not sure why
  toggleAlpha=(e)=>{
    e.preventDefault();

    let compare=(a,b)=>{
      if (a.title < b.title)
        return -1;
      if (a.title > b.title)
        return 1;
      return 0;
    }

    let newBooks = this.state.books.sort(compare);

    this.setState=({
      books: newBooks
    })

    this.forceUpdate()

  }


  // toggleDate is the method used to filter the book arry in alphabetical order
  // using the compare method written within toggleDate. it is called on by the onClick
  // event in the toggleDetail child component

  // it changes the state containing the original book array, force a re-render, push the new book array to the child
  // component, and display the new book list

  // although forcing a rerender is not best practice, for a simple single-application, it seems
  // to be the easiest method, especially since setting the state would not cause a re-render, not sure why
  toggleDate=(e)=>{
    e.preventDefault();

    let compare=(a,b)=>{
      if (a.PublishDate < b.PublishDate)
        return -1;
      if (a.PublishDate > b.PublishDate)
        return 1;
      return 0;
    }

    let newBooks = this.state.books.sort(compare);

    this.setState=({
      books: newBooks
    })

    this.forceUpdate()
  }

render() {
  return (
    <div>
      <ToggleDetail toggleAlpha={this.toggleAlpha} toggleDate={this.toggleDate}/>
      <BookList books={this.state.books} />
    </div>
  );


  }
}

export default Book;
