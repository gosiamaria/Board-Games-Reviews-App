import { UserContext } from '../../context/UserContext';
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function UserCorner() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  return (
    <div className="userCorner">
      <Link to={`/users/${currentUser.username}`} className="userLink">
    <p> {currentUser.username}</p>  </Link>
    <Link to={`/users/${currentUser.username}`}><img src={currentUser.avatar_url} alt={currentUser.username} />
    </Link>
    <button onClick={() => setCurrentUser({})}>Logout</button>
    </div>
  )
}
