import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
function Details(props) {
  let { id } = useParams();
  let book = props.books.find((a) => Number(a.id) === Number(id));

  return (
    <div className="details">
      <img  src={book.img} />
      <h1>{book.name}</h1>
      <h2>Müəllif: {book.author}</h2>
      <h3>Janr: {book.janr}</h3>
      <h3>Səhifə sayı: {book.pageCount}</h3>
      <h4>Qiymət: {book.price}AZN</h4>
      <p>Details:</p>
      <p>{book.details}</p>
    </div>
  );
}
const myStore = (state) => state;
export default connect(myStore)(Details);
