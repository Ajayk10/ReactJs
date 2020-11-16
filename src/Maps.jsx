import React, { Component } from 'react'


class Maps extends Component {

    constructor() {
        super();
        this.state = {
            car: ['bmw', 'benz', 'tata'],
            party: [
                { name: 'BJP' ,rivals: 'UPA'},
                { name: 'UDF' ,rivals: 'LDF' }
            ]
        }

    }
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td>Party</td>
                        <td>Rivals</td>
                    </tr>

                    {
                        this.state.party.map((i, k) => {
                            return (
                                <tr>
                                    <td>{i.name}</td>
                                    <td>{i.rivals}</td>
                                </tr>
                            )
                        })
                    }


                </table>
            </div>
        )
    }
}

export default Maps;