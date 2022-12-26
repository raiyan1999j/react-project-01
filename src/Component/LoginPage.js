import React,{useState,useRef} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'

function LoginPage() {
    const inputRef=useRef('');
    const [text,setText]=useState();

    function inputValue(e){
        setText(e.target.value);
    }

    let value='/app/'+{text};
  return (
    <div className="loginBox">
            <h1 className="loginHeader">
                WellCome To My Shop
            </h1>
            <h3 className="title">
                Enter Your Name To Save Data
            </h3>
            <div className="inputField">
            <input type="text" placeholder='yourName' ref={inputRef} onChange={inputValue} className='logInput'/>
            </div>
            <div className="logBtnArea">
            <Link className="logBtn" to={`app/${text}`}>
                Enter The Shop
            </Link>
            </div>
        </div>
  )
}

export default LoginPage