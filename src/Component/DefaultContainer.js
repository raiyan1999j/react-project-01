import React from 'react'
import ReactDOM from 'react-dom';

function DefaultContainer({data,index,orderNum}) {
    function settings(){
      return  orderNum(index)
    }
  return (
    <>
        <div className="defaultBox">
            <ul className="defaultList">
                <li className="defaultImage">
                    <img src={data.image} alt="fishImage" />
                </li>
                <li className="defaultText">
                <h3 className="defaultHeader">
                    {data.fishName}
                </h3>
                <p className="defaultInfo">
                    {data.details}
                </p>
                </li>
            </ul>
            <ul className="defaultFooter">
                <li className="defaultPrice">
                    <strong className="priceText">
                        Price : {data.fishPrice}
                    </strong>
                </li>
                <li className="addToOrder">
                {data.stocks=='Fresh' && 
                    <button className="defaultAdd" onClick={settings}>
                        Add Button +
                    </button>
                }
                </li>
            </ul>
            {data.stocks=='Unable' && 
            <h1 className="soldOption">
                Sold Out
            </h1>
            }
        </div>
    </>
  )
}

export default DefaultContainer