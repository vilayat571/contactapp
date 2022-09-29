import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateItem } from '../redux/slices/contactsSlice';
function Edit({ data }) {
    const location = useNavigate();
    const [name, setName] = useState(data.name);
    const [number, setNumber] = useState(data.number);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateItem(
            {
                id: data.id,
                changes: {
                    name,
                    number
                }
            }
        ));
        location('/')
    };
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder='Number' value={number} onChange={(e) => setNumber(e.target.value)} />
                <button>Update</button>
            </form>
        </div>
    )
}
export default Edit