import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserByUsername } from "../../utils/api";

export default function UserPage(props) {
    const { username } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [err, setErr] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setErr(null);
        getUserByUsername(username).then((user)=> {
            setUser(user);
            setIsLoading(false);
            setErr(null);
        }).catch((err) => {
            setIsLoading(false);
            if(err.response.status === 404) {
                setErr("User does not exist");
            } else {
                setErr("Something has gone wrong!");
            }
        })
    }, [username])

    if (isLoading) {
        return <p><img id="loading" src="https://www.providentinsurance.co.uk/Static/images/loader.gif" alt="loading"/></p>
    }

    if(err) return <p>{err}</p>;

    return (
        <div className="userSection">
            <div className="info">
                <h4>Username: {user.username}</h4>
                <h4>Name: {user.name}</h4>
            </div>
            <div className="avatar">
                <img src={user.avatar_url} alt={user.username} />
            </div>
        </div>
    )
}