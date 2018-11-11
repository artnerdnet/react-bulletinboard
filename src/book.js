import React, { Component } from "react";
import { FaPencilAlt } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa'
import { FaSave } from 'react-icons/fa'

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
    this.renderDisplay = this.renderDisplay.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this)
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onChange(this.title.value, this.genre.value, this.price.value, this.props.index)
    this.setState({
        editing: false
    })
  }
    edit() {
        this.setState({
            editing: true
        })
    }
    remove() {
        this.props.onRemove(this.props.index)
        alert("Book removed")
    }
    renderForm() {
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
                        ref={input => this.title = input }
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
                        ref={input => this.price = input }
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
                            ref={input => this.genre = input }
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
                
            </div>
            </div>
        </div>
        );
    }
    renderDisplay() {
        return (
            <div className="book">
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit} id="edit"><FaPencilAlt /></button>
                    <button onClick={this.remove} id="remove"><FaTrash /></button>
                </span>
            </div>
        )
    }
  render() {
    return this.state.editing ? this.renderForm() : this.renderDisplay()
  }
}

export default Book;