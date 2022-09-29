import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteItem, getData } from '../redux/slices/contactsSlice'

function List() {
    const data = useSelector(getData.selectAll);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteItem(id))
    }
    return (
        <div>
            {data.map((item) => {
                return (
                    <div style={{ width: "500px", display: "flex", justifyContent: "space-between" }} key={item.id}>
                        <span>{item.name}</span>
                        <span>{item.number}</span>
                        <span>
                            <Link to={`/home/${item.id}`}>Edit</Link>
                        </span>
                        <button onClick={() => handleDelete(item.id)}>X</button>
                    </div>
                )
            })
            }
        </div>
    )
}
export default List