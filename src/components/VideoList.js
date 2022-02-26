import React from 'react'

class VideoList extends React.Component{
    // constructor(props) {
    //     super(props);

    // }

    render() {
      return (
          <div>The number of fetched is videos is {this.props.list.length}</div>
      )
    }
}
export default VideoList;