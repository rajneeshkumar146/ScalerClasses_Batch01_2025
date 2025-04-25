import React from 'react'
import { useSelector } from 'react-redux'

function TodoRedux() {

    // Getter
    const { value, todoList } = useSelector((store) => store.todoState);

    // Setter
       // actions
       // dispatch

    const handleChange = (event) => {

    }

    const handleAddTask = () => {

    }

    return (
        <>
            <h2>Todo Application</h2>

            <div style={{ display: "flex" }}>
                <div className="inputBox">
                    <input
                        type="text"
                        value={value}
                        onChange={handleChange}
                    />
                    <button onClick={handleAddTask}>Submit</button>
                </div>

                <div className='list'>
                    <ul>
                        {
                            todoList.map((task, idx) => {
                                return <li key={idx}>{task}</li>
                            })
                        }
                    </ul>
                </div>

            </div>

        </>
    )
}

export default TodoRedux