import React, { Component } from 'react';
import { connect } from "react-redux";
import Users from './Users';
import { Input } from "../components/Input";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = { id: 0, fname: "", lname: "", age: "" }
    }

    getId = (evt) => {
        this.setState({ id: evt.target.value })
    }

    getFname = (evt) => {
        this.setState({ fname: evt.target.value })
    }

    getLname = (evt) => {
        this.setState({ lname: evt.target.value })
    }

    getAge = (evt) => {
        this.setState({ age: evt.target.value })
    }

    addUser = () => {
        this.props.dispatch({ type: "AddUser", payload: { ...this.state } })
    }

    updateUser = () => {
        this.props.dispatch({ type: "UpdateUser", payload: { ...this.state } })
    }

    deleteUser = () => {
        this.props.dispatch({ type: "DeleteUser", payload: this.state.id })
    }

    render() {
        return (
            <div className="userDiv">
                <h3>Insert User's Details:</h3>
                ID: <input onChange={this.getId} /><br />
                First Name: <input onChange={this.getFname} /><br />
                Last Name: <input onChange={this.getLname} /><br />
                Age: <input onChange={this.getAge} /><br /><br />

                <Input onClick={this.addUser}>Add</Input>
                <Input onClick={this.updateUser}>Update</Input>
                <Input onClick={this.deleteUser}>Delete</Input>

                <Users />

            </div>
        )
    }
}

export default connect()(User)