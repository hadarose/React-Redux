import React, { Component } from 'react';
import { connect } from "react-redux";
import { ADULT_AGE } from "../constants/constants";

class Adults extends Component {
    constructor(props) {
        super();
    }

    render() {
        let adults = this.props.data.users.filter(item => item.age > ADULT_AGE);
        adults = adults.map((user, index) => {
            return <tr key={index}>
                <td>{user.id}</td>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.age}</td>
            </tr>
        })
        return (
            <div className="adultDiv">
                <h2>All Adult Users</h2>
                <table border="1"  >
                    <tbody>
                        <tr>
                            <td ><b>ID</b></td>
                            <td ><b>First Name</b></td>
                            <td ><b>Last Name</b></td>
                            <td ><b>Age</b></td>
                        </tr>
                        {adults}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { data: state }
}

export default connect(mapStateToProps)(Adults)