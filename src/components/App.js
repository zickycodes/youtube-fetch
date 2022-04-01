import React, {useState, useEffect} from "react";
// import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useSearch from "../hooks/useSearch";


const App = () => {
  //  const [list, setList] = useState([]);
   const [clickedVideo, setClickedVideo] = useState(null);
   const [videos, search] = useSearch('programming');

  //  useEffect(()=> {
  //    setClickedVideo(videos[0])
  //  }, [videos])

  return (
    <div className = "ui container">
      {/* This submits the user's input for a request to be made to an outside API. Afterwards, the result is collected and stored in the state property in the app component*/}
     
     <SearchBar submitRequest={search}/>
  

     <div className = "ui grid">

       {/* The video detail component takes a full video object stored in the state propery after the VideoList component below has been rendered. This video object is the clicked video by the user. An onclick event was added to each item on the videoList to highlight a video object to be stored on the App's component state object. */}
      
         <div className = "eleven wide column">
         <VideoDetail video = {clickedVideo}/>
         </div>

            {/* This pushes the list to the videoList state component & passes a function to retrieve the selected video from the videoList component so it can be stored for use by the videoDetail component in the state property of the app component*/}

         <div className = "four wide columnn">
         <VideoList videoList={videos} selectedVideo={setClickedVideo}/> 
         </div>
    
     </div>
    </div>
  
);

}


export default App;
