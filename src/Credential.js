import React from "react"


class Credential extends React.Component{
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        return (
            <div>
                <button>LOG IN </button>
                </div>
        )
    }
}
export default Credential