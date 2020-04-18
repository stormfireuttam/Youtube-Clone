import React from 'react';
import VideoItem from './VideoItem';
import {Grid} from '@material-ui/core';

const VideoList = ({videos, onVideoSelect}) => {
    const listOfVideos = videos.map((video, id) => <VideoItem key={id} onVideoSelect={onVideoSelect} video={video}/>)
    if(listOfVideos)
    {   return (
        <Grid container spacing={6}>
            {listOfVideos}
        </Grid>)
    }
    else{
        return ;
    }
};

export default VideoList;