import { UserContext } from "../context/user";
import { useContext, useState, useEffect } from "react";
// import { Link,  useNavigate } from "react-router-dom";
import { getAllUsers } from "../utils/api";

export default function UserCorner() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [users, setUsers ] = useState([])
  
  useEffect(() => {
    getAllUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  const handleSelect = (e) => {
    e.preventDefault();
    setCurrentUser(e.target.value)
  };

console.log(currentUser);

  if (currentUser.length === 0) {
    return (
      <div className="userCorner">
        <select className="userOptions" onChange={handleSelect}>
          <option
            key="user-selector"
            value="user-selector"
            defaultValue="Select user"
            disabled
            selected
          >
            Select user
          </option>
          {users.map((user) => {
            return (
              <option key={user.username} value={user.username}>
                {user.username}
              </option>
            );
          })}
      </select>
      </div>
    )
  }
  return (
    <div className="userCorner">
      <h2>{currentUser.username}</h2>
    </div>
  )
}
