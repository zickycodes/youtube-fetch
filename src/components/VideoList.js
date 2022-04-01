import React from "react";
import VideoItem from "./VideoItem";

// Just to reenforce the knowledge, a prop passed from a parent component to a child component is wrapped into an object. This object contains the prop property assigned in the parent component

// The object passed into the VideoList component represents the object that contains the prop propery(list) passed in the parent component(App).

const VideoList = ({ videoList, selectedVideo }) => {
  const renderedList = videoList.map((video, idx) => {
    return (
      <VideoItem videoItem={video} selectedVideo={selectedVideo} key={idx} />
    );
  });

  return <div className="ui relaxed divideed list">{renderedList}</div>;

  //     return <div className = "ui relaxed divided list">
  //         {videoList.map((item, idx)=>{
  //             return <VideoItem key={idx} videoItem={item}  selectedVideo={selectedVideo}
  //  />        })}
  //     </div>
  
};
export default VideoList;
