import './VideoItem.css'
import React from 'react'


const VideoItem = ({videoItem, selectedVideo}) => {
    return (
        <div onClick={()=> selectedVideo(videoItem)} className = "item video-item"> 
            <img src = {videoItem.snippet.thumbnails.default.url} alt = {videoItem.snippet.title}/>
            <div className = "header">{videoItem.snippet.title}</div>  
        </div>
    )

}

export default VideoItem;