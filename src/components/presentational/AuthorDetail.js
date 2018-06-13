import React, { Component } from 'react';
import '../../styles/Author.css';


class AuthorDetail extends Component {

  render() {
    // goes through the author information and displays it, but makes sure there
    // is author information to display. if there isn't any, then it doesn't display
    // anything
    const authorDetails = this.props.author ?
      <div class="card">
        <div class="card-author-title">
          <span> published works by: </span>
          <h1 class="author-name">
              {this.props.author.name}
          </h1>
          <div class="description" textAlign='center'>
          <h3>
            DoB: {this.props.author.birthday}
          </h3>
          <h3>
            {this.props.author.birthPlace}
          </h3>
          </div>
        </div>
      </div>
        :
      <div></div>

    return (
      <div>
        {authorDetails}
      </div>
    );
  }

}

export default AuthorDetail;
