import React from "react";
import { withRouter } from "react-router";
import logo from '../../assets/images/logoChannel.png';
import Color from "../HOC/Color"
class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/todo')
        }, 3000)
    }
    render() {
        return (
            <>
            <div>
                Hello world from Homepage with Eric & Hoi Dan IT
            </div>
            <div>
                <img src={logo} style={{ width: '200px', height: '200px', marginTop: '20px' }} />
            </div>
        </>
        )
    }
}
// export default withRouter(Home);
export default Color(Home);