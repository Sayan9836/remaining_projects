import React, { useState } from 'react'
import { toast } from 'react-toastify';

const EmployeeForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            let result = await fetch(`http://localhost:5000/employee/register`, {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    roles: 'employee',
                })

            })

            result = await result.json();

            toast.success('employee added successfully', {
                position: 'top-right',
                autoClose: 3000,
                closeOnClick: true,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
            })

        } catch (error) {

            console.log("error => ", error);
        }


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

export default EmployeeForm
