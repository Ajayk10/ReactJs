import React from 'react'
import './index.css'
import Detail from './Detail'

var count=0;
function Display() {
alert(count++)

}

function Card(props)
{

    return(

<>
<div className="cardo">
  <h4><b>{props.title}</b></h4>
  <img className='Imgclass' src={props.imgsrc} alt="Avatar"/>
  <div className="containero">
    <h5><b>{props.price}</b></h5> <h5><b><Detail  /></b></h5> 
    <button onClick = {Display }  type='button'  className='btn btn-info btn-block'>Buy</button>
    <button  target='_blank' className='btn btn-dark btn-block'>Info</button>
  </div>
</div>
  </>

);
}

export default Card;
