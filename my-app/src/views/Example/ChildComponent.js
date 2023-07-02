
import React from 'react';
// class ChildComponent extends React.Component {
//     // state = {
//     //     name: '',
//     //     channel: 'hoi dan it'
//     // }

//     // handleOnChangeName = (event) => {
//     //     this.setState(
//     //         {
//     //             name: event.target.value,
//     //         }
//     //     )
//     // }
//     // handleClickButton = () => {
//     //     alert("click me")
//     // }
//     // handleSubbmit = (event) => {
//     //     event.preventDefault()
//     //     alert("click me")
//     // }
//     // state = {
//     //     firstname: '',
//     //     lastname: ''
//     // }
//     // handleChangeFirstName = (event) => {
//     //     this.setState(
//     //         {
//     //             firstname: event.target.value,
//     //             lastname: event.target.value,
//     //         }
//     //     )
//     // }
//     // handleChangeLastName = (event) => {
//     //     this.setState(
//     //         {

//     //             lastname: event.target.value,
//     //         }
//     //     )
//     // }
//     render() {
//         console.log('>>> check prps:', this.props)
//         // let name =this.props.name;
//         // let age=this.props.age;
//         let { name, age, arrJobs } = this.props;
//         return (
//             <>



//                 <div calssName="job-list">
//                     {
//                         arrJobs.map((item, index) => {
//                             return (
//                                 <div>
//                                     {item.title}-{item.salary}
//                                 </div>
//                             )
//                         })
//                     }
//                     {/* child component name :{name}-{age}-arr */}
//                 </div>
//             </>
//         )
//     }
// }
const ChildComponent = (props) => {
    console.log(">>> check child props", props)
    let {arrJobs } = props;
    return (
        <>



            <div calssName="job-list">
                {
                    arrJobs.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {item.title}-{item.salary}
                            </div>
                        )
                    })
                }
                {/* child component name :{name}-{age}-arr */}
            </div>
        </>
    )
}
export default ChildComponent