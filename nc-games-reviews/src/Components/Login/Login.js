import { UserContext } from '../../context/UserContext';
import { useContext, useState, useEffect } from "react";
import { getAllUsers } from '../../utils/api';

export default function Login() {
    const { setCurrentUser } = useContext(UserContext);
    const [users, setUsers ] = useState([])
    const [username, setUsername] = useState({});

    useEffect(() => {
        getAllUsers().then((users) => {
        setUsers(users);
        });
    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const loggedInUser = users.find((user)=> user.username === username)
        setCurrentUser(loggedInUser)
    };
    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <label>
                <select className="userOptions" onChange={(e) => {
                    setUsername(e.target.value)
                }}>
                    <option
                    key="user-selector"
                    value="user-selector"
                    defaultValue="Select user"
                    disabled
                    selected
                    >
                    select user
                    </option>
                    <option
                    key="jessjelly"
                    value="jessjelly"
                    >
                    jessjelly
                    </option>
                </select>
                </label>
                <button>login</button>
            </form>
        </div>
    )
}