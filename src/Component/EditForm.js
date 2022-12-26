import React,{useRef} from 'react'
import ReactDOM from 'react-dom'

function EditForm({docs,index,inputUpdate,itemRemove}) {

  function changeData(event){
    const copy={...docs,[event.target.name]:event.target.value};

    inputUpdate(index,copy);
  }
  
  function removeIt(){
    itemRemove(index);
  }
  return (
    <div className="form">
      <input type="text" name='fishName' value={docs.fishName} placeholder='fishName' onChange={changeData}/>
      <input type="number" name='fishPrice' value={docs.fishPrice} placeholder='fishPrice' onChange={changeData}/>
      <select value={docs.stocks} name='stocks' onChange={changeData}>
        <option value="Fresh">Fresh</option>
        <option value="Unable">Unable</option>
      </select>
      <textarea value={docs.details} name='details' onChange={changeData}></textarea>
      <input type="text" name="image" className='imageValue' value={docs.image} onChange={changeData} />
      <button className="removeBtn" onClick={removeIt}>Remove Item </button>
    </div>
  )
}

export default EditForm;