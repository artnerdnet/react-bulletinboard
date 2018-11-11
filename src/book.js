import React, { Component } from "react";


class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      genre: "",
      price: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="Book">
        <header>
          <div className="container">
            <nav className="navbar">
              <div className="navbar-brand">
                <span className="navbar-item">Book Manager</span>
              </div>
            </nav>
          </div>
        </header>
        <div className="container">
          <div className="columns">
            <div className="column is-9">
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="title"
                      value={this.state.title}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Price</label>
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      name="price"
                      value={this.state.price}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>              

                <div className="field">
                  <label className="label">Genre</label>
                  <div className="control">
                    <div className="select">
                      <select
                        value={this.state.genre}
                        name="genre"
                        onChange={this.handleChange}
                      >
                        <option value="adventure">Adventure</option>
                        <option value="classics">Classics</option>
                        <option value="fantasty">Fantasty</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="scifi">Sci-Fi</option>
                      </select>
                    </div>
                  </div>
                </div>                

                <div className="field">
                  <div className="control">
                    <input
                      type="submit"
                      value="Submit"
                      className="button is-primary"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="column is-3">
              <pre>
                <code>
                  <p>Title: {this.state.title}</p>
                  <p>Price: {this.state.price}</p>
                  <p>Genre: {this.state.genre}</p>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;