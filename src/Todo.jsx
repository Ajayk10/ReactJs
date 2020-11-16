import React, { useState } from 'react'
import AddBoxRounded from '@material-ui/icons/AddBoxRounded';
import ArrowBackIosRounded from '@material-ui/icons/ArrowBackIosRounded'
import Addtolist from './Addtolist'
import Form from './Form';
import ReactDom from 'react-dom';

export default function Todo(props) {
    const [items, setItems] = useState()
    const [list, setList] = useState([])


    const CopyText = (event) => {
        console.log(event.target.value)
        setItems(event.target.value)

    }
    const addList = () => {
        setList((oldList) => {
            return [...oldList, items]
        })
        setItems('')
    }


    const deleteItem = (itemid) => {
        console.log('deleted', itemid)

        setList((oldList) => {
            return oldList.filter((currElement, dindex) => {
                console.log('deleted', itemid, '=>', dindex, '=>', currElement)
                return dindex !== itemid;
            })
        })
    }



    const goBack = () => {
        ReactDom.render(
            <>
                <Form />
            </>,
            document.getElementById('root')
        );
    }


    return (
        <div>
            <h1>Welcome {props.firstname} to To-Do App</h1>
            <div className='container-sm' >
                <div className="card" style={{ marginTop: '100px', boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.4)' }}>
                    <div className="card-body">
                        <h5 className="card-title">Add your To-Do list</h5>
                        <h6 className="card-subtitle mb-2 text-muted"></h6>
                        <input type='text' id='input' className='edit' value={items} name='item' placeholder='Enter the Item' onChange={CopyText}></input>
                        <button className='add' onClick={addList}><AddBoxRounded />
                        </button><br /><br />
                        <p className="card-text">Whatever you write will be saved</p>
                        {list.map((litem, index) => {
                            let editid = index;
                            let deleteid = index;
                            return <Addtolist
                                key={index}
                                id={index}
                                item={litem}
                                delid={deleteid}
                                onSelect={deleteItem}

                            />
                        })}
                    </div>
                </div><br /><br />
                <button className='back' onClick={goBack}><ArrowBackIosRounded /></button>
            </div>

        </div>
    )
}
