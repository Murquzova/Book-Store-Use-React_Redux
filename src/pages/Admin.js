import React, { useState } from 'react';
import { connect } from 'react-redux';
import Modal from '../components/Modal';

function Admin(props) {
    console.log(props.books);

  const [newBook, setNewBook] = useState({
    id: '',
    name: '',
    author: '',
    janr: '',
    pageCount: '',
    img: '',
    price: '',
    details: '',
  });
  const deleteBook = (id) => {
    props.dispatch({
      type: 'DELETE',
      id: id,
    });
  };
  const modalOpen = () => {
    props.dispatch({
      type: 'OPEN',
      value: true,
    });
  };
  return (
    <table>
      <Modal newBook={newBook} setNewBook={setNewBook} />
      <thead>
        <tr>
          <th>No:</th>
          <th>Kitabın Adı</th>
          <th>Müəllif</th>
          <th>Janr</th>
          <th>Səhifə sayı</th>
          <th>Qiymət</th>
          <th>Kitab şəkili</th>
          <th>
            <button onClick={modalOpen}>Əlavə et</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.books.map((item, key) => {
          return (
            <tr key={key}>
              <td>{key + 1}</td>
              <td>{item.name}</td>
              <td>{item.author}</td>
              <td>{item.janr}</td>
              <td>{item.pageCount}</td>
              <td>{item.price}AZN</td>
              <td>
                <img style={{ width: '100px' }} src={item.img} />
              </td>
              <td>
                <button onClick={() => deleteBook(item.id)}>Sil</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

const myStore = (state) => state;
export default connect(myStore)(Admin);
