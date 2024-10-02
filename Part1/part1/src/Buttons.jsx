import React from "react";

const Buttons = ({ClickGood, ClickNeutral, ClickBad}) => {
    return (
        <>
            <div>
                <h1>give feedback</h1>
                <button onClick={ClickGood}>Good</button>
                <button onClick={ClickNeutral}>Neutral</button>
                <button onClick={ClickBad}>Bad</button>
            </div>
        </>
    )
}

export default Buttons