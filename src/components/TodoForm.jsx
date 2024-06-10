import React, { useState } from 'react';


const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('')

    const handleSubmit =(event) =>{
        event.preventDefault()
        addTodo(title)
        setTitle('')
    }

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    console.log(title)
    return (
    <div style={styles.container}>
        <form  
        onSubmit={(event) => {
            handleSubmit(event)
        }}
        >
        <input
            type="text"
            placeholder="Add your Todo"
            style={styles.formInput}
            onChange={(event) =>{
                handleChangeTitle(event)
            }}
            value={title}
        />
            <button style={styles.button}>Add Todo</button>
        </form>
    </div>
    )
}
const styles = {
    container:{
        marginBottom: '32px',
    },
    formInput:{
        height: '50px',
        width: '40%',
        fontSize: '16px',
        padding: '0 16px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        boxShadow: '0 2px 4x rgba(0,0,0,0.1)',
        outline: 'none',
        transition: 'borderColor 0.3s',
    },
    button:{
        height: '50px',
        fontSize: '16px',
        padding: '0 20px',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'backgroundColor 0.3s, boxShadow 0.3s'
    }
}

export default TodoForm