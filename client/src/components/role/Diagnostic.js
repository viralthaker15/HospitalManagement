import React from 'react'

function Diagnostic(props){
    const user = props.location.state.data.username
    return (
        <div>
            <h1>Diagnostic</h1>
            <h1>Welcome {user} !</h1>
        </div>
    )
}

export default Diagnostic
