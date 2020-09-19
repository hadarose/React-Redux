import React, {Component} from 'react';
import { connect } from "react-redux";
import AllUsersComp from './2.AllUsersComp';

class UserComp extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {id: 0, fname: "", lname: "", age: ""}
        
    }

    getId = (e) =>
    {
        this.setState({id: e.target.value})
    }

    getFname = (e) =>
    {
        this.setState({fname: e.target.value})
    }

    getLname = (e) =>
    {
        this.setState({lname: e.target.value})
    }

    getAge = (e) =>
    {
        this.setState({age: e.target.value})
    }

    addUser = () =>
    {
        this.props.dispatch({type: "AddUser", payload: {...this.state}})
    }

    updateUser = () =>
    {
        this.props.dispatch({type: "UpdateUser", payload: {...this.state}})
    }

    deleteUser = () =>
    {
        this.props.dispatch({type: "DeleteUser", payload: this.state.id})
    }
    

    render()
    {
        return (
        <div>
            
            ID: <input onChange = {this.getId} /><br/>
            First Name: <input onChange = {this.getFname} /><br/>
            Last Name: <input onChange = {this.getLname} /><br/>
            Age: <input onChange = {this.getAge} /><br/>
            <br/>
            <input type = "button" value = "Add" onClick = {this.addUser} />
            <input type = "button" value = "Update" onClick = {this.updateUser} />
            <input type = "button" value = "Delete" onClick = {this.deleteUser} />

            <AllUsersComp />


        </div>
      
        )
    }
}

export default connect()(UserComp)