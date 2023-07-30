import React, { useState } from 'react'
import ChildComp from './ChildComp'

function ParentComp() {
    const [number, setnumber] = useState(1234)
    /* to take data from child to parent , we use function which we define in parent component and pass through props in child component and call in child component with argument which we want in parent component and then use that from function parameter  */
    const dataFun = (a) => {
        setnumber(a)
    }
    return (
        <div>
            <ChildComp data={dataFun} />
            <h1>{number}</h1>
        </div>
    )
}

export default ParentComp
