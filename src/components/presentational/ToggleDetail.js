import React, { Component } from 'react';
import '../../styles/Toggle.css';

class ToggleDetail extends Component {

  render() {
    // displays two buttons, one to sort the books in alphabetical order, and another 
    // to sort it based on date published, from older to newer books. calls on the
    // parent component's funtion to do this'
    return (
      <div class="toggle-box">
        <button type="button" class="btn alpha-button" data-toggle="button" autocomplete="off" onClick={(e) => this.props.toggleAlpha(e)}>
          Alphabetical (A-Z)
        </button>
        <button type="button" class="btn date-button" data-toggle="button" autocomplete="off" onClick={(e) => this.props.toggleDate(e)}>
          Date Published
        </button>
      </div>
    );
  }

}

export default ToggleDetail;
