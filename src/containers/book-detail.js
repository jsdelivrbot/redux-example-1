import React , { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if(!this.props.book) {
      return <div> select book </div>
    }
    
    return (
      <div>
        <h3> Detail book : </h3>
        <div> title : {this.props.book.title}</div>
        <div> page : {this.props.book.page}</div>
      </div>  
    );
  }
}

function mapStateToProps(state){
  return {
    book : state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);