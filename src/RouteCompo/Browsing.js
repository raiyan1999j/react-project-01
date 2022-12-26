import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routing from './Routing';

function Browsing() {
  return (
    <>
        <BrowserRouter>
            <Routing/>
        </BrowserRouter>
    </>
  )
}

export default Browsing