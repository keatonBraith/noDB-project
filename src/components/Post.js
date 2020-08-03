import React, { Component } from "react";
import Recording from "./Recording";
import Delete from "./Delete";
import Edit from "./Edit";
import Record from "./Record";

class Post extends Component {
  constructor(props) {
    super(props);
    const { url, description, date } = this.props.info;
    this.state = {
      edit: false,
      url: url,
      description: description,
      date: date,
      dropdownVisible: false,
    };
  }

  handleChange = (value) => {
    this.setState({ description: value });
  };

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  };

  saveDescription = (e) => {
    e.preventDefault();
    console.log(this.props);
    this.props.editMemory(this.props.info.id, this.state.description);
    this.toggleEdit();
  };

  toggleDropDown = () => {
    this.setState({
      dropdownVisible: !this.state.dropdownVisible,
    });
  };

  render() {
    return (
      <div className="post">
        <div className="post-btns">
          <Edit className="edit-button" onClick={this.toggleEdit} />
          <Delete
            className="delete-button"
            onClick={() => this.props.deleteMemory(this.props.info.id)}
          />
          <div>
            <div>
              <Record className="dropdown" onClick={this.toggleDropDown} />
            </div>
            {this.state.dropdownVisible ? (
              <button className="recorder-menu recorder-collapse">
                <Recording className="recorder" />
              </button>
            ) : null}
          </div>
        </div>
        <main className="post-main">
          <div className="image-containers">
            <img
              className="post-image"
              src={this.props.info.url}
              alt="Memory"
            />
          </div>
          <div className="post-side">
            {this.state.edit ? (
              <div>
                <textarea
                  className="edit-input"
                  type="text"
                  value={this.state.description}
                  onChange={(e) => {
                    this.handleChange(e.target.value);
                  }}
                ></textarea>
                <button className="save-button" onClick={this.saveDescription}>
                  Save
                </button>
                <button className="cancel-button" onClick={this.toggleEdit}>
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <p className="post-description">
                  {this.props.info.description}
                </p>
              </div>
            )}
            <p className="post-date">{this.props.info.date}</p>
          </div>
        </main>
      </div>
    );
  }
}

export default Post;
