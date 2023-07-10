import React from 'react'
import ChildFunc from '../child'

function ParentFunc() {

    let name = "Shahriyar"
    let surname = "Mammadov"

    return (
        <div>
            <ChildFunc name={name} surname={surname} />
        </div>
    )
}

export default ParentFunc