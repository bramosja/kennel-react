import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ""}

        this.handleChange = this.handleChange.bind(this)
        // this.handleKeyUp = this.handleKeyUp.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    searchFunction(input) {
        let employees = this.props.data.employees
        let searchInput = employees.filter(employee => {
            let containsInput = false

            if(employee.name.includes(input)){
                containsInput = true
            }
            return containsInput
        })
        return searchInput
    }

    render() {
        return (
            <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/animals">Animals</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees">Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/owners">Owners</Link>
                    </li>
                    <li className="nav-item">
                        <input type="text" placeholder="Search" onChange={this.handleChange} onKeyUp={() => {
                            let inputArray = this.searchFunction(this.state.value)
                            console.log(inputArray)
                        }} />
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar