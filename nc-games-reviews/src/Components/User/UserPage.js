import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserByUsername } from "../../utils/api";
import { Link } from "react-router-dom";
import arrowLeft from "../images/arrowLeft.png";

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
        return <p><img id="loading" src="https://www.teahub.io/photos/full/226-2267889_animated-circle-gif-transparent.gif" alt="loading"/></p>
    }

    if(err) return <p class="error">{err}</p>;

    return (
        <div className="userSection">
            <span className="back"><Link to="/" className="goBackLink">
            <img src={arrowLeft} alt="back arrow" /> Back to all reviews</Link></span>
            <div className="userProfile">
                <img src={user.avatar_url} alt={user.username} />
                <div className="user">
                <h5>Username: {user.username}</h5>
                <h5>Name: {user.name}</h5>
                </div>
                
            </div>
        </div>
    )
}