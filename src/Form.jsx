import { useState } from "react"
import React from 'react'
import Todo from './Todo'
import ReactDom from 'react-dom';
import SkipNextRounded from '@material-ui/icons/SkipNextRounded';

export default function Form() {
    let change = {}
    const [inputs, setName] = useState({
        firstname: "",
        email: "",

    })

 

    const Copytext = (event) => {
        const { name, value } = event.target
        /*console.log(name, value)*/



        setName((preValue) => {
            /*console.log(preValue)*/
            return {
                ...preValue,
                [name]: value,

            }
        })

    }
    /*console.log('inputs2f=' + inputs.firstname + '|inputs2e=' + inputs.email)*/
 
    const Check = () => {
        if (inputs.firstname === 'A' && inputs.email === 'a') {
            console.log('Ok')
            document.getElementById('button').style.backgroundColor = 'blueviolet'

            return false

        }
        else {
            console.log('Not ok')

            try {
                document.getElementById('button').style.backgroundColor = 'gray';

            } catch (error) {
                window.onload = () => {
                    document.getElementById('button').style.backgroundColor = 'gray';
                };
            }
            return true
        }
    }


    const goTodo = () => {
        console.log('Routed')
        ReactDom.render(
            <>
                <Todo
                    firstname={inputs.firstname} />
            </>,
            document.getElementById('root')
        );
    }
    return (
        <>
            <div>
                <h1>Hello  {inputs.firstname} {inputs.lastname}</h1>
                <h4>{ }</h4>
                <div className='container'>
                    <input className='edit' value={inputs.firstname} name='firstname' onChange={Copytext} className='form-control form-control-lg' placeholder='Enter Firstname' />
                    <br /><br />

                    <input className='edit' value={inputs.email} name='email' onChange={Copytext} className='form-control form-control-lg' placeholder='Email' />
                    <br /><br />

                </div>

                <button className='add' id='button' onClick={goTodo} disabled={Check()}><SkipNextRounded /></button>
            </div>
        </>
    )
}
