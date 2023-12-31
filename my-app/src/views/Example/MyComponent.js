
import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
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
        arrJobs: [
            { id: 'abcJob1', title: "develop1", salary: '500' },
            { id: 'abcJob2', title: "develop2", salary: '600' },
            { id: 'abcJob3', title: "develop3", salary: '700' }
        ]
    }
    addNewJob = (job) => {
        console.log('check job from parent:', job)
        let currenJobs = this.state.arrJobs;
        currenJobs.push(job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            // arrJobs: currenJobs
        })
    }

    deleteAJob = (job) => {
        let currenJobs = this.state.arrJobs;
        currenJobs = currenJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currenJobs
        })

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
                <AddComponent
                    addNewJob={this.addNewJob}
                />


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
                            onClick={(event) => this.handleSubbmit(event)}
                        />
                    </form>
                     <ChildComponent arrJobs={this.state.arrJobs} deleteAJob ={this.deleteAJob} />
                </div>
               
            </>
        )
    }
}
export default MyComponent