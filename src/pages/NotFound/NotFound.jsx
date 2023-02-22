import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <p>404</p>
      <p>Not Found</p>
      <Link to="/">Go home</Link>
    </>
  );
}
