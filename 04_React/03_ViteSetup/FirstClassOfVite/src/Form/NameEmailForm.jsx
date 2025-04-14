import React from 'react'
import { useState } from 'react'

function NameEmailForm() {

    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleChangeName = (event) => {
        setFormData((prevData) => ({ ...prevData, name: event.target.value }));
    }

    const handleChangeEmail = (event) => {
        setFormData((prevData) => ({ ...prevData, email: event.target.value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // prevent the default form submission.
        console.log(`Name ${formData.name} Email ${formData.email}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <lable htmlFor='name'>Name:</lable>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(event) => handleChangeName(event)}
                />
            </div>

            <div>
                <lable htmlFor='email'>Email:</lable>
                <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(event) => handleChangeEmail(event)}
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}

export default NameEmailForm