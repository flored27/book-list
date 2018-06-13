import React, { Component } from 'react';
import AuthorDetail from '../presentational/AuthorDetail';

class Author extends Component {
  constructor(props){
    super(props);
    this.state={
      author: {
        name: '',
        birthday: '',
        birthPlace: ''
      }
    }
  }

  // calls on componentDidMount in order to load the author information, re-render,
  // and push the information to the AuthorDetail.js child, which displays the information
  componentDidMount(){
    fetch(`https://s3.amazonaws.com/api-fun/books.json`)
    .then(data => data.json())
    .then(data=> {
      this.setState({
        author: {
          name: data.data.author,
          birthday: data.data.birthday,
          birthPlace: data.data.birthPlace
        }
      })
    })
  }

  render() {
    return (
      <div>
        <AuthorDetail author={this.state.author} />
      </div>
    );
  }
}

export default Author;
