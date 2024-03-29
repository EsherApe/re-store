import React, {Component} from 'react';
import {connect} from "react-redux";
import {compose} from "../../utils";
import {withBookstoreService} from "../hoc";
import {fetchBooks, bookAddedToCart} from "../../actions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import BookList from "./book-list";
import {bindActionCreators} from "redux";

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const {books, loading, error, onAddedToCart} = this.props;
    if (loading) return <Spinner/>;
    if (error) return <ErrorIndicator/>;

    return (
      <BookList books={books}
                onAddedToCart={onAddedToCart}/>
    );
  }
}

const mapStateToProps = ({bookList: {books, loading, error}}) => {
  return {books, loading, error}
};

// const mapDispatchToProps = (dispatch, {bookstoreService}) => {
//   return {
//     fetchBooks: fetchBooks(bookstoreService, dispatch),
//     onAddedToCart: (id) => dispatch(bookAddedToCart(id))
//   }
// };

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
  return bindActionCreators({
    fetchBooks: fetchBooks(bookstoreService),
    onAddedToCart: bookAddedToCart
  }, dispatch);
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);