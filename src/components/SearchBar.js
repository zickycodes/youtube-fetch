import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {term: ""}
  }

  onInputChange = event => {
    this.setState({term:event.target.value})
  }

  whenFormIsSubmitted = event => {
    event.preventDefault();
    this.props.submitRequest(this.state.term);
  }

  render() {
      return (
          <div className = "search-bar ui segment">
            <form className = "ui form"  onSubmit = {this.whenFormIsSubmitted}>
              <div className = "field">
                <label>Video Search</label>
                <input
                type = "text"
                value = {this.state.term}
                onChange = {this.onInputChange}
                />
              </div>
            </form>     
          </div>
      )
  }
}

export default SearchBar;