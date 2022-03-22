import React, { useState } from 'react';
import EditNote from './EditNote';
import { v4 as uuidv4 } from 'uuid';
import Products  from './Products';

const Note = () =>{
    const [inputTitle, setInputTitle] = useState();
    const [inputDescription, setInputDescription] = useState();
    const [card, setCard] = useState([]);
    const [currentItemToUpdate, setCurrentItemToUpdate] = useState({});

    const addValue = () =>{
        // if(inputTitle !== '' && inputDescription !== '' ){
        //     const newCard = { id: uuidv4(), title: inputTitle, description: inputDescription};
        //     setCard([...card, newCard])
        //     setInputTitle('')
        //     setInputDescription('')
        // }  
        if (![inputTitle, inputDescription].includes('')) {
            setCard([...card, { id: uuidv4(), title: inputTitle, description: inputDescription }])
            setInputTitle('')
            setInputDescription('')
        }
    }
    
    const onEdit = (id) =>{ 
        setCurrentItemToUpdate(card.find(item => item.id === id ))
    }
        
    const onSave = (inputTitle, inputDescription) => {
        setCard([...card.map(({ title, description, id}) => {
            if (id === currentItemToUpdate.id) {
                return {id, title: inputTitle, description: inputDescription}
            }
            return {id, title, description}
        })])
        setCurrentItemToUpdate({})
    }
    const onDelete = (itemId) =>{
        setCard([...card.filter(({id}) => {
            return itemId !== id;
        })])
    }

    const showNote = (item) => {
        return currentItemToUpdate?.id === item.id &&
            (<EditNote data={item} onSaveAction={onSave}/>)
    }
    
    return (
        <>
            <div className='container'>
                <div className='row'>
                <div className='col'>
                <div className="card" style= {{}}>
                    {card?.map( ({id, title, description}) => (
                        <div className="card-body">
                            <h5 className="card-title" id={id} key={title}>{title} - {description}</h5>
                            <button className='btn-primary' onClick={() => onEdit( id) } >Edit</button>
                            <button className='btn-danger' onClick={() => onDelete(id)}>Delete</button>
                            {
                                showNote({id, title, description})
                            }
                        </div>
                    ))}
                    </div>
                </div>
                <div className='col'>
                    <label>Title: </label> 
                    <input type="text"  id='title' onChange={(e) => setInputTitle(e.target.value)} value={inputTitle}/>
                    <label>Description :</label>
                    <input type="text"  id='description' onChange={(e) => setInputDescription(e.target.value)} value={inputDescription}/>   
                    <button className='btn-success' onClick={addValue}>Add</button>
                </div>
                </div>
                {/* <GitHubUsers /> */}
            </div>
        </>
    );
};
export default Note;