import { patchVotesComments } from '../../utils/api';
import { useState } from "react";
import upYellow from "../images/up-yellow.png";
import downYellow from "../images/down-yellow.png";

export default function AddVotesComments({ votes, comment_id}){
    const [addedVotes, setAddedVotes] = useState(0);
    const [isError, setIsError] = useState(false);

    const handleClickInc = () => {
        setAddedVotes((prevVotes) => prevVotes + 1);
        patchVotesComments(comment_id, 1).catch(() => {
        setIsError(true);
        setAddedVotes((prevVotes) => prevVotes - 1);
        });
    };

    const handleClickDec = () => {
        setAddedVotes((prevVotes) => prevVotes - 1);
        patchVotesComments(comment_id, -1).catch(() => {
        setIsError(true);
        setAddedVotes((prevVotes) => prevVotes - 1);
        });
    };

    return (
        <>
        <img onClick={handleClickInc} className="votes-button" src={upYellow} alt="buttonUp" />
        <p>{votes + addedVotes}</p>
        <img onClick={handleClickDec} className="votes-button" src={downYellow} alt="buttonDown" />
        {isError ? <p>Oops, something went wrong.</p> : null}
        </>
    )
}