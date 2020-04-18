import React from 'react';
import {Paper, Typography} from '@material-ui/core';
const VideoDetails = ({video}) => {
    if(!video) {return<div>Loading ....</div>;}
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(videoSrc);
    return(
        <React.Fragment>
            <Paper elevation={1} style={{height: '40%'}}>
                {/*Display Video to us*/}
                <iframe frameBorder="0" height='100%' width="100%" title="Video Player" src={videoSrc}/>
            </Paper>
            <Paper elevation={6} style={{padding: '15px'}}>
                <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
    );
}

export default VideoDetails;