import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteAll } from '../redux/slices/contactsSlice';
function Form() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addContact({ id: nanoid(), name, number }));
        setName("");
        setNumber("")
    };
    const handleAll = () => {
        dispatch(deleteAll())
    }
    return (
        <div>
            <div>
                <button onClick={() => handleAll()}>Delete All</button>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder='Number' value={number} onChange={(e) => setNumber(e.target.value)} />
                <button>Add</button>
            </form>
        </div>
    )
}
export default Form
