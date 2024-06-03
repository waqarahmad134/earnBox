import React from 'react'
import { useRouteError } from 'react-router-dom';
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className=''>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText}</i> <br />
        <i>{error?.error?.message}</i> <br />
        <i>{error?.message}</i>
      </p>
    </div>
  );
}
