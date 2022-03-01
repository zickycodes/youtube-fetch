import React from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [], clickedVideo:null };
  }

  // componentDidMount() {
  //   this.makeRequest('lagos')
  // }

  makeRequest = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term 
      },
    });

    this.setState({
      list:response.data.items,
      clickedVideo: response.data.items[0]
    })
    
    console.log(response);
  };

  onclickedVideo = (video) => {
    this.setState({clickedVideo:video})
  }

  render() {
    return (
        <div className = "ui container">
          {/* This submits the user's input for a request to be made to an outside API. Afterwards, the result is collected and stored in the state property in the app component*/}
         
         <SearchBar submitRequest={this.makeRequest}/>
         {/* This pushes the list to the videoList state component & passes a function to retrieve the selected video from the videoList component so it can be stored for use by the videoDetail component in the state property of the app component*/}

         <div className = "ui grid">
           <div className = "row">
             <div className = "eleven wide column">
             <VideoDetail video = {this.state.clickedVideo}/>
             </div>

             <div className = "four wide columnn">
             <VideoList videoList={this.state.list} selectedVideo={this.onclickedVideo}/> 
             </div>
            </div>
         </div>
        </div>
      
    );
  }
}


export default App;
