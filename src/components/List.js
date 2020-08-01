import React, { Component } from "react";

class List extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
      description: "",
      date: "",
    };
  }

  universalHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="input-main">
        <form
          onSubmit={(e) => {
            this.props.addMemory(
              e,
              this.state.url,
              this.state.description,
              this.state.date
            );
            this.setState({ url: "", description: "", date: "" });
          }}
        >
          <input
            className="inputs url-input"
            name="url"
            value={this.state.url}
            placeholder="Add A URL"
            type="url"
            onChange={(e) => this.universalHandler(e)}
          />
          <input
            className="inputs"
            name="description"
            value={this.state.description}
            placeholder="Add A Description"
            type="text"
            onChange={(e) => this.universalHandler(e)}
          />
          <input
            className="inputs"
            name="date"
            value={this.state.date}
            placeholder="Add A date"
            type="text"
            onChange={(e) => this.universalHandler(e)}
          />
          <button className="input-btn">ADD</button>
        </form>
      </div>
    );
  }
}

export default List;
