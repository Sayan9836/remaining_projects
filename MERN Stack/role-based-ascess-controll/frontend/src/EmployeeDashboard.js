import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const EmployeeDashboard = () => {

    const navigate = useNavigate();

    console.log("hii");


    useEffect(() => {


        const VerifyUser = async () => {

            const token = JSON.parse(localStorage.getItem('token'));

            if (!token) {
                navigate('/');
            }

            try {

                let result = await fetch('http://localhost:5000/employee/dashboard', {

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
            <h1>EmployeeDashboard</h1>
        </div >
    )
}

export default EmployeeDashboard
