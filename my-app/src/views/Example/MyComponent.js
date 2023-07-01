
import React from 'react';
class MyComponent extends React.Component {
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
                    hello from
                    <form>
                        <label htmlFor="fname">First name:</label><br />
                        <input
                            type="text"
                            value={this.state.firstname}
                            onChange={(event) => this.handleChangeFirstName(event)}
                        />
                        <br />
                        <label htmlFor="fname">Last name:</label><br />
                        <input
                            type="text"
                            value={this.state.lastname}
                            onChange={(event) => this.handleChangeLastName(event)}
                        />
                        <br />
                        <br />
                        <input type="button" value="Submit" 
                        onClick={(event)=> this.handleSubbmit(event)}
                        />
                    </form>
                </div>

            </>
        )
    }
}
export default MyComponent