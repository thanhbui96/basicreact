
import React from 'react';
class ChildComponent extends React.Component {
    // state = {
    //     name: '',
    //     channel: 'hoi dan it'
    // }

    // handleOnChangeName = (event) => {
    //     this.setState(
    //         {
    //             name: event.target.value,
    //         }
    //     )
    // }
    // handleClickButton = () => {
    //     alert("click me")
    // }
    handleSubbmit = (event) => {
        event.preventDefault()
        alert("click me")
    }
    state = {
        firstname: '',
        lastname: ''
    }
    handleChangeFirstName = (event) => {
        this.setState(
            {
                firstname: event.target.value,
                lastname: event.target.value,
            }
        )
    }
    handleChangeLastName = (event) => {
        this.setState(
            {

                lastname: event.target.value,
            }
        )
    }
    render() {
        //let name = "Eric"
        return (
            <>



                <div>
                    child component
                </div>
            </>
        )
    }
}
export default ChildComponent