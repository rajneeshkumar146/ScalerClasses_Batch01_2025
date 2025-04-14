import React, { useState } from 'react'

function AddTask_BetterSolution() {
    const [taskArr, setTask] = useState([]);

    const addTask = (task) => {
        if (task === '' || task.trim().length === 0) {
            return;
        }

        let newTaskArr = [...taskArr, task];
        setTask(newTaskArr);
    }

    return (
        <div>
            <InputBox callBack={addTask}></InputBox>
            <List listItems={taskArr}></List>
        </div>
    )
}

function InputBox(props) {
    const [inputValue, setInputValue] = useState("");

    const handleUserInput = (event) => {
        setInputValue(event.target.value);
    }

    const performActionOnInputValue = () => {
        props.callBack(inputValue);
        setInputValue("");
    }

    return (
        <div className='inputBox'>
            <input type="text" value={inputValue} onChange={handleUserInput} placeholder="Enter your task"></input>
            <button onClick={performActionOnInputValue}>Add Task</button>
        </div>
    )

}

function List(props) {
    return (
        <div className='list'>
            <ul>
                {
                    props.listItems.map((listItem, index) => <li key={index}>{listItem}</li>)
                }
            </ul>

        </div>
    )
}

export default AddTask_BetterSolution