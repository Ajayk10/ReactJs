import React from 'react'
import Delete from '@material-ui/icons/Delete';

export default function Addtolist(props) {



    return (
        <div>
            <h5 id='itemh5'>{props.id + 1} ) {props.item}

                <button className='delete' onClick={() => {
                    props.onSelect(props.delid)
                }}><Delete /></button></h5>

        </div>
    )
}
