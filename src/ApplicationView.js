import React from "react"


class ApplicationView extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            TicketNumber: ""
        }
        this.handleChange= this.handleChange.bind(this)
    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    render() {
        console.log(this.state.firstName)
        return (
            <main>
                <form>
                    First name:
                    <input
                        name="firstName"
                        value={this.state.firstName}
                        handleChange={this.handleChange}
                        />
                    <br />
                    Last name:
                    <input
                        name="lastName"
                        value={this.state.lastName}
                        handleChange={this.handleChange}
                        />
                    <br />
                </form>
                <h2>Put your information here:</h2>
                <p>Your name is: {this.state.firstName} {this.state.lastName}</p>

          </main>
        )
    }
}
export default ApplicationView