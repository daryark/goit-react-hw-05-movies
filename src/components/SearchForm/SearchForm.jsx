import React from 'react';
import { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export function SearchForm({ submit }) {
  const [value, setValue] = useState('');
  // const [searchParams, setSearchParams] = useSearchParams();
  // const q = searchParams.get('q');
  // console.log('q', q);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;

    submit(value.trim().toLowerCase());
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search films"
        value={value}
      />
      <button type="submit">Search</button>
    </form>
  );
}

SearchForm.propTypes = {
  submit: PropTypes.func.isRequired,
};
