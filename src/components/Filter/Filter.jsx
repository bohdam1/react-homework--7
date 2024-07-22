import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/Filter/slise';
import css from "./filter.module.css"

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterContacts = (event) => {
    const filterValue = event.target.value;
    dispatch(filterContact(filterValue)); 
  };

  return (
    <input type="text" onChange={handleFilterContacts} className={css.input} />
  );
};

export default Filter;
