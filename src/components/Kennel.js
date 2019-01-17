import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import LocationList from "./location/LocationList"


export default class Kennel extends Component {
    render() {
        return (
            <div>
                <LocationList />
                <EmployeeList />
            </div>
        );
    }
}