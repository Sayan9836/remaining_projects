import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ManagerDashboard = () => {

    const navigate = useNavigate();


    useEffect(() => {

        console.log("hii");

        const VerifyUser = async () => {

            const token = JSON.parse(localStorage.getItem('token'));

            if (!token) {
                navigate('/');
            }

            try {

                let result = await fetch('http://localhost:5000/manager/dashboard', {

                    headers: {
                        'Authorization': token,
                    }

                });

                if (result.status === 403) {
                    navigate('/');
                }

            } catch (error) {


                navigate(-1);

            }

        }

        VerifyUser();

    }, [])

    return (
        <div>
            <h1>ManagerDashboard</h1>
        </div>
    )
}

export default ManagerDashboard
