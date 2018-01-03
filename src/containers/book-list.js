import React, {Component} from 'react';
import { connect } from 'react-redux';

import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title}
          onClick={()=> this.props.selectBook(book)} 
          className="list-group-item">
          {book.title}
        </li>
      )
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// react와 redux를 연결해준다. 
// 반환되는 books를 BookList 컴포너트에서 this.props.books로 사용됨.
function mapStateToProps(state) {
  return {
    books : state.books
  }
}

// 실제 실행할 액션생성자 함수를 this.props로 사용할수 있도록하고 
function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook : selectBook}, dispatch); //bindActionCreator가 리듀서로 보내지도록 역할을 함. 
}
// connect가 컴포넌트를 컨테이너로 만들어주는 함수 이다. 
export default connect(mapStateToProps, mapDispatchToProps)(BookList);