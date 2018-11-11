import React, { Component } from 'react'
import { FaPencilAlt } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa'
import { FaSave } from 'react-icons/fa'

class Note extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            title: "",
            genre: "",
            price: "",
            text: 0,
        }
        this.edit = this.edit.bind(this)
        this.remove = this.remove.bind(this)
        this.renderForm = this.renderForm.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
        this.save = this.save.bind(this)
    }
    edit() {
        this.setState({
            editing: true
        })
    }
    remove() {
        alert('removing note')
    }
    save(e) {
        e.preventDefault()
        this.props.onChange(this._newText.value, this.props.index)
        this.setState({
            editing: false
        })
    }
    renderForm() {
        return (
            <div className="note">
                <form onSubmit={this.save}>
                <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            />
        </label>
        <br />
        <label>
          Title:
          <input
            name="title"
            type="text"
            value={this.state.title}            
           />
        </label>
        <br />
        <label>
          Genre:
          <input
            name="genre"
            type="text"
            value={this.state.genre}
           />
        </label>
        <br />
        <label>
          Price:
          <input
            name="price"
            type="number"
            value={this.state.price}
           />
        </label>
        <textarea className="text" ref={input => this._newText = input }/>
        <button onClick={this.save}><FaSave /></button>
        </form>
            </div>
        )
    }
    renderDisplay() {
        return (
            <div className="note">
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

export default Note