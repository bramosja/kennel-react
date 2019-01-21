import React, { Component } from "react"
import ApplicationViews from "./ApplicationViews"

import "./Kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"


class Kennel extends Component {
    render() {
        return (
            <React.Fragment>
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default Kennel