import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

function Home(props) {
  return (
    <div className="allBooks">
      {props.books.map((item) => {
        return (
          <Book
            id={item.id}
            key={item.id}
            name={item.name}
            author={item.author}
            price={item.price}
            pageCount={item.pageCount}
            janr={item.janr}
            img={item.img}
          />
        );
      })}
    </div>
  );
}
const myStore = (state) => state;
export default connect(myStore)(Home);
