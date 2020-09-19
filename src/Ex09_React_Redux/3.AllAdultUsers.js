import React, {Component} from 'react';
import { connect } from "react-redux";

class AllAdultUsersComp extends Component
{
    constructor(props)
    {
        super(props);        
    }

    render()
    {
        let adults = this.props.data.users.filter(item => item.age > 17)
        adults = adults.map((user, index) =>
        {
            return (<tr key = {index}>
                <td>{user.id}</td>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.age}</td>
            </tr>)
        })
        return (
        <div>
            <h2>All Adult Users</h2>
            <table border = "1"  >
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

const mapStateToProps = (state) =>
{
    return {data: state}
}

export default connect(mapStateToProps)(AllAdultUsersComp)