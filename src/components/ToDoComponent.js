import React, { useEffect, useState, useRef } from 'react';
import ToDoListComponent from './ToDoListComponent'
const ToDoComponent = () => {
    const inputRef = useRef();
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [agree, setAgree] = useState("");
    const [submit, setSubmit] = useState("Fill All Feild");

    useEffect(
        (e) => {
            if (name && desc && agree) {
                console.log("form submitted !!");
                // inputRef.current.submit();
                setSubmit("Form Submitted succesfully !!")
            } else {
                setSubmit("Fill All Feild !!")
            }
        }, [name, desc, agree]
    )
    return (
        <>
            <form ref={inputRef} onSubmit={(event) => event.preventDefault}>
                <h1>Form status : {submit} </h1>
                <label>Name : </label>

                <br />

                <input type="text" onChange={(e) => setName(e.target.value)} />

                <br />

                <label >Description : </label>

                <br />

                <textarea rows="3" cols="25" onChange={(e) => setDesc(e.target.value)} />

                <br />

                <label >Agree </label>

                <br />

                <select name="agree" onChange={(e) => setAgree(e.target.value)} >
                    <option value="0">Select one</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </form>
            {
                name && desc && agree ?
                    <ToDoListComponent name={name} desc={desc} agree={agree} />
                    : "please fill first"
            }
        </>
    );
}

export default ToDoComponent;