import React from "react";
import { withRouter } from "react-router";
import logo from '../../assets/images/logoChannel.png';
import Color from "../HOC/Color";
import { connect } from 'react-redux';
class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/todo')
        }, 3000)
    }
    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user);
    }
    handleCreateUser = (user) => {
this.props.addUserRedux();
    }
    render() {
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>
                    Hello world from Homepage with Eric & Hoi Dan IT
                </div>
                <div>
                    <img src={logo} style={{ width: '200px', height: '200px', marginTop: '20px' }} />
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    &nbsp;<span onClick={() => this.handleDeleteUser(item)}>x</span>

                                </div>
                            )
                        })

                    }
                    <button onClick={() => this.handleCreateUser()}>Add new</button>
                </div>
            </>
        )
    }
}
// export default withRouter(Home);
const mapStateToProps = (state) => {
    return { dataRedux: state.users }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux:()=>dispatch({type:'CREATE_USER'}),
    }
}
// export default RTCPeerConnection()(Color(Home));
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));