import React, { Component } from 'react';
import { connect } from "react-redux";
import Adults from './Adults';

class Users extends Component {
    constructor(props) {
        super();
    }

    render() {
        let users = this.props.data.users.map((user, index) => {
            return <tr key={index}>
                <td>{user.id}</td>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.age}</td>
            </tr>
        })
        return (
            <div className="usersDiv">
                <h2>All Users</h2>
                <table border="1" >
                    <tbody>
                        <tr>
                            <td><b>ID</b></td>
                            <td><b>First Name</b></td>
                            <td><b>Last Name</b></td>
                            <td><b>Age</b></td>
                        </tr>
                        {users}
                    </tbody>
                </table>
                <Adults />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { data: state }
}

export default connect(mapStateToProps)(Users)