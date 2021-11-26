import { patchVotes } from "../../utils/api";
import { useState } from "react";

export default function AddVotes({ votes, reviewId }){
    const [addedVotes, setAddedVotes] = useState(0);
    const [isError, setIsError] = useState(false);

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
        <button
            onClick={handleClickInc}
            className="votes-button"
        >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Sort_up_font_awesome.svg/1024px-Sort_up_font_awesome.svg.png" alt="buttonUp" />
        </button>
        <p>{votes + addedVotes}</p>
        <button
            onClick={handleClickDec}
            className="votes-button"
        ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Sort_down_font_awesome.svg/1024px-Sort_down_font_awesome.svg.png" alt="buttonDown" /></button>
        {isError ? <p>Oops, something went wrong.</p> : null}
        </>
    );
}
