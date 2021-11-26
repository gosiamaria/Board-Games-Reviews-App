import { patchVotesComments } from '../../utils/api';
import { useState } from "react";

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
        <img onClick={handleClickInc} className="votes-button" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Sort_up_font_awesome.svg/1024px-Sort_up_font_awesome.svg.png" alt="buttonUp" />
        <p>{votes + addedVotes}</p>
        <img onClick={handleClickDec} className="votes-button" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Sort_down_font_awesome.svg/1024px-Sort_down_font_awesome.svg.png" alt="buttonDown" />
        {isError ? <p>Oops, something went wrong.</p> : null}
        </>
    )
}