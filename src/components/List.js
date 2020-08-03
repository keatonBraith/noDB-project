import React, { Component } from "react";
import Cancel from "./Cancel";
import Add from "./Add";

class List extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
      description: "",
      date: "",
      inputVisible: false,
    };
  }

  universalHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleInput = () => {
    this.setState({
      inputVisible: !this.state.inputVisible,
    });
  };

  render() {
    return (
      <div className="input-main">
        {this.state.inputVisible ? (
          <div>
            <form>
              <input
                className="inputs"
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
              <Add
                className="input-add"
                onClick={(e) => {
                  this.props.addMemory(
                    e,
                    this.state.url,
                    this.state.description,
                    this.state.date
                  );
                  this.setState({ url: "", description: "", date: "" });
                }}
              />
              <Cancel className="input-cancel" onClick={this.toggleInput} />
            </form>
          </div>
        ) : (
          <div className="add-memory">
            <button onClick={this.toggleInput}>ADD A MEMORY</button>
          </div>
        )}
      </div>
    );
  }
}

export default List;
