import React, { Component } from 'react'


class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
            <h1>Employees</h1>
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        {employee.name} <br />
                        <button type="button" onClick={() => this.props.deleteEmployee(employee.id)}>Fire</button>
                        <hr />
                    </div>
                )
            }
            </section>
        )
    }
}

export default EmployeeList