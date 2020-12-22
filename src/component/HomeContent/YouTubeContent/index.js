import React from "react";
import {GlobalContent} from "../../GlobalContent";
import {TitleHomeContent} from "../style"

const YouTubeContent = () => {
    return(
        <GlobalContent>
            <TitleHomeContent>Youtube Video</TitleHomeContent>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4tB945cWbyo?start=1" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>
        </GlobalContent>
    );
};

export default YouTubeContent;