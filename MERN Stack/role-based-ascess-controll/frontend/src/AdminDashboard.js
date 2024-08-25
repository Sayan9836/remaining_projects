import React, { useEffect } from 'react'
import EmployeeForm from './components/EmployeeForm'
import ManagerForm from './components/ManagerForm'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {

    const navigate = useNavigate();


    useEffect(() => {


        const VerifyUser = async () => {

            const token = JSON.parse(localStorage.getItem('token'));

            if (!token) {
                navigate('/');
            }

            try {

                let result = await fetch('http://localhost:5000/admin/dashboard', {

                    headers: {
                        'Authorization': token,
                    }

                });

                if (result.status === 403) {
                    navigate('/')
                }

            } catch (error) {


                navigate('/');

            }

        }

        VerifyUser();



    }, [])


    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            <EmployeeForm />
            <ManagerForm />
        </div>
    )
}

export default AdminDashboard
