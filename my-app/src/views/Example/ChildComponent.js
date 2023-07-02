
import React from 'react';
import './Demo.scss'
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
    // handleSubbmit = (event) => {
    //     event.preventDefault()
    //     alert("click me")
    // }
    // state = {
    //     firstname: '',
    //     lastname: ''
    // }
    // handleChangeFirstName = (event) => {
    //     this.setState(
    //         {
    //             firstname: event.target.value,
    //             lastname: event.target.value,
    //         }
    //     )
    // }
    // handleChangeLastName = (event) => {
    //     this.setState(
    //         {

    //             lastname: event.target.value,
    //         }
    //     )
    // }
    state = {
        showJobs: false
    }
    handleShowHide = (status) => {
        this.setState(
            {
                showJobs: !this.state.showJobs
            }
        )

    }
    

    handleOnclickDelete = (job) =>{
        console.log(">>> handle delete ", job)
        this.props.deleteAJob(job)

    }

    render() {
        console.log('>>> check prps:', this.props)
        // let name =this.props.name;
        // let age=this.props.age;
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? "showJobs =true":"showJobs =false";
        console.log(">>> cehck condition ", check)
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button className='btn-show' onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                :
                    <>
                        <div calssName="job-list">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div>
                                            {item.title}-{item.salary} 
                                            <></> <span onClick={() =>this.handleOnclickDelete(item)}>x</span>

                                        </div>
                                    )
                                })
                            }
                            {/* child component name :{name}-{age}-arr */}
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}
// const ChildComponent = (props) => {
//     console.log(">>> check child props", props)
//     let {arrJobs } = props;
//     return (
//         <>



//             <div calssName="job-list">
//                 {
//                     arrJobs.map((item, index) => {
//                         if (item.salary >= 600){
//                             return (
//                                 <div key={item.id}>
//                                     {item.title}-{item.salary}
//                                 </div>
//                             )
//                         }

//                     })
//                 }
//                 {/* child component name :{name}-{age}-arr */}
//             </div>
//         </>
//     )
// }
export default ChildComponent