import React,{useState,useEffect,useRef} from 'react';
import ReactDom from 'react-dom';
import Inventory from './Inventory';
import Order from './Order';
import FishList from './FishList';
import DefaultContainer from './DefaultContainer';
import {useParams} from 'react-router-dom';
import './App.css';

function App(){
  const fishes={
    fish:{},
    order:{}
  }
  const [state,setState]=useState(fishes);
  const {storePicker}=useParams();

 
  const defaultValue=()=>{
    setState({...state,fish:FishList});
  }

  const customValue=(value)=>{
    const fish ={...state.fish};
    fish[`fish${Date.now()}`]=value;

    setState({...state,fish:fish});
  }
  
  const orderValue=(value)=>{
    const fish={...state.order};
    fish[value]= fish[value] + 1 || 1;

    setState({...state,order:fish});
    console.log(fish);
  }

  const updateValue=(index,value)=>{
    const fish={...state.fish}
    fish[index] =value;

    setState({...state,fish:fish})
  }

  const removeItem=(key)=>{
    const fishes={...state.fish};
    delete fishes[key];

    setState({...state,fish:fishes})
  }
  const orderRemove=(key)=>{
    const orders={...state.order};
    delete orders[key];

    setState({...state,order:orders});
  }
  return(
    <>
    <div className="flexBox">

    <div className='mainComponent'>
      <h1 className="appArea">Online Market</h1>
      <div className="defaultList">
        {Object.keys(state.fish).map((value)=>{
          return(
            <DefaultContainer key={value} index={value} data={state.fish[value]} orderNum={(e)=>{orderValue(e)}}/>
          )
        })}
      </div>
    </div>

    <div className='orderComponent'>
      <Order 
        name={state.fish}
        orderInfo={state.order}
        method={(key)=>{orderRemove(key)}}
      />
    </div>

    <div className='inventoryComponent'>
      <Inventory 
        defaultData={()=>{defaultValue()}}
        update={(value)=>{customValue(value)}}
        editState={state.fish}
        updateInput={(first,second)=>{updateValue(first,second)}}
        removeMethod={(value)=>{removeItem(value)}}
      />
    </div>

    </div>
    </>
  )
}
export default App;