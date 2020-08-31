import React from 'react'

function Admin(props) {
    console.log(props.location.state.data)
    return (
        <div>
            <h1>Admin</h1>
        </div>
    )
}

export default Admin
