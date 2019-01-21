import React, { Component } from 'react'


class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
            <h1>Owners</h1>
                {
                    this.props.owners.map(owner =>
                        <div key={owner.id}>
                            {owner.name} <br />
                            {owner.phoneNumber} <br />
                            <button type="button" onClick={() => this.props.deleteOwner(owner.id)}>Remove</button>
                            <hr></hr>
                        </div>
                    )
                }
            </section>
        )
    }
}

export default OwnerList