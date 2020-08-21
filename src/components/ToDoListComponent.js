import React, { useState } from 'react'
import DoneListComponent from './DoneListComponent'

function ToDoListComponent({ name = "abc", desc = "xyz", agree = "yes" }) {
    const [isDone, setIsDone] = useState(false);
    return (
        <div>
            <h1>task List</h1>
            <input type="checkbox" onChange={(e) => setIsDone(e.target.checked)} />
            {name} - {desc} - {agree}
            {
                isDone ? <DoneListComponent isDone={isDone} name={name} desc={desc} agree={agree} /> :
                    <p>so far none is Done </p>
            }

        </div>

    )
}

export default ToDoListComponent
