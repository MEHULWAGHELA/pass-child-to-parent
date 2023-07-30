import React from 'react'

function ChildComp(props) {
    return (
        <div>
            <h1>
                {props.data(2000)}
            </h1>
        </div>
    )
}

export default ChildComp
