
import React from 'react';
import ChildComponent from './ChildComponent';
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
        lastname: '',
        arrJobs:[
            {id:'abcJob1', title:"develop1", salary:'500'},
            {id:'abcJob2', title:"develop2", salary:'600'},
            {id:'abcJob3', title:"develop3", salary:'700'}
        ]
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
                    <ChildComponent name={this.state.firstname} age={'25'} arrJobs={this.state.arrJobs}/>
                </div>

            </>
        )
    }
}
export default MyComponent