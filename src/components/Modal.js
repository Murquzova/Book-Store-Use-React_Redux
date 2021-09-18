import React from 'react';
import { connect } from 'react-redux';
function Modal(props) {
  const changeControl = (e) => {
    props.setNewBook({ ...props.newBook, [e.target.name]: e.target.value });
  };
  const addNewBook = () => {
    props.dispatch({
      type: 'ADDNEWBOOK',
      book: props.newBook,
      value: false,
    });
  };
  return (
    <div className="modal" style={{ display: props.modal ? 'flex' : 'none' }}>
      <button
        onClick={() => {
          props.dispatch({ type: 'CLOSE', value: false });
        }}
      >
        X
      </button>
      <input onChange={changeControl} type="text" name="id" placeholder="No" />
      <input
        onChange={changeControl}
        type="text"
        name="name"
        placeholder="Kitabın Adı"
      />
      <input
        onChange={changeControl}
        type="text"
        name="author"
        placeholder="Müəllif"
      />
      <input
        onChange={changeControl}
        type="text"
        name="janr"
        placeholder="Janr"
      />
      <input
        onChange={changeControl}
        type="text"
        name="pageCount"
        placeholder="Səhifə sayı"
      />
      <input
        onChange={changeControl}
        type="text"
        name="price"
        placeholder="Qiymət"
      />
      <input
        onChange={changeControl}
        type="text"
        name="img"
        placeholder="Kitab şəkili"
      />
      <textarea  onChange={changeControl} type="text" name="details" placeholder="Details"></textarea>
      <br />
      <button onClick={addNewBook}>Əlavə et</button>
    </div>
  );
}

const myStore = (state) => state;
export default connect(myStore)(Modal);
