import React, { useState, useEffect } from 'react';

export const Main = () => {
    const [userData, setUserData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User ID</th>
                            <th>Title</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((todo) => (
                          if  (todo.completed == "yes") {
                            return(
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.userId}</td>
                                    <td>{todo.title}</td>
                                    <td>{todo.completed }</td>
                                </tr>
                            ) }
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};
