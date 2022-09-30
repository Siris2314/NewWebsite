import React from 'react';
import ReactPlayer from "react-player";

const Player = ({url}) => {
    return(
        <div className="player">
            <ReactPlayer url={url} />
        </div>
    )
}

export default Player