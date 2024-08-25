import React, { useState } from 'react'
import { toast } from 'react-toastify';

const ManagerForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {

        e.preventDefault();

        let result = await fetch(`http://localhost:5000/manager/register`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
                roles: 'manager',
            })

        })

        result = await result.json();

        console.log(result);

        toast.success('employee added successfully', {
            position: 'top-right',
            autoClose: 3000,
            closeOnClick: true,
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: true,
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='username' placeholder='Enter your email' onChange={(e) => setUsername(e.target.value)} />
                <input type="text" name="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ManagerForm
