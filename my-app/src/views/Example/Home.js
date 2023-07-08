import React from "react";
import { withRouter } from "react-router";
class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/todo')
        }, 3000)
    }
    render() {
        return (
            <div>
                hello dit con me hhhhhhhhhhhhhhhhhhh
            </div>
        )
    }
}
export default withRouter(Home);