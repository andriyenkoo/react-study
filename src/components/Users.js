import React, {useEffect, useState} from 'react';

const Users = () => {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });
    },[])


    return (
        <div>

            {
                users.map(value => <li key={value.id}> {value.name} </li>)
            }

        </div>
    );
};

export default Users;