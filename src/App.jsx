import React from 'react'
import Card from './Card'
import Mobiles from './List'


const App = () => (
    <>
        <h1>Welcome to AK Mobiles</h1>
        {Mobiles.map((mvalue) => {
            return (
                <Card
                    key={mvalue.key}
                    price={mvalue.price}
                    imgsrc={mvalue.imgsrc}
                    title={mvalue.title}
                />
            );
        })}
    </>
)

export default App;