import React, {Component} from 'react';
import {connect} from "react-redux";
import {compose} from "../../utils";
import {withBookstoreService} from "../hoc";
import {booksLoaded} from "../../actions";
import BookListItem from "../book-list-item";

class BookList extends Component {

  componentDidMount() {
    const {bookstoreService, booksLoaded} = this.props;
    const data = bookstoreService.getBooks();

    booksLoaded(data);
  }

  render() {
    const {books} = this.props;

    return (
      <ul className='book-list'>
        {
          books.map((book) => {
            return <li key={book.id}><BookListItem book={book}/></li>
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = ({books}) => {
  return {books}
};

const mapDispatchToProps = {
  booksLoaded
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);