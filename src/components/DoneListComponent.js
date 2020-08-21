import React, { useState } from 'react'

function DoneListComponent({ isDone = false, name = "abc", desc = "xyz", agree = "yes" }) {
    const [isCompleted, setIsCompleted] = useState(isDone);
    return (
        <div>
            {
               isCompleted ? <><h1>Completed task List</h1>
               <input type="checkbox" checked = {isCompleted ? "checked" : ""} onChange={(e) => setIsCompleted(e.target.checked)} />
               {name} - {desc} - {agree} -{isCompleted? "true" : "false"} </>: <p>No Completed task</p>
            }
           
        </div>
    )
}

export default DoneListComponent
