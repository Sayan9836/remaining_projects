import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {

    const navigate = useNavigate();


    useEffect(() => {


        const VerifyUser = async () => {

            const token = JSON.parse(localStorage.getItem('token'));

            if (!token) {
                navigate('/');
            }

            try {

                let result = await fetch('http://localhost:5000/user/dashboard', {

                    headers: {
                        'Authorization': token,
                    }

                });

                if (result.status === 403) {
                    navigate('/');
                }

            } catch (error) {


                navigate('/');

            }

        }

        VerifyUser();



    }, [])

    return (
        <div>
            <h1>UserDashboard</h1>
        </div>
    )
}

export default UserDashboard
