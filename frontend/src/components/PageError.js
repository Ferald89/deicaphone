import React from 'react';

import './styles/PageError.css';

function PageError(props) {
  return (
  <div className="PageError">{props.error.message}</div> && <div className="PageError">{props.error.detail}</div>
  );
}

export default PageError;