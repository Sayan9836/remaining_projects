
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserForm from './components/UserForm';

const Page = () => {

    const [currentUser, setCurrentUser] = useState('user');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(username);

        let result = await fetch(`http://localhost:5000/${currentUser}/login`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                roles: `${currentUser}`,
                password: password,
            })

        })

        result = await result.json();
        console.log(result);


        if (result.status === 'success') {

            localStorage.setItem('token', JSON.stringify(result.token));
            setTimeout(() => {
                navigate(`/${currentUser}/dashboard`)
            }, 1000);

        } else {

            toast.error('Invalid credentials', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            })

        }

    }

    return (
        <>
            <div>
                <ul>
                    <li onClick={() => setCurrentUser('user')}>user(Login)</li>
                    <li onClick={() => setCurrentUser('userR')}>user(register)</li>
                    <li onClick={() => setCurrentUser('admin')}>admin</li>
                    <li onClick={() => setCurrentUser('employee')}>employee</li>
                    <li onClick={() => setCurrentUser('manager')}>manager</li>
                </ul>
            </div>

            {


                currentUser !== 'userR' ?

                    (
                        <>

                            <p>{`welcome to ${currentUser} Login Page`}</p>


                            <form onSubmit={handleSubmit}>
                                <input type="text" name='username' placeholder='Enter your email' onChange={(e) => setUsername(e.target.value)} />
                                <input type="text" name="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
                                <button>Submit</button>
                            </form>
                        </>

                    ) : (
                        <UserForm />
                    )

            }

        </>


    )
}

export default Page
