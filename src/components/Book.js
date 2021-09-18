import React from 'react';
import { Link } from 'react-router-dom';

function Book(props) {
   
  return (
    <div className="book">
    <Link to={`/details/${props.id}`}><img src={props.img} /></Link>  
      <h1>{props.name}</h1>
      <h2>Müəllif: {props.author}</h2>
      <h3>Janr: {props.janr}</h3>
      <h3>Səhifə sayı: {props.pageCount}</h3>
      <h4>Qiymət: {props.price}AZN</h4>
    </div>
  );
}

export default Book;
