import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserByUsername } from "../utils/api";

export default function UserPage(props) {
    const { username } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});

    useEffect(() => {
        setIsLoading(true);
        getUserByUsername(username).then((user)=> {
            setUser(user);
            setIsLoading(false);
        })
    }, [username])

    if (isLoading) {
        return <p>...loading</p>;
    }

    return (
        <div className="userSection">
            <div className="info">
                <h2>Username: {user.username}</h2>
                <p>Name: {user.name}</p>
            </div>
            <div className="avatar">
                <img src={user.avatar_url} alt={user.username} />
            </div>
        </div>
    )
}