import React, { Component } from 'react';

class Action extends Component {
  render() {
    return (
      <div>
        <button 
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >What Should I Eat Today?
        </button>
      </div>
    );
  }
}

export default Action;
