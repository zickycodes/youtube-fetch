import React from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  makeRequest = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({list:response.data.items})
    
    console.log(response);
  };

  render() {
    return (
        <div className = "ui container">
         <SearchBar submit={this.makeRequest}/>
         <VideoList list = {this.state.list}/>    
        </div>
      
    );
  }
}

export default App;
