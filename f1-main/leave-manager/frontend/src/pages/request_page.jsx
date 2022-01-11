import React, { Component } from 'react';

class Request_page extends React.Component {

    // leave_types = ["Planned Leave", "Medical/Sick Leave", "Maternity Leave", "Paternity Leave", "Annual Leave", "Emergency Leave", "Half Day Leave"];

    render() { 
        return (
            <React.Fragment>
                <div className="leave__type">
                    <h4 className="label">Leave Type:</h4>

                    <select name="leave-type-choice" id="leave-type-choice" placeholder="Leave Type...">
                        <option value="Planned Leave">Planned Leave</option>
                        <option value="Medical/Sick Leave">Medical/Sick Leave</option>
                        <option value="Maternity Leave">Maternity Leave</option>
                        <option value="Paternity Leave">Paternity Leave</option>
                        <option value="Annual Leave">Annual Leave</option>
                        <option value="Emergency Leave">Emergency Leave</option>
                        <option value="Half Day Leave">Half Day Leave</option>
                    </select>
                </div>

                <div className="leave__reason">
                    <h4 className="label">Reason for leave:</h4>
                    <input type="text" name="reason" id="" />
                </div>

                <div className="leave__plan">
                    <h4 className="label">Hand Over Plan:</h4>
                    <input type="text" name="plan" id="" />
                </div>

                <div className="leave__count">
                    <h4 className="label">No. of days:</h4>
                    <input type="text" name="count" id="" />
                </div>

                <div className="leave__date">
                    <h4 className="label">Date:</h4>
                    <input type="text" name="" id="" />
                </div>

                <div className="submit-button">
                    <button className="btn submit-btn">
                        Submit
                    </button>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Request_page;