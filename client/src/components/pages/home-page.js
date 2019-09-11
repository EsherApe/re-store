import React from 'react';
import ShoppingCartTable from "../shopping-cart-table";
import BookListContainer from "../book-list/book-list-container";

const HomePage = () => {
  return (
    <div>
      <BookListContainer/>
      <ShoppingCartTable/>
    </div>
  );
};

export default HomePage;
