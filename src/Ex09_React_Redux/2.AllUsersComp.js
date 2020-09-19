import React, {Component} from 'react';
import { connect } from "react-redux";
import AllAdultUsers from './3.AllAdultUsers';

class AllUsersComp extends Component
{
    constructor(props)
    {
        super(props);        
    }

    render()
    {
        let users = this.props.data.users.map((user, index) =>
        {
            return <tr key = {index}>
                <td>{user.id}</td>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.age}</td>
            </tr>
        })
        return (
        <div>
            <h2>All Users</h2>
            <table border = "1" >
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

            <AllAdultUsers />
            
        </div>
      
        )
    }
}

const mapStateToProps = (state) =>
{
    return {data: state}
}

export default connect(mapStateToProps)(AllUsersComp)