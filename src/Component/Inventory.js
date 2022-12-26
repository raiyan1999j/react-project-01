import React from 'react';
import ReactDom from 'react-dom';
import Addform from './Addform';
import EditForm from './EditForm';

function Inventory({defaultData,update,editState,updateInput,removeMethod}){
    return(
        <>
        <h1 className="inventoryHeader">Inventory</h1>
        
        {Object.keys(editState).map((value)=>{
            return(
                <EditForm key={value} index={value} docs={editState[value]} inputUpdate={updateInput}
                    itemRemove={removeMethod}
                />
            )
        })}
        <Addform defaultInfo={defaultData} update={update} className='addForm'/>
        </>
    )
}
export default Inventory;