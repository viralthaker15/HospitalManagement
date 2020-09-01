import React from 'react'

function Pharmacist(props) {
    const user = props.location.state.data.username
    return (
        <div>
            <h1>Pharmacist</h1>
            <h1>Welcome {user} !</h1>
        </div>
    )
}

export default Pharmacist
