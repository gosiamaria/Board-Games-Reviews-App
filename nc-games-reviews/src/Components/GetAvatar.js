
import { getUserByUsername } from "../utils/api";
import { useState, useEffect } from "react";

export default function GetAvatar({username}) {

    const [userAvatar, setUserAvatar] = useState('')

    useEffect(() => {
        getUserByUsername(username).then((user) => {
        setUserAvatar(user.avatar_url)
    })
    }, [username])

        return (
            <img src={userAvatar} alt={username} />
        )
}