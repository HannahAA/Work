import React, { Component } from 'react';

class Details_page extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <div className="leave__count">
                    <div className="leave__count-requested">
                        <h4>Requested Leaves</h4>
                        <h4>3</h4>
                    </div>
                    <div className="leave__count-approved">
                        <h4>Approved Leaves</h4>
                        <h4>5</h4>
                    </div>
                    <div className="leave__count-pending">
                        <h4>Pending Leaves</h4>
                        <h4>1</h4>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Details_page;