import React, { useState } from "react";
import { GlobalContent } from "../../GlobalContent";
import { TitleHomeContent } from "../style";
import YouTube from "react-youtube";
import {YTContainer, YTProfile, YTName, YTPict, Visit, YTPictPart} from "./style";
import { BsFillCaretRightFill } from "react-icons/bs";

const API = 'AIzaSyDnbbJ7KEvlwMEgNpPoAqoqygztWJ7e2ao';
const channelID = 'UCK_2UEc-JfIKDtWEy1_IK9g';
var profileURL = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelID}&key=${API}`;
var videoURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&maxResults=1&order=date&part=snippet`;

const YouTubeContent = () => {
    const [pict, setPict] = useState();
    const [name, setName] = useState();
    const [video, setVideo] = useState();

    require('dotenv').config();
    
    fetch(profileURL)
        .then((response) => response.json())
        .then((responseJson) => {
        var ProfilePict = responseJson.items.map(obj => obj.snippet.thumbnails.medium.url);
        const PP = ProfilePict[0];
        var ProfileName = responseJson.items.map(obj => obj.snippet.title);
        const PN = ProfileName[0];
        setName(PN);
        setPict(PP);
        })
        .catch((error) => {
        var err = error.message;
        console.error(err);
        });

    fetch(videoURL)
        .then((response) => response.json())
        .then((responseJson) => {
        var LatestVideo = responseJson.items.map(obj => obj.id.videoId);
        const LV = LatestVideo[0];
        setVideo(LV);
        })
        .catch((error) => {
        console.error(error)
        });

    const YTContent = ({Pict, Name, Video}) => {
        return(
            <div>
                <YTPictPart>
                <YouTube 
                    videoId= {Video}
                    width="411" 
                    height="231" />
                </YTPictPart>
                <YTProfile>
                    <YTPict src={Pict} />
                    <YTName>{Name}</YTName>
                </YTProfile>
            </div>
        );
    };
    return(
        <GlobalContent>
            <TitleHomeContent>Youtube Video</TitleHomeContent>
            <YTContainer>
                <YTContent Video = {video} Pict = {pict} Name = {name} />
                <YTContainer>
                <Visit href = "https://www.youtube.com/channel/UCK_2UEc-JfIKDtWEy1_IK9g/videos">Visit YouTube Channel <BsFillCaretRightFill target="_blank"/></Visit>
                </YTContainer>
            </YTContainer>
        </GlobalContent>
    );
};

export default YouTubeContent;