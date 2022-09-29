import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getData } from '../redux/slices/contactsSlice';
import Edit from './Edit';

function Single() {
    const { id } = useParams();
    const data = useSelector((state) => getData.selectById(state, id));
    return (
        <div>
            <h1>Edit</h1>
            {
                data && (<div>
                    <span>{data.name}</span>
                    <span>{data.number}</span>
                </div>
                )
            }

            <Edit data={data} />
        </div>
    )
}

export default Single
