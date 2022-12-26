import React,{useRef} from 'react';
import ReactDOM from 'react-dom';

function Addform({defaultInfo,update}) {
    const fishName=useRef();
    const fishPrice=useRef();
    const stocks=useRef();
    const details=useRef();
    const image=useRef();

    function activate(){
        return defaultInfo();
    }
    function formHandle(event){
        event.preventDefault();
    }
    function addItems(){
        const fish={
            fishName:fishName.current.value,
            fishPrice:fishPrice.current.value,
            stocks:stocks.current.value,
            details:details.current.value,
            image:image.current.value
        }
        update(fish);
    }
  return (
    <>
        <form className="form" onSubmit={formHandle}>
            <input type="text" placeholder='fishName' ref={fishName} />
            <input type="number" placeholder='fishPrice' ref={fishPrice}/>
            <select ref={stocks}>
                <option value="Fresh">Fresh</option>
                <option value="Unable">Unable</option>
            </select>
            <textarea ref={details}></textarea>
            <input type="text" className='imageValue' ref={image}/>
            <button onClick={addItems}>Add Item +</button>
        </form>
        <button className='loadBtn' onClick={activate}>Load Data</button>
    </>
  )
}

export default Addform