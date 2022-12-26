import React,{createRef} from 'react';
import ReactDom from 'react-dom';
import {CSSTransition,TransitionGroup} from 'react-transition-group';

function Order({name,orderInfo,method}){
    const nodeRef=createRef(null);

    function renderList(value){
        const count=orderInfo[value];
        const fishname=name[value].fishName;
        const price=name[value].fishPrice;
        const stocks=name[value].stocks=='Fresh';

        if(stocks){
            return(
                <CSSTransition key={count} classNames='prefix' timeout={{enter:1000,exit:1000}}>
                <li className='previewList' key={count+1}>
                <span className='flexSupport'>
                  <TransitionGroup component='span' className='countManage'>
                  <CSSTransition classNames='counted' key={count+2} timeout={{enter:500,exit:500}}>
                   <span>
                   {count}
                   </span>
                   </CSSTransition>
                   </TransitionGroup>
                   <span className='fishNameFormat'>
                   lbs 
                   {fishname} 
                   </span>
                   <button className='btnFormat' onClick={()=>{method(value)}}>&#9587;</button>
                   <span className='countFormat'>{count*price}$</span>
                </span>
                </li>
                </CSSTransition>
            )
        }
        return(
            <CSSTransition key={count+3} classNames='prefix' timeout={{enter:1000,exit:1000}}>
            <li className='alert' key={count}>Sorry! It's not available!!</li>
            </CSSTransition>
        )
    }

    const orderIds=Object.keys(orderInfo);

    const total=orderIds.reduce((prev,current)=>{
        const order=orderInfo[current];
        const price=name[current].fishPrice;
        const stocks=name[current].stocks=='Fresh';

        if(stocks){
            return prev + (order*price)
        }
        return prev;
    },0)
    return(
        <>
            <h1 className="orderState">Order List</h1>

            
            <TransitionGroup component='ul' className='orderPreview'>
                {orderIds.map(renderList)}
            </TransitionGroup>

            <p className='total'>
               Total: <span className='totalAmount'>{total}$</span>
            </p>
        </>
    )
}
export default Order;