import React, { Component } from 'react';
import '../../styles/Books.css';


class BookList extends Component {

  render() {
    // goes through all the books and displays them on two columns, which stack
    // on top of one another. It also makes sure that there are books to display first,
    // as the fetch request is asynchronous
    const books = this.props.books && this.props.books.map( (book, i) => {
      return (
        <div class="column">
          <img src={book.imageUrl} alt="book"/>
          <div class="card-deck mx-auto">
            <div class="card border-dark mb-3">
              <div class="card-body">
                <h5 class="card-title">
                  <a class="title-link" href={book.purchaseLink}>{book.title}</a>
                </h5>
                <p class="card-text">
                  {book.PublishDate}
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    })

    return (
      // just displays the books within a div
      <div className="BookList">
        <div class="row">
          {books}
        </div>
      </div>
    );
  }


}

export default BookList;
