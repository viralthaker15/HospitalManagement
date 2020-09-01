import React from 'react'

function LoggedIn(props) {
    const user = props.location.state.data.username
    return (
        <div>
            <h1>Medinov</h1>
            <h1>Welcome {user} !</h1>
        </div>
    )
}

export default LoggedIn
