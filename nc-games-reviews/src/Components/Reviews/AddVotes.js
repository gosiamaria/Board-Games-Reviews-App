import { patchVotes } from "../../utils/api";
import { useState, useContext } from "react";
import upYellow from "../images/up-yellow.png";
import downYellow from "../images/down-yellow.png";
import { UserContext } from "../../context/UserContext";

export default function AddVotes({ votes, reviewId, reviewOwner }){
    const [addedVotes, setAddedVotes] = useState(0);
    const [isError, setIsError] = useState(false);
    const [msg, setMsg] = useState('');
    const { currentUser } = useContext(UserContext);

console.log(currentUser.username, '--- currentUser')
console.log(reviewOwner, '--- reviewOwner')

    const handleClickInc = () => {
        setAddedVotes((prevVotes) => prevVotes + 1);
        patchVotes(reviewId, 1).catch(() => {
        setIsError(true);
        setAddedVotes((prevVotes) => prevVotes - 1);
        });
    };

    const handleClickDec = () => {
        setAddedVotes((prevVotes) => prevVotes - 1);
        patchVotes(reviewId, -1).catch(() => {
        setIsError(true);
        setAddedVotes((prevVotes) => prevVotes - 1);
        });
    };
    
    return (
        <>
        {currentUser.username === reviewOwner ? <span>{votes}<br></br><br></br>v<br></br>o<br></br>t<br></br>e<br></br>s</span> : 
            <>
            <img onClick={handleClickInc} className="votes-button" src={upYellow} alt="vote up" />
            <p>{votes + addedVotes}</p>
            <img onClick={handleClickDec} className="votes-button" src={downYellow} alt="vote down" />
            </>     
        }
        {isError ? <p>Oops, something went wrong.</p> : null}
        <div id="msg">{msg}</div>
        </>
    );
}
