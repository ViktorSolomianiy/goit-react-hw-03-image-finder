import React from 'react';
import './Loader.css';

import { Circles } from 'react-loader-spinner';

export function Loader() {
  return (
    <div className="loader">
      <Circles
        height="80"
        width="80"
        color="rgb(255, 90, 90)"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
