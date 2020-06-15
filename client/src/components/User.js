import React, { useState, useEffect } from 'react';

function User(props) {
    const [userData, setUserData] = useState([])
    const [loading, setloading] = useState(false)
    const baseUrl = "http://localhost:5000"
    useEffect(() => {
        const getData = () => {
            setloading(true)
            fetch(baseUrl+'/api/users')
            .then(res => res.json())
            .then(res => {
                setloading(false)
                setUserData(res)
            })
        }
        getData();
    }, [])
    console.log(userData)
    return (
        <div>
            <h2>User</h2>
            {
                loading ? 
                'Loading...' :
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.map(data => (
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.firstName}</td>
                                    <td>{data.lastName}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }
        </div>
    );
}

export default User;