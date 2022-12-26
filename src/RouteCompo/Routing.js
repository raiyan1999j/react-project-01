import React from 'react'
import ReactDOM from 'react-dom';
import {Route,Routes} from 'react-router-dom';
import App from '../Component/App';
import LoginPage from '../Component/LoginPage';

function Routing() {
  return (
    <>
        <Routes>
            <Route exact={true} path='/' element={<LoginPage/>}/>
            <Route path='/app/:storePicker' element={<App/>}/>
        </Routes>
    </>
  )
}

export default Routing