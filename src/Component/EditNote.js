import React, { useState, useEffect } from 'react';

const EditNote = (props) => {
    const { data, onSaveAction } = props || {}
    const { title, description } = data || {}
    const [inputTitle, setInputTitle] = useState('')
    const [inputDescription, setInputDescription] = useState('')

    useEffect(() => {
        setInputTitle(title)
        setInputDescription(description)
    }, [title, description])

    return (
        <div className='col'>
            <label>Title: </label>
            <input type="text" id='title' onChange={(e) => setInputTitle(e.target.value)} value={inputTitle} />
            <label>Description :</label>
            <input type="text" id='description' onChange={(e) => setInputDescription(e.target.value)} value={inputDescription} />
            <button className='btn-success' onClick={() => onSaveAction(inputTitle, inputDescription)}>Save</button>
        </div>
    )
}

export default EditNote